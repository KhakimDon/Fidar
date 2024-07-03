<template>
  <div class="about">
    <div class="h-[100vh] w-[100%] fixed z-[9999999] bg-[#01BAF1] top-0 left-0">
      <div class="navbar bg-base-100">
        <div class="max-w-[1200px] w-[100%] mx-auto">
          <a class="btn btn-ghost text-xl">ADMIN PANEL FIDARNETWORK</a>
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto mt-[20px] flex gap-[40px] h-[100%]">
        <div class="w-[250px]  min-h-[400px] flex flex-col gap-[10px]">
          <button @click="event = 'about', AboutGet()" :class="{ active: event == 'about' }" class="btn w-[100%]">About
            us / درباره
            ما</button>
          <button @click="event = 'gallery', galleryGet()" :class="{ active: event == 'gallery' }"
            class="btn w-[100%]">Gallery /
            آلبوم
            عکس</button>
        </div>
        <div class="min-h-[400px] flex-1">

          <div v-if="event == 'about'">
            <div class="h-[700px] overflow-y-scroll pb-[100px]">
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Persian):</h3>
                <input v-model="titlepr" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Russian):</h3>
                <input v-model="titleru" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(English):</h3>
                <input v-model="titleen" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b-[20px] border-[#21a5cd] pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Uzbek):</h3>
                <input v-model="titleuz" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Text(Persian):</h3>
                <textarea v-model="textpr" class="px-[10px] h-[200px] textarea w-[99%]" type="text"> </textarea>
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Text(English):</h3>
                <textarea v-model="texten" class="px-[10px] h-[200px] textarea w-[99%]" type="text"> </textarea>
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Text(Russian):</h3>
                <textarea v-model="textru" class="px-[10px] h-[200px] textarea w-[99%]" type="text"> </textarea>
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Text(Uzbek):</h3>
                <textarea v-model="textuz" class="px-[10px] h-[200px] textarea w-[99%]" type="text"> </textarea>
              </div>
            </div>
            <br>
            <button @click="saveAbout(), event = ''" class="btn bg-[blue] border-[blue] text-white">SAVE</button>
          </div>

          <div v-if="event == 'gallery'">
            <div class="h-[700px] overflow-y-scroll pb-[100px]">
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Persian):</h3>
                <input v-model="titleGallerypr" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(English):</h3>
                <input v-model="titleGalleryen" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Russian):</h3>
                <input v-model="titleGalleryru" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div class="border-b-[20px] border-[#21a5cd] pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Title(Uzbek):</h3>
                <input v-model="titleGalleryuz" class="px-[10px] input w-[99%]" type="text">
              </div>
              <div>
                <h3 class="text-white font-[1000] mt-[10px] text-[22px] mb-[10px]">IMAGES (URL):</h3>
                <div v-for="item of countOfGallery" :key="item.id" class=" flex mb-[10px] gap-[10px] mr-[10px]">
                  <input :value="item" class="inputsgallery px-[10px] input w-[99%]" type="text">
                  <button @click="countOfGallery.splice(countOfGallery.indexOf(item), 1)"
                    class="btn bg-[red] text-white border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
                <button @click="countOfGallery.push('')" class="btn bg-[lime] border-none mt-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
            <br>
            <button @click="saveGallery(), event = ''" class="btn bg-[blue] border-[blue] text-white">SAVE</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { query, collection, getDocs, orderBy, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.ts"
import { ref } from "vue"



const event = ref('')

// about 
const textru = ref('')
const textpr = ref('')
const textuz = ref('')
const texten = ref('')
const titleru = ref('')
const titleuz = ref('')
const titlepr = ref('')
const titleen = ref('')


async function AboutGet() {
  let a = ref([])
  const q = query(collection(db, "fidar"))
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    a.value.push(doc.data())
  })

  titleru.value = a.value[0].ru.title
  titlepr.value = a.value[0].pr.title
  titleuz.value = a.value[0].uz.title
  titleen.value = a.value[0].en.title
  textru.value = a.value[0].ru.text
  textpr.value = a.value[0].pr.text
  textuz.value = a.value[0].uz.text
  texten.value = a.value[0].en.text
}
async function saveAbout() {
  await deleteDoc(doc(db, "fidar", "about"))
  await setDoc(doc(db, "fidar", "about"), {
    ru: {
      title: titleru.value,
      text: textru.value
    },
    pr: {
      title: JSON.stringify(titlepr.value),
      text: JSON.stringify(textpr.value)
    },
    uz: {
      title: titleuz.value,
      text: textuz.value
    },
    en: {
      title: titleen.value,
      text: texten.value
    },
  });
  alert('saved')
}
// about 

// gallery 
const countOfGallery = ref([])

const titleGallerypr = ref('')
const titleGalleryen = ref('')
const titleGalleryru = ref('')
const titleGalleryuz = ref('')

async function saveGallery() {
  let gallery = ref([])
  let inputsgallery = document.querySelectorAll('.inputsgallery')
  for(let i of inputsgallery){
    gallery.value.push(i.value)
  }
  
  await deleteDoc(doc(db, "fidar", "gallery"))
  await setDoc(doc(db, "fidar", "gallery"), {
    pr: titleGallerypr.value,
    en: titleGalleryen.value,
    ru: titleGalleryru.value,
    uz: titleGalleryuz.value,
    gallery: gallery.value
  });
  alert('saved')
}

async function galleryGet() {
  let a = ref([])
  const q = query(collection(db, "fidar"))
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    a.value.push(doc.data())
  })

  countOfGallery.value = a.value[1].gallery

  titleGallerypr.value = a.value[1].pr
  titleGalleryen.value = a.value[1].en
  titleGalleryru.value = a.value[1].ru
  titleGalleryuz.value = a.value[1].uz

}
// gallery 


</script>

<style>
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.active {
  background: blue;
  color: white;
  border-color: transparent;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
