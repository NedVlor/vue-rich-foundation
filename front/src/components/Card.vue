<template>
  <v-card v-if="item" class="mx-auto" max-width="344">
    <v-img :src="item.avatar_url" height="200px" cover></v-img>

    <v-card-title>
      {{ item.login }}
    </v-card-title>

    <v-card-subtitle> {{ item.repos?.length }} repos </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="explore"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <div v-for="item in item.repos" :key="item">{{ item.name }}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useUsersStore } from "@/store/users.js";
const usersStore = useUsersStore();
const props = defineProps({
  item: Object, // use the correct type for the 'item' prop
});

//let item = props.item;
const item = ref(props.item);
let show = ref(false);
onMounted(() => {
  //  console.log(props.item);
  //item.value=props.item
});
function explore() {
  usersStore.getAdditionalInfo(item.value.id);
  show.value = !show.value;
}
</script>
<style></style>
