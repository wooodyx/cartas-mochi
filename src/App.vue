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
      <RouterLink to="/admin" v-if="user?.role === 'admin'">Admin</RouterLink>
      <RouterLink to="/my-cards" v-if="user && user?.role === 'user'">Mis cards</RouterLink>
      <div class="user" v-if="user">
        <h1 v-if="user">
          Bienvenido~ <span>{{ user.name }}</span>
        </h1>
        <span @click="logout">Logout</span>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.user {
  position: absolute;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    line-height: 0.9;
    color: #ffd312;
    span {
      font-size: 1.5rem;
      color: #fff;
      cursor: inherit;
      &:hover {
        text-decoration: inherit;
      }
    }
  }
  span {
    font-size: 1rem;
    cursor: pointer;
    color: var(--color-mochi-light);

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
