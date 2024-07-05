<script setup>
import { onMounted, computed } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import useAuth from '@/domain/composable/auth.composable'

const userStore = useUserStore()
const router = useRouter()

const user = computed(() => userStore.user)

const logout = () => {
  useAuth()
    .logout()
    .then(() => {
      router.push({ name: 'Home' })
    })
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login" v-if="!user">Login</RouterLink>
      <RouterLink to="/admin" v-if="user">Admin</RouterLink>
      <RouterLink to="/my-cards" v-if="user">Mis cards</RouterLink>
      <button @click="logout" v-if="user">Logout</button>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
