import { defineStore } from 'pinia'
import { User } from '@/services/user/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    list: [],
    loading: false
  }),
  actions: {
    async getUser(uid) {
      const user = await User.getUserById(uid)

      this.user = {
        ...user,
        cards: user.role === 'admin' ? [] : JSON.parse(user.cards)
      }
    },
    async getList() {
      this.loading = true
      this.list = await User.listUsers()
      this.loading = false
    }
  },
  persist: true
})
