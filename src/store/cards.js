import { defineStore } from 'pinia'
import cards from '@/assets/cartas.json'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: cards,
    loading: false
  }),
  actions: {
    async init() {
      this.loading = true
      this.cards = cards
      this.loading = false
    },
    async create(body) {},
    async update(id, body) {},
    async remove(id) {}
  }
})
