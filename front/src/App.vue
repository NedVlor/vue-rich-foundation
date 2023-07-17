<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <div style="width:100%;">
    <Nav/>
    <v-main style="height: 500px;">
	{{counter}}
	<v-btn icon="mdi-minus-thick" variant="tonal" @click="remove"></v-btn>
	<v-btn icon="mdi-plus-thick" variant="tonal" @click="add"></v-btn>
      </v-main>
      <Footer/>
      </div>
    </v-layout>
  </v-card>
</template>
<script setup>
import Nav from '@/components/Nav.vue'
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
