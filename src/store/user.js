import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    const storedUser = localStorage.getItem('mochi-user')
    const user = ref(storedUser ? JSON.parse(storedUser) : null)

    return { user }
  },
  persist: true
})
