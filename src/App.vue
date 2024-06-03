<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NeuralNetwork from './components/NeuralNetwork.vue'
import Navbar from './components/Navbar.vue';
import { defineComponent } from 'vue';
import './style.css'
import Menu from './components/Menu.vue';
import SwiperContent from './components/SwiperContent.vue';
import Preloader from './components/preloader.vue';

export default defineComponent({
  name: 'App',
  components: {
    NeuralNetwork,
    Navbar,
    Menu,
    SwiperContent,
    Preloader
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
});

</script>

<template>
  <div>
    <Preloader v-if="!this.loading"/>
    <Navbar class="z-[2]" />
    <div class="h-[90%] z-[99] absolute w-[100%] max-w-[1200px] left-[50%] translate-x-[-50%]">
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
