<script setup>
import Cards from '@/components/Cards.vue'
import { useCardsStore } from '@/store/cards.js'

const cardsStore = useCardsStore()
</script>

<template>
  <main>
    <Cards
      v-for="carta in cardsStore.cards"
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
