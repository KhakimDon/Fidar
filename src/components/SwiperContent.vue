<template>
    <swiper @slideChange="onSlideChange" :pagination="{
        type: 'fraction',
    }" :modules="modules" class="mySwiper swip">

        <swiper-slide @click="handleClick" id="1">
            <FirstScreen />
        </swiper-slide>

        <swiper-slide @click="handleClick" id="2">
            <AboutUs />
        </swiper-slide>

        <swiper-slide @click="handleClick" id="3">
            <div class="max-w-[80%] pt-[20px] text-justify text-[14px] w-[100%] h-[100%] flex items-center flex-col">
                <h1 class="text-[27px] font-[600] mb-[10px]">О нас</h1>
                <video class="w-[100%]" controls src="/video.mp4"></video>
            </div>
        </swiper-slide>

        <swiper-slide @click="handleClick" id="4">
            <div
                class="max-w-[85%] pt-[20px] text-justify text-[14px] w-[100%] h-[100%] flex items-center justify-start flex-col pl-[30px]">
                <h1 class="text-[27px] font-[600] mb-[10px]">Продукты</h1>

                <div>
                    <div onclick="my_modal_2.showModal()">
                        <div class="border-[1px] mt-[50px] bg-[#01BAF1] my-[20px] rounded-[10px] overflow-hidden">
                            <div>
                                <img src="../assets/Frame1.png" alt="image">
                            </div>
                            <p class="p-[10px] text-white font-[600] text-[18px]">Камеры</p>
                        </div>
                    </div>

                    <dialog id="my_modal_2" class="modal p-0 m-0">
                        <div class="modal-box w-[100%] pt-[0px] rounded-[0] h-[100vh] top-0 m-0 mt-0">
                            <div class="flex justify-center">
                                <img class="imagelogo" src="../assets/logoke.png" alt="image">
                            </div>
                            <p class="py-4">Pree button below to close</p>
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
                        <div class="border-[1px] bg-[#01BAF1] my-[50px] rounded-[10px] overflow-hidden">
                            <div>
                                <img src="../assets/Frame2.png" alt="image">
                            </div>
                            <p class="p-[10px] text-white font-[600] text-[18px]">XVR и NVR</p>
                        </div>
                    </div>

                    <dialog id="my_modal_1" class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Hello!</h3>
                            <p class="py-4">Press ESC key or click the button below to close</p>
                            <div class="modal-action">
                                <form method="dialog">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                </div>



            </div>
        </swiper-slide>

        <swiper-slide @click="handleClick" class="flex flex-col pt-[20px]" id="4">
            <h1 class="text-[27px] font-[600] mb-[10px]">Галерея</h1>
            <div class="gallery">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
                <img class="w-[100%] max-h-[200px] mb-[10px]"
                    src="https://fidarnetwork.shop/wp-content/uploads/2023/07/999-1024x576.jpg" alt="img">
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

export default {
    components: {
        Swiper,
        SwiperSlide,
        FirstScreen,
        AboutUs
    },
    methods: {
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
    },
    data() {
        return {
            useCounterStore: useCounterStore(),
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
</style>