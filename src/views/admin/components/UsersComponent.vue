<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/user.js'
import Cards from '@/components/Cards.vue'

const userStore = useUserStore()

const select = ref(null)
const selected = ref([])

onMounted(() => {
  if (!userStore.list.length) {
    userStore.getList()
  }
})

const handlerSelect = (index) => {
  select.value = userStore.list[index]
}
</script>

<template>
  <div class="users">
    <div class="table">
      <div class="table-header">
        <span></span>
        <span>Name</span>
        <span>Email</span>
        <span>Role</span>
      </div>
      <div class="table-body" v-for="(user, index) in userStore.list" :key="user.id">
        <input
          type="radio"
          name="user"
          @click="handlerSelect(index)"
          :value="user"
          v-model="select"
        />
        <span>{{ user.name }}</span>
        <span>{{ user.email }}</span>
        <span>{{ user.role }}</span>
      </div>
    </div>
    <div class="cards" v-if="select?.cards">
      <Cards v-for="carta in select.cards" :key="carta.id" :name="carta.name" :rare="carta.rare" />
    </div>
  </div>
</template>

<style>
.users {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
  align-items: flex-start;
}

.table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.table-header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  span {
    text-align: center;
  }
}

.table-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px 0;
  gap: 10px;
  border-bottom: 1px solid #ccc;
  span {
    text-align: center;
  }

  &:last-child {
    border-bottom: none;
  }
}

.cards {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -10px;
}
</style>
