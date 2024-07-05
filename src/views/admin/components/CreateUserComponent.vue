<script setup>
import { ref, computed } from 'vue'
import useUser from '@/domain/composable/user.composable'

const email = ref('')
const name = ref('')
const role = ref('')
const loading = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  loading.value = true

  if (!email.value || !name.value || !role.value) {
    alert('Completa todos los campos')
    return
  }

  useUser()
    .createUser(name.value, email.value, role.value)
    .catch(() => alert('Error al crear el usuario'))
    .finally(() => (loading.value = false))
}

const valid = computed(() => {
  return Boolean(email.value) && Boolean(name.value) && Boolean(role.value)
})
</script>

<template>
  <section class="create">
    <form @submit="handleSubmit">
      <input type="text" id="name" name="name" placeholder="name" v-model="name" />
      <input type="email" id="email" name="email" placeholder="email" v-model="email" />

      <label for="admin">
        <input type="radio" name="role" value="admin" id="admin" v-model="role" /> Admin
      </label>
      <label for="user">
        <input type="radio" name="role" value="user" id="user" v-model="role" /> User
      </label>

      <button :class="{ loading: loading }" type="submit" :disabled="!valid">Create user</button>
    </form>
  </section>
</template>

<style>
.create {
  form {
    label {
      color: white;
    }
  }
}
</style>
