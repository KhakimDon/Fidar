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
            us 
            </button>
          <button @click="event = 'gallery', galleryGet()" :class="{ active: event == 'gallery' }"
            class="btn w-[100%]">Gallery </button>
          <button @click="event = 'cameras', getcameras()" :class="{ active: event == 'cameras' }"
            class="btn w-[100%]">Cameras </button>
          <button @click="event = 'switches', getswitches()" :class="{ active: event == 'switches' }"
            class="btn w-[100%]">switches</button>
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
            <button @click="saveAbout()" class="btn bg-[blue] border-[blue] text-white">SAVE <span v-if="loader"
                class="loading loading-spinner loading-xs"></span></button>
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
            <button @click="saveGallery(), event = ''" class="btn bg-[blue] border-[blue] text-white">SAVE <span
                v-if="loader" class="loading loading-spinner loading-xs"></span></button>
          </div>

          <div v-if="event == 'cameras'">
            <div class="h-[700px] overflow-y-scroll pb-[100px]">
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Cameras</h3>


                <div class="overflow-x-auto">
                  <button onclick="my_modal_6969.showModal()" class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>

                  <dialog id="my_modal_6969" class="modal">
                    <div class="modal-box h-[100vh] overflow-y-auto">
                      <h3 class="text-[20px] font-bold">Add Camera</h3>
                      <input v-model="newcameratitle_pr" placeholder="Persian title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_en" placeholder="English title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_ru" placeholder="Russian title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_uz" placeholder="Uzbek title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <hr class="h-[2px] bg-[gray] mt-[30px]">
                      <input v-model="addImage" placeholder="Image URL" class="input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      <figure class="h-[100px] w-[100px] bg-[gray] mb-[10px]">
                        <img class="h-[100%] w-[100%] object-cover" :src="addImage" alt="image">
                      </figure>
                      <hr class="h-[2px] bg-[gray]">
                      <div class="flex justify-between items-center">
                        <p class="mt-[10px] text-[20px] font-[600]">characteristics:</p>
                      <button @click="newCameraCharacters.push('')" class="btn mt-[10px] bg-[lime]">Add Character</button>
                      </div>

                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Persian</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titlepr input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>English</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleen input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Russian</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleru input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Uzbek</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleuz input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button in form, it will close the modal -->
                          <button class="btn mr-[5px]">Close</button>
                          <button @click="AddCamera()" class="btn btn-primary">Save</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  <table class="table">
                    <!-- head -->
                    <thead>
                      <tr>

                        <th>Name</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- row 1 -->
                      <tr v-for="item of cameras" :key="item.id">
                        <td @click="eventProd = item" onclick="my_modal_11.showModal()" >
                          <div class="flex items-center gap-3">
                            <div class="avatar">
                              <div class="mask mask-squircle h-12 w-12">
                                <img :src="item.img" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">{{ item.en }}</div>
                            </div>
                          </div>
                        </td>
                        <td><div @click="cameras.splice(cameras.indexOf(item),1)" class="btn bg-[red] pointer-events-auto text-white border-none">Del</div></td>
                      </tr>
                      <dialog id="my_modal_11" class="modal">
                          <div class="modal-box h-[100vh] overflow-y-auto">
                            <div class="modal-action">
                              <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                              </form>
                            </div>
                            <h3 class="text-lg font-bold border-b"><span>Title in Persian:</span> <br> {{eventProd.pr}}</h3>
                            <h3 class="text-lg font-bold border-b"><span>Title in English:</span> <br> {{eventProd.en}}</h3>
                            <h3 class="text-lg font-bold border-b"><span>Title in Russian:</span> <br> {{eventProd.ru}}</h3>
                            <h3 class="text-lg font-bold border-b">Title in Uzbek: <br> {{eventProd.uz}}</h3>
                            <img :src="eventProd.img" alt="image">
                            <p class="text-[20px] font-[1000] mb-[5px]">characters Persian:</p>
                            <p v-for="item of eventProd.optionspr" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters English:</p>
                            <p v-for="item of eventProd.optionsen" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters Russian:</p>
                            <p v-for="item of eventProd.optionsru" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters Uzbek:</p>
                            <p v-for="item of eventProd.optionsuz" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>
                          </div>
                        </dialog>

                    </tbody>
                  </table>
                </div>


              </div>
            </div>
            <br>
            <button @click="savecameras(), event = ''" class="btn bg-[blue] border-[blue] text-white">SAVE <span
                v-if="loader" class="loading loading-spinner loading-xs"></span></button>
          </div>

          <div v-if="event == 'switches'">
            <div class="h-[700px] overflow-y-scroll pb-[100px]">
              <div class="border-b pb-[20px] pt-[10px]">
                <h3 class="text-white font-[1000] text-[22px] mb-[10px]">Switches</h3>


                <div class="overflow-x-auto">
                  <button onclick="my_modal_707070.showModal()" class="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>

                  <dialog id="my_modal_707070" class="modal">
                    <div class="modal-box h-[100vh] overflow-y-auto">
                      <h3 class="text-[20px] font-bold">Add Switch</h3>
                      <input v-model="newcameratitle_pr" placeholder="Persian title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_en" placeholder="English title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_ru" placeholder="Russian title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <input v-model="newcameratitle_uz" placeholder="Uzbek title" class="input bg-[#ededed] w-[100%] mt-[20px]" type="text">
                      <hr class="h-[2px] bg-[gray] mt-[30px]">
                      <input v-model="addImage" placeholder="Image URL" class="input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      <figure class="h-[100px] w-[100px] bg-[gray] mb-[10px]">
                        <img class="h-[100%] w-[100%] object-cover" :src="addImage" alt="image">
                      </figure>
                      <hr class="h-[2px] bg-[gray]">
                      <div class="flex justify-between items-center">
                        <p class="mt-[10px] text-[20px] font-[600]">characteristics:</p>
                      <button @click="newCameraCharacters.push('')" class="btn mt-[10px] bg-[lime]">Add Character</button>
                      </div>

                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Persian</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titlepr input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>English</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleen input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Russian</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleru input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <fieldset class="border p-[10px] mt-[20px]">
                        <legend>Uzbek</legend>
                        <input required v-for="item of newCameraCharacters" :key="item.id" placeholder="characteristics" class="titleuz input bg-[#ededed] w-[100%] my-[10px]" type="text">
                      </fieldset>
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button in form, it will close the modal -->
                          <button class="btn mr-[5px]">Close</button>
                          <button @click="AddSwitches()" class="btn btn-primary">Save</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  <table class="table">
                    <!-- head -->
                    <thead>
                      <tr>

                        <th>Name</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- row 1 -->
                      <tr v-for="item of switches" :key="item.id">
                        <td @click="eventProd = item" onclick="my_modal_11.showModal()" >
                          <div class="flex items-center gap-3">
                            <div class="avatar">
                              <div class="mask mask-squircle h-12 w-12">
                                <img :src="item.img" alt="img" />
                              </div>
                            </div>
                            <div>
                              <div class="font-bold">{{ item.en }}</div>
                            </div>
                          </div>
                        </td>
                        <td><div @click="switches.splice(switches.indexOf(item),1)" class="btn bg-[red] pointer-events-auto text-white border-none">Del</div></td>
                      </tr>
                      <dialog id="my_modal_11" class="modal">
                          <div class="modal-box h-[100vh] overflow-y-auto">
                            <div class="modal-action">
                              <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                              </form>
                            </div>
                            <h3 class="text-lg font-bold border-b"><span>Title in Persian:</span> <br> {{eventProd.pr}}</h3>
                            <h3 class="text-lg font-bold border-b"><span>Title in English:</span> <br> {{eventProd.en}}</h3>
                            <h3 class="text-lg font-bold border-b"><span>Title in Russian:</span> <br> {{eventProd.ru}}</h3>
                            <h3 class="text-lg font-bold border-b">Title in Uzbek: <br> {{eventProd.uz}}</h3>
                            <img :src="eventProd.img" alt="image">
                            <p class="text-[20px] font-[1000] mb-[5px]">characters Persian:</p>
                            <p v-for="item of eventProd.optionspr" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters English:</p>
                            <p v-for="item of eventProd.optionsen" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters Russian:</p>
                            <p v-for="item of eventProd.optionsru" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>

                            <p class="text-[20px] font-[1000] mb-[5px]">characters Uzbek:</p>
                            <p v-for="item of eventProd.optionsuz" :key="item.id">{{ item }}</p>
                            <div class="h-[10px] bg-[gray] my-[10px]"></div>
                          </div>
                        </dialog>

                    </tbody>
                  </table>
                </div>


              </div>
            </div>
            <br>
            <button @click="savecameras(), event = ''" class="btn bg-[blue] border-[blue] text-white">SAVE <span
                v-if="loader" class="loading loading-spinner loading-xs"></span></button>
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
import router from "@/router";

let login = prompt('Login')
let password = prompt('Password')

if(login == '@fidarnetwork@' && password == '@fidar@admin'){
  alert("Welcome")
}else{
  router.push('/')
}


const eventProd = ref({})
const loader = ref(false)
const event = ref('')
const newCameraCharacters = ref([''])

// about // about // about // about // about // about // about 
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
  loader.value = true
  await deleteDoc(doc(db, "fidar", "about"))
  await setDoc(doc(db, "fidar", "about"), {
    ru: {
      title: titleru.value,
      text: textru.value
    },
    pr: {
      title: titlepr.value,
      text: textpr.value
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
  loader.value = false
  event.value = ''
}
// about // about // about // about // about // about // about 

// gallery // gallery // gallery // gallery // gallery // gallery 


const newcameratitle_pr = ref('')
const newcameratitle_en = ref('')
const newcameratitle_ru = ref('')
const newcameratitle_uz = ref('')
const countOfGallery = ref([])
const addImage = ref('')


const cameras = ref([])
const switches = ref([])

const titleGallerypr = ref('')
const titleGalleryen = ref('')
const titleGalleryru = ref('')
const titleGalleryuz = ref('')

async function saveGallery() {
  loader.value = true
  let gallery = ref([])
  let inputsgallery = document.querySelectorAll('.inputsgallery')
  for (let i of inputsgallery) {
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
  loader.value = false
  event.value = ''
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
// gallery // gallery // gallery // gallery // gallery // gallery 


// cameras // cameras // cameras // cameras // cameras // cameras

function AddSwitches(){
  let title_pr = document.querySelectorAll('.titlepr')
  let title_en = document.querySelectorAll('.titleen')
  let title_ru = document.querySelectorAll('.titleru')
  let title_uz = document.querySelectorAll('.titleuz')
  
  let optionspr = []
  let optionsen = []
  let optionsru = []
  let optionsuz = []
  
  for(let i of title_pr) optionspr.push(i.value)
  for(let i of title_en) optionsen.push(i.value)
  for(let i of title_ru) optionsru.push(i.value)
  for(let i of title_uz) optionsuz.push(i.value)

  let obj = {
    pr: newcameratitle_pr.value,
    en: newcameratitle_en.value,
    ru: newcameratitle_ru.value,
    uz: newcameratitle_uz.value,
    img: addImage,
    optionspr: optionspr,
    optionsen: optionsen,
    optionsru: optionsru,
    optionsuz: optionsuz,
  }

  switches.value.push(obj)
  newcameratitle_pr.value = ''
  newcameratitle_en.value = ''
  newcameratitle_ru.value = ''
  newcameratitle_uz.value = ''
  newCameraCharacters.value = ['']
  
}
function AddCamera(){
  let title_pr = document.querySelectorAll('.titlepr')
  let title_en = document.querySelectorAll('.titleen')
  let title_ru = document.querySelectorAll('.titleru')
  let title_uz = document.querySelectorAll('.titleuz')
  
  let optionspr = []
  let optionsen = []
  let optionsru = []
  let optionsuz = []
  
  for(let i of title_pr) optionspr.push(i.value)
  for(let i of title_en) optionsen.push(i.value)
  for(let i of title_ru) optionsru.push(i.value)
  for(let i of title_uz) optionsuz.push(i.value)

  let obj = {
    pr: newcameratitle_pr.value,
    en: newcameratitle_en.value,
    ru: newcameratitle_ru.value,
    uz: newcameratitle_uz.value,
    img: addImage,
    optionspr: optionspr,
    optionsen: optionsen,
    optionsru: optionsru,
    optionsuz: optionsuz,
  }

  cameras.value.push(obj)
  newcameratitle_pr.value = ''
  newcameratitle_en.value = ''
  newcameratitle_ru.value = ''
  newcameratitle_uz.value = ''
  newCameraCharacters.value = ['']
  
}

async function getcameras() {
  let a = ref([])
  const q = query(collection(db, "fidar"))
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    a.value.push(doc.data())
  })
  cameras.value = a.value[2].prods
}

async function getswitches() {
  let a = ref([])
  const q = query(collection(db, "fidar"))
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    a.value.push(doc.data())
  })
  switches.value = a.value[3].prods
}


async function savecameras() {
  loader.value = true
  console.log(cameras.value)
  await deleteDoc(doc(db, "fidar", "product_cameras"))
  await setDoc(doc(db, "fidar", "product_cameras"), {
    prods: cameras.value
  });

  loader.value = false
  event.value = ''
}

// cameras // cameras // cameras // cameras // cameras // cameras


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
