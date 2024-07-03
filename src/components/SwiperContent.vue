<template>
    <swiper @slideChange="onSlideChange" :pagination="{
        type: 'fraction',
    }" :modules="modules" class="mySwiper swip">

        <swiper-slide @click="handleClick" id="1">
            <FirstScreen @about="about()" @prod="prod()" @gal="gal()" />
        </swiper-slide>

        <swiper-slide @click="handleClick" id="2">
            <AboutUs />
        </swiper-slide>

        <swiper-slide @click="handleClick" id="3">
            <div class="max-w-[80%] pt-[20px] text-justify text-[14px] w-[100%] h-[100%] flex items-center flex-col">
                <h1 class="text-[27px] font-[600] mb-[10px]">{{ $t("video") }}</h1>
                <video class="sm:h-[800px] sm:w-[initial] w-[100%] mt-[10px]" controls src="/video.mp4"></video>
            </div>
        </swiper-slide>

        <swiper-slide @click="handleClick" id="4">
            <div
                class="max-w-[85%] pt-[20px] text-justify text-[14px] w-[100%] h-[100%] flex items-center justify-start flex-col pl-[30px]">
                <h1 class="text-[27px] font-[600] mb-[10px]">{{ $t("products") }}</h1>

                <div>
                    <div onclick="my_modal_2.showModal()">
                        <div
                            class="border-[1px] mt-[50px] bg-[#01BAF1] my-[20px] rounded-[10px] overflow-hidden sm:h-[290px] sm:my-[10px] sm:w-[60%] sm:mx-auto">
                            <div>
                                <img class="smkamera" src="../assets/Frame1.png" alt="image">
                            </div>
                            <p class="p-[10px] text-white font-[600] text-[18px]">{{ $t("cameras") }}</p>
                        </div>
                    </div>

                    <dialog id="my_modal_2" class="modal p-0 m-0">
                        <div class="modal-box w-[100%] pt-[0px] rounded-[0] h-[100vh] top-0 m-0 mt-0">
                            <div class="flex justify-center">
                                <img class="imagelogo" src="../assets/logoke.png" alt="image">
                            </div>

                            <div class="flex flex-col gap-[7px] pb-[50px]">
                                <label :for="`my_modal_` + index + 1000"
                                    class="min-h-[90px] rounded-[5px] w-[100%] border-b-[4px] border-[1px] border-[#01BAF1] overflow-hidden flex gap-[15px] items-center px-[10px]"
                                    v-for="(item, index) of this.useProductsStore.cameras" :key="item.id">
                                    <img class="goodsitemimg" :src="item.img" alt="image">
                                    <p class="font-[600]">{{ item.title }}</p>

                                    <!--  -->
                                    <input type="checkbox" :id="`my_modal_` + index + 1000"
                                        class="modal-toggle modal modalmode" />
                                    <div class="modal modalmode" role="dialog">
                                        <div class="modal-box pt-[0] max-h-[80vh]">
                                            <div class="flex justify-center">
                                                <img class="imagelogos" src="../assets/logoke.png" alt="image">

                                                <label :for="`my_modal_` + index + 1000"
                                                    class="absolute left-[20px] top-[25px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                                    </svg>
                                                </label>


                                            </div>
                                            <hr class="mb-[10px]">
                                            <div class="max-h-[500px] overflow-y-auto">
                                                <h3 class="font-bold text-lg text-center">{{ item.title }}</h3>

                                                <img class="max-w-[100%]" :src="item.img" alt="image">

                                                <p class="font-[1000]">{{ $t("characters") }}:</p>
                                                <ul>
                                                    <li class="text-left border-b py-[5px]" v-for="i of item[$t('p')]"
                                                        :key="i.id">
                                                        - {{ i }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  -->

                                </label>
                            </div>

                            <div class="modal-action absolute top-[15px] left-[20px]">
                                <form method="dialog">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="outline-none text-[40px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-[gray]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                        </svg>

                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                    <div onclick="my_modal_1.showModal()">
                        <div
                            class="border-[1px] sm:w-[60%] sm:h-[375px] sm:mx-auto bg-[#01BAF1] my-[50px] rounded-[10px] overflow-hidden">
                            <div>
                                <img class="smkamera" src="../assets/Frame2.png" alt="image">
                            </div>
                            <p class="p-[10px] text-white font-[600] text-[18px]">{{ $t("xvrnvr") }}</p>
                        </div>
                    </div>

                    <dialog id="my_modal_1" class="modal">
                        <div class="modal-box w-[100%] pt-[0px] rounded-[0] h-[100vh] top-0 m-0 mt-0">
                            <div class="flex justify-center">
                                <img class="imagelogo" src="../assets/logoke.png" alt="image">
                            </div>

                            <div class="flex flex-col gap-[7px] pb-[50px]">
                                <label :for="`my_modal_` + index + 100"
                                    class="min-h-[90px] rounded-[5px] w-[100%] border-b-[4px] border-[1px] border-[#01BAF1] overflow-hidden flex gap-[15px] items-center px-[10px]"
                                    v-for="(item, index) of this.useProductsStore.switches" :key="item.id">
                                    <img class="goodsitemimg" :src="item.img" alt="image">
                                    <p class="font-[600]">{{ item.title }}</p>

                                    <!--  -->
                                    <input type="checkbox" :id="`my_modal_` + index + 100"
                                        class="modal-toggle modal modalmode" />
                                    <div class="modal modalmode" role="dialog">
                                        <div class="modal-box pt-[0] max-h-[80vh]">
                                            <div class="flex justify-center">
                                                <img class="imagelogos" src="../assets/logoke.png" alt="image">

                                                <label :for="`my_modal_` + index + 100"
                                                    class="absolute left-[20px] top-[25px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                                    </svg>
                                                </label>


                                            </div>
                                            <hr class="mb-[10px]">
                                            <div class="max-h-[500px] overflow-y-auto">
                                                <h3 class="font-bold text-lg text-center">{{ item.title }}</h3>

                                                <img class="max-w-[100%]" :src="item.img" alt="image">

                                                <p class="font-[1000]">{{ $t("characters") }}:</p>
                                                <ul>
                                                    <li class="text-left border-b py-[5px]" v-for="i of item[$t('p')]"
                                                        :key="i.id">
                                                        - {{ i }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  -->

                                </label>
                            </div>

                            <div class="modal-action absolute top-[15px] left-[20px]">
                                <form method="dialog">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="outline-none text-[40px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 text-[gray]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                        </svg>

                                    </button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide @click="handleClick" class="flex flex-col pt-[20px]" id="4">
            <h1 class="text-[27px] font-[600] mb-[10px]">{{ $t("gallery") }}</h1>
            <div class="gallery flex flex-col items-center">
                <img v-for="item of this.gallery" :key="item.id" class="w-[100%] max-h-[200px] sm:max-w-[80%] sm:max-h-[300px] mb-[10px]"
                    :src="item" alt="img">
            </div>
        </swiper-slide>

    </swiper>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useCounterStore } from "../stores/counter"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { ref } from 'vue';
import FirstScreen from './FirstScreen.vue';
import AboutUs from './AboutUs.vue';
import { useProductsStore } from "../stores/products"
import { query, collection, getDocs, orderBy, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts"
import {useLangStore} from '../stores/lang'

export default {
    components: {
        Swiper,
        SwiperSlide,
        FirstScreen,
        AboutUs
    },
    mounted(){
        this.get()
    },
    methods: {
        async get() {
            let a = ref([])
            const q = query(collection(db, "fidar"))
            const querySnap = await getDocs(q);
            querySnap.forEach((doc) => {
                a.value.push(doc.data())
            })
            this.gallery = a.value[1].gallery
        },
        onSlideChange() {
            this.useCounterStore.realindex = document.querySelector(".swip").swiper.realIndex + 1
        },
        handleClick(event) {
            // Get the click position
            const x = event.clientX;
            const y = event.clientY;

            // const clickY = rect.top + (rect.height / 2);

            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: x,
                clientY: y,
            });

            document.querySelector("#network").dispatchEvent(clickEvent);
            // console.log(document.querySelector("#network").click());
        },
        about() {
            console.log(document.querySelector(".swip").swiper.slideTo(1));
        },
        prod() {
            console.log(document.querySelector(".swip").swiper.slideTo(3));
        },
        gal() {
            console.log(document.querySelector(".swip").swiper.slideTo(4));
        },
    },
    data() {
        return {
            useCounterStore: useCounterStore(),
            useProductsStore: useProductsStore(),
            gallery: [],
            useLangStore: useLangStore(),
        }
    },
    setup() {

        return {
            modules: [Pagination],
        };
    },
};
</script>

<style>
.modalmode {
    top: 0 !important;
    position: fixed !important;

}

.goodsitemimg {
    height: 80px !important;
    width: initial !important;
}

.gallery {
    max-width: 90%;
    margin: auto;
    height: calc(100vh - 100px);
    overflow-y: auto;
}

.swiper {
    width: 100%;
    height: 100%;
}

.imagelogo {
    height: 90px !important;
    width: initial !important;
}

.imagelogos {
    height: 70px !important;
    width: initial !important;
}

.swiper-slide {
    /* background: red; */
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination {
    background: red !important;
    display: none !important;
}

@media screen and (min-width: 600px) {
    .gallery {
        max-width: 65% !important;
        width: 100% !important;
        margin: auto;
        height: calc(100vh - 100px);
        overflow-y: auto;
    }
}
</style>