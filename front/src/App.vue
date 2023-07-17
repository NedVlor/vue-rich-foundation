<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    
        <v-toolbar-title>My files</v-toolbar-title>
      
        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
      
        <v-btn variant="text" icon="mdi-filter"></v-btn>
      
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
        
      <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">

	{{counter}}
	<v-btn icon="mdi-minus-thick" variant="tonal" @click="remove"></v-btn>
	<v-btn icon="mdi-plus-thick" variant="tonal" @click="add"></v-btn>
      </v-main>
    </v-layout>
  </v-card>
  <Footer/>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
const drawer= ref(false)
const group=ref(null)
const items=ref( [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ])
let counter = ref(0);  //
function add(){
counter.value++;
console.log(counter.value);
}
function remove(){
counter.value--;
console.log(counter.value);
}
</script>
