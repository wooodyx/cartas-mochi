<script setup>
import { ref, onMounted } from 'vue'

const gradient = ref('')
const image = ref('')
const props = defineProps({
  name: {
    type: String
  },
  rare: {
    type: Number
  }
})

onMounted(() => {
  gradient.value = `gradient-${props.rare}`
  image.value = new URL(`../assets/images/rare-${props.rare}.png`, import.meta.url).href
})
</script>

<template>
  <section :class="gradient">
    <img :src="image" :alt="name" loading="lazy" />
    <p>{{ name }}</p>
  </section>
</template>

<style scoped>
section {
  width: 200px;
  height: 300px;
  border-radius: 8px;
  border: 10px solid #fff;
  margin: 10px;
  display: grid;
  grid-template-rows: 160px 1fr;
  align-items: center;
  justify-content: center;
  font-family: 'SoulBillani', sans-serif;
  text-align: center;
  font-size: 16px;
  img {
    width: 150px;
    filter: drop-shadow(0px 0px 5px white);
    height: 150px;
    margin: auto;
    padding-top: 16px;
    object-fit: contain;
  }

  p {
    background: white;
    border-radius: 8px;
    margin: 0 16px;
    padding: 8px;
  }
}

.gradient-1 {
  background: linear-gradient(
    -60deg,
    rgba(42, 115, 255, 1) 0%,
    rgba(224, 234, 255, 1) 46%,
    rgba(42, 115, 255, 1) 100%
  );

  color: #163e7f;
}

.gradient-2 {
  background: linear-gradient(
    -60deg,
    rgba(146, 0, 255, 1) 0%,
    rgba(244, 233, 255, 1) 46%,
    rgba(146, 0, 255, 1) 100%
  );
  color: #44007f;
}

.gradient-3 {
  background: linear-gradient(
    -60deg,
    rgba(255, 207, 0, 1) 0%,
    rgba(255, 255, 214, 1) 46%,
    rgba(255, 207, 0, 1) 100%
  );
  color: #4c3d00;
}
</style>
