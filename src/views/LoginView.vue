<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/domain/composable/auth.composable'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  loading.value = true

  if (!email.value || !password.value) {
    alert('Completa todos los campos')
    return
  }

  useAuth()
    .login(email.value, password.value)
    .then(() => router.push({ name: 'Home' }))
    .catch(() => alert('Credenciales incorrectas'))
    .finally(() => (loading.value = false))
}

const valid = computed(() => {
  return Boolean(email.value) && Boolean(password.value)
})
</script>

<template>
  <main>
    <form @submit="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" autocomplete />
      <button :class="{ loading: loading }" type="submit" :disabled="!valid">Ingresar</button>
    </form>
  </main>
</template>

<style>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 300px);
  align-items: center;
}
</style>
