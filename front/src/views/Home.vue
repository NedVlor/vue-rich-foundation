<template>
  <div class="card-wrapper">
    <Card v-for="(item, i) in usersStore.users" :key="i" :item="item" />
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/store/users.js";
const usersStore = useUsersStore();
usersStore.get();
</script>

<style>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.v-card {
  margin: 1rem;
}
</style>
