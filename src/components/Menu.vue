<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "../stores/counter"

import { useProductsStore } from '../stores/products'


const pageActive = ref(false)
const page = ref(1)
const counterStore = useCounterStore()
const newPage = ref()

const use = useProductsStore()
const value = ref('')

const watch = ref([])


function input(){
    watch.value = []
    const all = use.cameras.concat(use.switches)
    for(let i of all){
        if(i.title[value.value.length - 1] == value.value){
            watch.value.push(i)
        }
        
    }
    
}

function changePage() {
    if (newPage.value > 0 && newPage.value < 6) {
        counterStore.realindex = newPage.value
        console.log(document.querySelector(".swip").swiper.slideTo(newPage.value - 1));

    }
    else {
        newPage.value = null
    }
    pageActive.value = !pageActive.value
}

function pageActiveFunc() {
    pageActive.value = !pageActive.value
}
</script>

<template>
    <div
        class="h-[60px] z-[999] w-[100%] flex justify-around items-center max-w-[950px] left-[50%] translate-x-[-50%] bg-[#01BAF1] shadow-menu fixed bottom-0">
        <div onclick="my_modal_1754.showModal()" class="h-[40px] w-[40px] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                stroke="currentColor" class="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        <dialog id="my_modal_1754" class="modal">
            <div class="modal-box h-[90vh]">
                <h3 class="font-bold text-lg">{{ $t("poisk") }}</h3>
                <input @input="input" v-model="value" type="text" placeholder="4mp5mp FIB-S10..." class="border outline-none px-[10px] h-[40px] rounded-[10px] w-[100%] mt-[20px]">
                <div class="h-[60vh] mt-[20px] border-b-[2px] overflow-y-scroll">
                    <div class="h-[85px] w-[98%] gap-[10px] rounded-[12px] overflow-hidden flex items-center px-[10px] border mb-[10px]" v-for="i of watch" :key="i.id">
                        <img class="w-[initial] h-[70px]" :src="i.img" alt="image">
                        <span class="text-[13px]">{{ i.title }}</span>
                    </div>
                </div>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">{{ $t("close") }}</button>
                    </form>
                </div>
            </div>
        </dialog>

        <div
            class="cursor-pointer overflow-hidden h-[35px] w-[60px] flex items-center rounded-[7px] bg-white justify-center">

            <span @click="pageActiveFunc()" v-if="!pageActive" class="text-[#01BAF1]">{{ counterStore.realindex
                }}/5</span>

            <form v-else @submit.prevent="changePage()" action="#">
                <input v-model="newPage" autofocus class="w-[100%] outline-none text-center h-[100%]" type="number">
            </form>
        </div>

        <div onclick="my_modal_99.showModal()" class="h-[40px] w-[40px] flex justify-center items-center">
            <svg class="h-[45px] w-[45px]" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.5 11.5C14.5 12.6046 13.6046 13.5 12.5 13.5C11.3954 13.5 10.5 12.6046 10.5 11.5C10.5 10.3954 11.3954 9.5 12.5 9.5C13.6046 9.5 14.5 10.3954 14.5 11.5Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M14.5 5.25C14.0858 5.25 13.75 5.58579 13.75 6C13.75 6.41421 14.0858 6.75 14.5 6.75V5.25ZM10.5 6.75C10.9142 6.75 11.25 6.41421 11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25V6.75ZM15.25 6C15.25 5.58579 14.9142 5.25 14.5 5.25C14.0858 5.25 13.75 5.58579 13.75 6H15.25ZM13.75 7C13.75 7.41421 14.0858 7.75 14.5 7.75C14.9142 7.75 15.25 7.41421 15.25 7H13.75ZM13.75 6C13.75 6.41421 14.0858 6.75 14.5 6.75C14.9142 6.75 15.25 6.41421 15.25 6H13.75ZM15.25 4C15.25 3.58579 14.9142 3.25 14.5 3.25C14.0858 3.25 13.75 3.58579 13.75 4H15.25ZM14.5 6.75C14.9142 6.75 15.25 6.41421 15.25 6C15.25 5.58579 14.9142 5.25 14.5 5.25V6.75ZM10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6C9.75 6.41421 10.0858 6.75 10.5 6.75V5.25ZM11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6H11.25ZM9.75 7C9.75 7.41421 10.0858 7.75 10.5 7.75C10.9142 7.75 11.25 7.41421 11.25 7H9.75ZM9.75 6C9.75 6.41421 10.0858 6.75 10.5 6.75C10.9142 6.75 11.25 6.41421 11.25 6H9.75ZM11.25 4C11.25 3.58579 10.9142 3.25 10.5 3.25C10.0858 3.25 9.75 3.58579 9.75 4H11.25ZM6.05108 17.8992C5.71926 18.1471 5.65126 18.6171 5.89919 18.9489C6.14713 19.2807 6.61711 19.3487 6.94892 19.1008L6.05108 17.8992ZM18.0511 19.1008C18.3829 19.3487 18.8529 19.2807 19.1008 18.9489C19.3487 18.6171 19.2807 18.1471 18.9489 17.8992L18.0511 19.1008ZM14.5 6.75H15.5V5.25H14.5V6.75ZM15.5 6.75C17.2949 6.75 18.75 8.20507 18.75 10H20.25C20.25 7.37665 18.1234 5.25 15.5 5.25V6.75ZM18.75 10V16H20.25V10H18.75ZM18.75 16C18.75 17.7949 17.2949 19.25 15.5 19.25V20.75C18.1234 20.75 20.25 18.6234 20.25 16H18.75ZM15.5 19.25H9.5V20.75H15.5V19.25ZM9.5 19.25C7.70507 19.25 6.25 17.7949 6.25 16H4.75C4.75 18.6234 6.87665 20.75 9.5 20.75V19.25ZM6.25 16V10H4.75V16H6.25ZM6.25 10C6.25 8.20507 7.70507 6.75 9.5 6.75V5.25C6.87665 5.25 4.75 7.37665 4.75 10H6.25ZM9.5 6.75H10.5V5.25H9.5V6.75ZM13.75 6V7H15.25V6H13.75ZM15.25 6V4H13.75V6H15.25ZM14.5 5.25H10.5V6.75H14.5V5.25ZM9.75 6V7H11.25V6H9.75ZM11.25 6V4H9.75V6H11.25ZM6.94892 19.1008C10.2409 16.641 14.7591 16.641 18.0511 19.1008L18.9489 17.8992C15.1245 15.0416 9.87551 15.0416 6.05108 17.8992L6.94892 19.1008Z"
                    fill="white" />
            </svg>
        </div>

        <dialog id="my_modal_99" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">{{ $t("contact") }}</h3>
                <p class="border-b my-[10px] outline-none pb-[5px] block">{{ $t("address") }}</p>
                <a class="border-b my-[10px] outline-none pb-[5px] block" href="tel:+998773008060">{{ $t("tel") }}</a>
                <a class="border-b my-[10px] outline-none pb-[5px] block" href="tel:+998773008060">{{ $t("wha") }}</a>
                <a class="my-[10px] outline-none pb-[5px] block" href="https://t.me/visto_manager">{{ $t("teleg") }}</a>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">{{ $t("close") }}</button>
                    </form>
                </div>
            </div>
        </dialog>

    </div>
</template>



<style>
.shadow-menu {
    box-shadow: 0 0 5px #008bb6;
}
</style>