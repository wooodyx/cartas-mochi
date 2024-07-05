import { defineStore } from 'pinia'
import cards from '@/assets/cartas.json'
import { useUserStore } from '@/store/user'
import { Cards } from '@/services/cards/cards'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: cards,
    myCards: [],
    loading: false
  }),
  actions: {
    async init() {
      this.loading = true
      this.cards = cards
      const userStore = useUserStore()
      if (userStore.user) {
        this.listByUserId()
      }
    },
    async listByUserId() {
      const userStore = useUserStore()
      const response = await Cards.getCardsByUserId(userStore.user.uid)
      this.myCards = response
      this.loading = false
    },
    async create(body) {},
    async update(id, body) {},
    async remove(id) {}
  }
})
