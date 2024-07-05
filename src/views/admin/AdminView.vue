<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
</script>

<template>
  <main class="admin-view">
    <aside>
      <nav>
        <RouterLink to="/admin/users">Users</RouterLink>
        <RouterLink to="/admin/create">Create User</RouterLink>
      </nav>
    </aside>
    <section>
      <RouterView />
    </section>
  </main>
</template>

<style>
.admin-view {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  justify-content: inherit;
  align-items: flex-start;
}

aside {
  background-color: #f7a9c4;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border-radius: 10px;

  nav {
    display: flex;
    flex-direction: row;

    a {
      color: black;
    }
  }
}
</style>
