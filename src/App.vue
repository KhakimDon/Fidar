<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NeuralNetwork from './components/NeuralNetwork.vue'
import Navbar from './components/Navbar.vue';
import { defineComponent, ref } from 'vue';
import './style.css'
import Menu from './components/Menu.vue';
import SwiperContent from './components/SwiperContent.vue';
import Preloader from './components/preloader.vue';
import axios from 'axios'
// firebase 
import { query, collection, getDocs, orderBy, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.ts"
import {useLangStore} from './stores/lang'
// firebase 

// import en from "./locales/en.json";
// import ru from "./locales/ru.json";
// import uz from "./locales/uz.json";
// import pr from "./locales/pr.json";



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
      useLangStore: useLangStore()
    }
  },
  methods: {
    // async SET(){
    //   console.log(en,ru,uz,pr);
    //   // await setDoc(doc(db, "fidar", "about"), {
    //   //   ru: {
    //   //     title: ru.aboutBtn,
    //   //     text: ru.about
    //   //   },
    //   //   pr: {
    //   //     title: `درباره ما`,
    //   //     text: `شرکت ما متخصص در تولید دوربین های نظارتی، ارائه راه حل های مدرن برای امنیت و کنترل است. ما دوربین‌هایی با کیفیت بالا ایجاد می‌کنیم که نظارت تصویری قابل اعتمادی را در زمینه‌های مختلف ارائه می‌کنند: از خانه‌های شخصی گرفته تا امکانات تجاری و مؤسسات دولتی. تولید ما بر اساس فن آوری های نوآورانه و استانداردهای با کیفیت بالا برای ارائه حفاظت و نظارت موثر برای مشتریانمان است.`
    //   //   },
    //   //   uz: {
    //   //     title: uz.aboutBtn,
    //   //     text: uz.about
    //   //   },
    //   //   en: {
    //   //     title: en.aboutBtn,
    //   //     text: en.about
    //   //   },
    //   // });

    //   // await setDoc(doc(db, "fidar", "gallery"), {
    //   //   en: en.video,
    //   //   ru: ru.video,
    //   //   uz: uz.video,
    //   //   pr: "ویدیو درباره ما",
    //   //   gallery: [
    //   //     "https://i.ibb.co/5rb0mRR/999-1024x576.jpg",
    //   //     "https://i.ibb.co/5rb0mRR/999-1024x576.jpg",
    //   //     "https://i.ibb.co/5rb0mRR/999-1024x576.jpg",
    //   //     "https://i.ibb.co/5rb0mRR/999-1024x576.jpg",
    //   //   ]
    //   // });

    // },
    async get() {
      let a = ref([])
      const q = query(collection(db, "fidar"))
      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        a.value.push(doc.data())
      })
      // about 
      console.log(a.value);
      
      this.useLangStore.ru.aboutBtn = a.value[0].ru.title
      this.useLangStore.pr.aboutBtn = a.value[0].pr.title
      this.useLangStore.uz.aboutBtn = a.value[0].uz.title
      this.useLangStore.en.aboutBtn = a.value[0].en.title
      this.useLangStore.ru.about = a.value[0].ru.text
      this.useLangStore.uz.about = a.value[0].uz.text
      this.useLangStore.en.about = a.value[0].en.text
      this.useLangStore.pr.about = a.value[0].pr.text
   
      
      
    }
  },
  created(){
    this.get()
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
    <!-- <button @click="this.SET()" class="btn">upload</button> -->
    <Preloader v-if="loading" />
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
