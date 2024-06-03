<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NeuralNetwork from './components/NeuralNetwork.vue'
import Navbar from './components/Navbar.vue';
import { defineComponent } from 'vue';
import './style.css'
import Menu from './components/Menu.vue';
import SwiperContent from './components/SwiperContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    NeuralNetwork,
    Navbar,
    Menu,
    SwiperContent
  },
});

</script>

<template>
  <div>
    <Navbar class="z-[2]" />
    <div class="h-[90%] z-[99] absolute w-[100%]">
      <SwiperContent />
    </div>
    <NeuralNetwork class="bg" />
    <Menu />
    <RouterView />
  </div>

</template>

<style scoped>


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
