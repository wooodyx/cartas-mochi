<script setup>
import { useUserStore } from '@/store/user'
import Cards from '@/components/Cards.vue'

const userStore = useUserStore()
</script>

<template>
  <main v-if="userStore?.user?.cards">
    <Cards
      v-for="carta in userStore.user.cards"
      :key="carta.id"
      :name="carta.name"
      :rare="carta.rare"
    />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
