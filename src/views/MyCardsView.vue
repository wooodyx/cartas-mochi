<script setup>
import { onMounted } from 'vue'
import { useCardsStore } from '@/store/cards.js'
import Cards from '@/components/Cards.vue'

const cardsStore = useCardsStore()

onMounted(() => {
  if (!cardsStore.myCards.length) {
    cardsStore.listByUserId()
  }
})
</script>

<template>
  <main>
    <Cards
      v-for="carta in cardsStore.myCards"
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
