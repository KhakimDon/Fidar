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
                                <!-- <button class="btn" @click="SET()">asd</button> -->
                                <label :for="`my_modal_` + index + 1000"
                                    class="min-h-[90px] rounded-[5px] w-[100%] border-b-[4px] border-[1px] border-[#01BAF1] overflow-hidden flex gap-[15px] items-center px-[10px]"
                                    v-for="(item, index) of this.useProductsStore.cameras" :key="item.id">
                                    <img class="goodsitemimg" :src="item.img" alt="image">
                                    <p class="font-[600]">{{ item[$i18n.locale] }}</p>

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
                                                <h3 class="font-bold text-lg text-center">{{ item[$i18n.locale] }}</h3>

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
                                    <p class="font-[600]">{{ item[$i18n.locale] }}</p>

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
                                                <h3 class="font-bold text-lg text-center">{{ item[$i18n.locale] }}</h3>

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
                <img v-for="item of this.gallery" :key="item.id"
                    class="w-[100%] max-h-[200px] sm:max-w-[80%] sm:max-h-[300px] mb-[10px]" :src="item" alt="img">
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
import { useLangStore } from '../stores/lang'

export default {
    components: {
        Swiper,
        SwiperSlide,
        FirstScreen,
        AboutUs
    },
    mounted() {
        this.get()
    },
    methods: {
        // async SET() {
        //     console.log(this.useProductsStore.cameras[0]);
        //     await setDoc(doc(db, "fidar", "product_cameras"), {
        //         prods: [
        //             {
        //                 id: 7,
        //                 img: "./3.jpg",
        //                 ru: "5mp FIB-S1084k5 5mp",
        //                 en: "5mp FIB-S1084k5 5mp",
        //                 uz: "5mp FIB-S1084k5 5mp",
        //                 pr: "5mp FIB-S1084k5 5mp",
        //                 optionspr: [
        //                     "دوربین گنبدی فلزی",
        //                     "تصویربرداری با کیفیت بالا با وضوح 5 مگاپیکسل",
        //                     "تصویربرداری رنگارنگ 24 ساعته",
        //                     "5 مگاپیکسل Super Starlight Progressive Scan CMOS",
        //                     "پشتیبانی از 120 دسی بل پویا عرض نوری (WDR) دو میکروفون",
        //                     "رزولوشن 5 مگاپیکسلی HD، 2880*1620@25، 2560*1440@25، 2304*1296@25، 1920*1080@25، 1920*1080@30",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد هوشمند دو نوری،",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif با NVR شخص ثالث، پشتیبانی از Uniview و پروتکل خصوصی HIK Vision",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1ch، پشتیبانی از صدای دو طرفه؛ اگر به این گزینه نیاز دارید، باید آن را سفارش دهید",
        //                     "نور ستاره: روز/شب (ICR) AWB، AGC، BLC، HLC2DNR/3DNR",
        //                     "چراغ هیبریدی هوشمند: فناوری پیشرفته با برد طولانی",
        //                     "LENZ: لنز کانونی ثابت 4mm",
        //                     "مقاوم در برابر آب و گرد و غبار (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsen: [
        //                     "METAL DOME CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "5MP Super Starlight   Progressive Scan CMOS",
        //                     "Support 120dB Optical width dynamic (WDR) two mic",
        //                     "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        //                     "Starlight :Day/Night (ICR) AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsuz: [
        //                     "METAL gumbazli kamera",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "5MP Super Starlight Progressive Scan CMOS",
        //                     "120dB Optik kenglik dinamikasi (WDR) ikkita mikrofonni qo'llab-quvvatlash",
        //                     "5MP HD ruxsati, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlang, ikki tomonlama audioni qo'llab-quvvatlang; Agar sizga ushbu parametr kerak bo'lsa, uni buyurtma qilishingiz kerak",
        //                     "Yulduzli yorug'lik: Kunduz/Kecha (ICR) AWB, AGC, BLC, HLC2DNR/3DNR",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛОКУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "5 МП Super Starlight CMOS с прогрессивной разверткой",
        //                     "Поддержка двух микрофонов с оптической шириной 120 дБ (WDR)",
        //                     "Разрешение HD 5 МП, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка 1-канального аудиовхода/вывода, поддержка двусторонней аудиосвязи; если вам нужна эта опция, вы должны заказать ее",
        //                     "Звездный свет: день/ночь (ICR) AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //             },

        //             {
        //                 id: 8,
        //                 img: "./3.jpg",
        //                 ru: "4mp FIB-S1084k334 4mp",
        //                 en: "4mp FIB-S1084k334 4mp",
        //                 uz: "4mp FIB-S1084k334 4mp",
        //                 pr: "4mp FIB-S1084k334 4mp",
        //                 optionspr: [
        //                     "اتاق گنبد فلزی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه؛ پشتیبانی از صدای دو جریانی. اگر به این گزینه نیاز دارید، باید آن را سفارش دهید",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],

        //                 optionsen: [
        //                     "METAL DOME CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol",
        //                     "Support audio input/output 1ch, support two-way audio;support dual-stream Если вам нужна эта опция, вы должны заказать ее",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛОКУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif",
        //                     "Поддержка 1-канального аудиовхода/вывода, поддержка двустороннего звука; поддержка двухпотокового звука. Если вам нужна эта опция, вы должны ее заказать",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL gumbazli kamera",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama audioni qo'llab-quvvatlash; ikki tomonlama oqimni qo'llab-quvvatlash, agar kerak bo'lsa, bu variant, albatta, buyurtma berish",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 9,
        //                 img: "./3.jpg",
        //                 ru: "4mp FIB-S1084k414 4mp",
        //                 en: "4mp FIB-S1084k414 4mp",
        //                 uz: "4mp FIB-S1084k414 4mp",
        //                 pr: "4mp FIB-S1084k414 4mp",
        //                 optionspr: [
        //                     "اتاق گنبد فلزی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "فلش 8 مگابایتی، DDR264 مگابایت؛ تک هسته A7 1.2 گیگاهرتز",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265 * پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی ورودی/خروجی صوتی کانال 1، پشتیبانی صوتی دو طرفه;",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsen: [
        //                     "METAL DOME CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛОКУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Флэш-память 8 МБ, DDR264 МБ; одноядерный A7 1,2 ГГц",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265 * Поддержка протокола международного стандарта Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка аудиовхода/выхода 1 канал, поддержка двустороннего звука;",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL gumbazli kamera",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Flash 8MB, DDR264MB; bir yadroli A7 1.2GHz",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi* Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlaydi",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash;",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 10,
        //                 img: "./4.jpg",
        //                 ru: "5mp FID-S1087k5 5mp",
        //                 en: "5mp FID-S1087k5 5mp",
        //                 uz: "5mp FID-S1087k5 5mp",
        //                 pr: "5mp FID-S1087k5 5mp",
        //                 optionsen: [
        //                     "METAL BULLET CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "5MP Super Starlight   Progressive Scan CMOS",
        //                     "Support 120dB Optical width dynamic (WDR)   ",
        //                     "two mic",
        //                     "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;",
        //                     "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گلوله فلزی",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "اسکن پیشرونده CMOS Super Starlight 5 مگاپیکسلی",
        //                     "پشتیبانی از عرض نوری پویا 120 دسی بل (WDR)",
        //                     "دو میکروفون",
        //                     "وضوح HD 5 MP، 2880*1620@25، 2560*1440@25، 2304*1296@25، 1920*1080@25، 1920*1080@30",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی ورودی/خروجی صوتی کانال 1، پشتیبانی صوتی دو طرفه;",
        //                     "نور ستاره: روز/شب (ICR)AWB، AGC، BLC، HLC2DNR/3DNR",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛ ПУЛЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "5 МП Super Starlight CMOS с прогрессивной разверткой",
        //                     "Поддержка динамической оптической ширины 120 дБ (WDR)",
        //                     "два микрофона",
        //                     "Разрешение HD 5 МП, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка аудиовхода/выхода 1 канал, поддержка двустороннего звука;",
        //                     "Звездный свет: день/ночь (ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL BULLET KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "5MP Super Starlight Progressive Scan CMOS",
        //                     "120dB Optik kenglik dinamikini (WDR) qo'llab-quvvatlash",
        //                     "ikki mikrofon",
        //                     "5MP HD ruxsati, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash;",
        //                     "Yulduzli yorug'lik: kunduz / tun (ICR) AWB, AGC, BLC, HLC2DNR / 3DNR",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 11,
        //                 img: "./4.jpg",
        //                 ru: "4mp FID-S1087k334 4mp",
        //                 en: "4mp FID-S1087k334 4mp",
        //                 uz: "4mp FID-S1087k334 4mp",
        //                 pr: "4mp FID-S1087k334 4mp",
        //                 optionsen: [
        //                     "METAL BULLET CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol",
        //                     "Support audio input/output 1ch, support two-way audio;support dual-stream",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گلوله فلزی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه، پشتیبانی از صدای دو جریانی",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛ ПУЛЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif",
        //                     "Поддержка 1-канального аудиовхода/выхода, поддержка двустороннего звука, поддержка двухпотокового звука",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL BULLET KAMERA",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash; ikki tomonlama oqimni qo'llab-quvvatlash",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 12,
        //                 img: "./4.jpg",
        //                 ru: "4mp FID-S1087k414 4mp",
        //                 en: "4mp FID-S1087k414 4mp",
        //                 uz: "4mp FID-S1087k414 4mp",
        //                 pr: "4mp FID-S1087k414 4mp",
        //                 optionsen: [
        //                     "METAL BULLET CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گلوله فلزی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "فلش 8 مگابایتی، DDR264 مگابایت؛ تک هسته A7 1.2 گیگاهرتز",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265 * پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی ورودی/خروجی صوتی کانال 1، پشتیبانی صوتی دو طرفه;",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛ ПУЛЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Флэш-память 8 МБ, DDR264 МБ; одноядерный A7 1,2 ГГц",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265 * Поддержка протокола международного стандарта Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка аудиовхода/выхода 1 канал, поддержка двустороннего звука;",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL BULLET KAMERA",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Flash 8MB, DDR264MB; bir yadroli A7 1.2GHz",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi* Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlaydi",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash;",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 13,
        //                 img: "./5.jpg",
        //                 ru: "5mp FIB-S1085k5 5mp",
        //                 en: "5mp FIB-S1085k5 5mp",
        //                 uz: "5mp FIB-S1085k5 5mp",
        //                 pr: "5mp FIB-S1085k5 5mp",
        //                 optionsen: [
        //                     "PELASTIC DOME CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "5MP Super Starlight   Progressive Scan CMOS",
        //                     "Support 120dB Optical width dynamic (WDR)   ",
        //                     "two mic",
        //                     "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        //                     "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گنبد پلاستیکی",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "اسکن پیشرونده CMOS Super Starlight 5 مگاپیکسلی",
        //                     "پشتیبانی از عرض نوری پویا 120 دسی بل (WDR)",
        //                     "دو میکروفون",
        //                     "وضوح HD 5 MP، 2880*1620@25، 2560*1440@25، 2304*1296@25، 1920*1080@25، 1920*1080@30",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه؛ اگر این گزینه را می خواهید، باید آن را سفارش دهید",
        //                     "نور ستاره: روز/شب (ICR)AWB، AGC، BLC، HLC2DNR/3DNR",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "ПЛАСТИКОВАЯ КУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "5 МП Super Starlight CMOS с прогрессивной разверткой",
        //                     "Поддержка динамической оптической ширины 120 дБ (WDR)",
        //                     "два микрофона",
        //                     "Разрешение HD 5 МП, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка 1-канального аудиовхода/вывода, поддержка двусторонней аудиосвязи; если вам нужна эта опция, вы должны заказать ее",
        //                     "Звездный свет: день/ночь (ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "PELASTIC GUMBAL KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "5MP Super Starlight Progressive Scan CMOS",
        //                     "120dB Optik kenglik dinamikini (WDR) qo'llab-quvvatlash",
        //                     "ikki mikrofon",
        //                     "5MP HD ruxsati, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlash",
        //                     "1ch audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama audioni qo'llab-quvvatlash",
        //                     "Yulduzli yorug'lik: kunduz / tun (ICR) AWB, AGC, BLC, HLC2DNR / 3DNR",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 13,
        //                 img: "./5.jpg",
        //                 ru: "4mp FIB-S1085k334 4mp",
        //                 en: "4mp FIB-S1085k334 4mp",
        //                 uz: "4mp FIB-S1085k334 4mp",
        //                 pr: "4mp FIB-S1085k334 4mp",
        //                 optionsen: [
        //                     "PELASTIC DOME CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol",
        //                     "Support audio input/output 1ch, support two-way audio;support dual-stream",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گنبد پلاستیکی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه، پشتیبانی از صدای دو جریانی",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "ПЛАСТИКОВАЯ КУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif",
        //                     "Поддержка 1-канального аудиовхода/выхода, поддержка двустороннего звука, поддержка двухпотокового звука",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "PELASTIC GUMBAL KAMERA",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash; ikki tomonlama oqimni qo'llab-quvvatlash",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 14,
        //                 img: "./5.jpg",
        //                 ru: "4mp FIB-S1085k414 4mp",
        //                 en: "4mp FIB-S1085k414 4mp",
        //                 uz: "4mp FIB-S1085k414 4mp",
        //                 pr: "4mp FIB-S1085k414 4mp",
        //                 optionsen: [
        //                     "PELASTIC DOME CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        //                     "LENZ:4mm fixed focal lens",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گنبد پلاستیکی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "فلش 8 مگابایتی، DDR264 مگابایت؛ تک هسته A7 1.2 گیگاهرتز",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265 * پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه؛ اگر این گزینه را می خواهید، باید آن را سفارش دهید",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "ПЛАСТИКОВАЯ КУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Флэш-память 8 МБ, DDR264 МБ; одноядерный A7 1,2 ГГц",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265 * Поддержка протокола международного стандарта Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка 1-канального аудиовхода/вывода, поддержка двусторонней аудиосвязи; если вам нужна эта опция, вы должны заказать ее",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "PELASTIC GUMBAL KAMERA",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Flash 8MB, DDR264MB; bir yadroli A7 1.2GHz",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi* Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlaydi",
        //                     "1ch audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama audioni qo'llab-quvvatlash",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 15,
        //                 img: "./6.jpg",
        //                 ru: "5mp FID-S1086k5 5mp",
        //                 en: "5mp FID-S1086k5 5mp",
        //                 uz: "5mp FID-S1086k5 5mp",
        //                 pr: "5mp FID-S1086k5 5mp",
        //                 optionsen: [
        //                     "METAL BULLET CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "5MP Super Starlight   Progressive Scan CMOS",
        //                     "Support 120dB Optical width dynamic (WDR)   ",
        //                     "two mic",
        //                     "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding",
        //                     "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;",
        //                     "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Smart Hybrid Light: advanced technology with long range",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionspr: [
        //                     "دوربین گلوله فلزی",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "اسکن پیشرونده CMOS Super Starlight 5 مگاپیکسلی",
        //                     "پشتیبانی از عرض نوری پویا 120 دسی بل (WDR)",
        //                     "دو میکروفون",
        //                     "وضوح HD 5 MP، 2880*1620@25، 2560*1440@25، 2304*1296@25، 1920*1080@25، 1920*1080@30",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265",
        //                     "پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی ورودی/خروجی صوتی کانال 1، پشتیبانی صوتی دو طرفه;",
        //                     "نور ستاره: روز/شب (ICR)AWB، AGC، BLC، HLC2DNR/3DNR",
        //                     "نور هیبریدی هوشمند: فناوری پیشرفته با برد بلند",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛ ПУЛЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "5 МП Super Starlight CMOS с прогрессивной разверткой",
        //                     "Поддержка динамической оптической ширины 120 дБ (WDR)",
        //                     "два микрофона",
        //                     "Разрешение HD 5 МП, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265",
        //                     "Поддержка международного стандартного протокола Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка аудиовхода/выхода 1 канал, поддержка двустороннего звука;",
        //                     "Звездный свет: день/ночь (ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        //                     "Умный гибридный свет: передовые технологии с большим радиусом действия",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL BULLET KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "5MP Super Starlight Progressive Scan CMOS",
        //                     "120dB Optik kenglik dinamikini (WDR) qo'llab-quvvatlash",
        //                     "ikki mikrofon",
        //                     "5MP HD ruxsati, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi",
        //                     "Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlash",
        //                     "1 kanalli audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama ovozni qo'llab-quvvatlash;",
        //                     "Yulduzli yorug'lik: kunduz / tun (ICR) AWB, AGC, BLC, HLC2DNR / 3DNR",
        //                     "Smart Hybrid Light: uzoq masofali ilg'or texnologiya",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 16,
        //                 img: "./6.jpg",
        //                 ru: "4mp FID-S1086k414 4mp",
        //                 en: "4mp FID-S1086k414 4mp",
        //                 uz: "4mp FID-S1086k414 4mp",
        //                 pr: "4mp FID-S1086k414 4mp",
        //                 optionspr: [
        //                     "دوربین گلوله فلزی",
        //                     "تصویر 4 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "فلش 8 مگابایتی، DDR264 مگابایت؛ تک هسته A7 1.2 گیگاهرتز",
        //                     "پشتیبانی از تشخیص بدن انسان + عملکرد روشنایی دوگانه هوشمند",
        //                     "رزولوشن HD 4 MP، 2560*1440@25، 2304*1296@25، 1080P@25",
        //                     "کنترل هوشمند مادون قرمز/نور گرم، بدون نیاز به حساسیت به نور",
        //                     "پشتیبانی از کدگذاری هوشمند Ultra H. 265 * پشتیبانی از پروتکل استاندارد بین المللی Onvif با DVR های شخص ثالث، پشتیبانی از پروتکل خصوصی Uniview و HIK Vision",
        //                     "پشتیبانی از ورودی/خروجی صوتی 1 کاناله، پشتیبانی از صدای دو طرفه؛ اگر این گزینه را می خواهید، باید آن را سفارش دهید",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "سماتر پو",
        //                 ],
        //                 optionsen: [
        //                     "METAL BULLET CAMERA",
        //                     "High quality imaging with 4 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        //                     "Support Human Body Detection + Dual-Light Intelligent Function,",
        //                     "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        //                     "Smart infrared/warm light control, no need photosensitive",
        //                     "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        //                     "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        //                     "LENZ:4mm fixed focal lens",
        //                     "Water and dust resistant (IP66)",
        //                     "SMATR POE",
        //                 ],
        //                 optionsru: [
        //                     "МЕТАЛЛ ПУЛЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 4 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Флэш-память 8 МБ, DDR264 МБ; одноядерный A7 1,2 ГГц",
        //                     "Поддержка обнаружения человеческого тела + интеллектуальная функция двойного освещения",
        //                     "Разрешение HD 4 Мп, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Интеллектуальное управление инфракрасным/теплым светом, нет необходимости в светочувствительности",
        //                     "Поддержка интеллектуального кодирования Ultra H. 265 * Поддержка протокола международного стандарта Onvif со сторонними видеорегистраторами, поддержка частного протокола Uniview и HIK Vision",
        //                     "Поддержка 1-канального аудиовхода/вывода, поддержка двусторонней аудиосвязи; если вам нужна эта опция, вы должны заказать ее",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "СМАТР ПОЭ",
        //                 ],
        //                 optionsuz: [
        //                     "METAL BULLET KAMERA",
        //                     "4 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Flash 8MB, DDR264MB; bir yadroli A7 1.2GHz ",
        //                     "Inson tanasini aniqlashni qo'llab-quvvatlash + Ikki nurli aqlli funktsiya,",
        //                     "4mp hd ruxsati, 2560*1440@25, 2304*1296@25, 1080P@25",
        //                     "Aqlli infraqizil/issiq yorug'lik nazorati, fotosensitivlik kerak emas",
        //                     "Ultra H. 265 aqlli kodlashni qo'llab-quvvatlaydi* Onvif xalqaro standart protokolini uchinchi tomon NVR, Support Uniview va HIK Vision shaxsiy protokoli bilan qo'llab-quvvatlaydi",
        //                     "1ch audio kirish/chiqishni qo'llab-quvvatlash, ikki tomonlama audioni qo'llab-quvvatlash",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Suv va changga chidamli (IP66)",
        //                     "SMATR POE",
        //                 ],
        //             },

        //             {
        //                 id: 17,
        //                 img: "./6.jpg",
        //                 ru: "FAB-184o5 5mp",
        //                 en: "FAB-184o5 5mp",
        //                 uz: "FAB-184o5 5mp",
        //                 pr: "FAB-184o5 5mp",
        //                 optionspr: [
        //                     "دوربین گلوله فلزی احد",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "نور ستاره: روز/شب",
        //                     "یک پورت برای چهار سیگنال قابل تعویض (TVI/AHD/CVI/CVBS）)",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "صدای کابل کواکسیال با کیفیت بالا، میکروفون داخلی",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "12 ولت DC",
        //                 ],
        //                 optionsen: [
        //                     "AHD METAL BULLET CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Starlight :Day/Night",
        //                     "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        //                     "LENZ:4mm fixed focal lens",
        //                     "High quality audio with audio over coaxial cable, built-in mic",
        //                     "Water and dust resistant (IP66)",
        //                     "12v DC",
        //                 ],
        //                 optionsru: [
        //                     "AHD МЕТАЛЛИЧЕСКАЯ ПУЛЕВАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Звездный свет: День/Ночь",
        //                     "Один порт для четырех переключаемых сигналов (TVI/AHD/CVI/CVBS）)",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Высококачественный звук по коаксиальному кабелю, встроенный микрофон",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "12 В постоянного тока",
        //                 ],
        //                 optionsuz: [
        //                     "AHD METAL BULLET KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Yulduzli yorug'lik: kunduz / tun",
        //                     "To'rtta almashtiriladigan signallar uchun bitta port (TVI/AHD/CVI/CVBS）)",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Koaksiyal kabel orqali audio bilan yuqori sifatli audio, o'rnatilgan mikrofon",
        //                     "Suv va changga chidamli (IP66)",
        //                     "12v DC",
        //                 ],
        //             },

        //             {
        //                 id: 18,
        //                 img: "./5.jpg",
        //                 ru: "FAB-185o5 5mp",
        //                 en: "FAB-185o5 5mp",
        //                 uz: "FAB-185o5 5mp",
        //                 pr: "FAB-185o5 5mp",
        //                 optionspr: [
        //                     "دوربین گنبد پلاستیکی AHD",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "نور ستاره: روز/شب",
        //                     "یک پورت برای چهار سیگنال قابل تعویض (TVI/AHD/CVI/CVBS",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "صدای با کیفیت بالا روی کابل کواکسیال، میکروفون داخلی. اگر به این گزینه نیاز دارید، باید آن را سفارش دهید",
        //                     "12 ولت DC",
        //                 ],
        //                 optionsen: [
        //                     "AHD PELASTIC DOME CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Starlight :Day/Night",
        //                     "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        //                     "LENZ:4mm fixed focal lens",
        //                     "High quality audio with audio over coaxial cable, built-in micЕсли вам нужна эта опция, вы должны заказать ее",
        //                     "12v DC",
        //                 ],
        //                 optionsru: [
        //                     "AHD ПЛАСТИКОВАЯ КУПОЛЬНАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Звездный свет: День/Ночь",
        //                     "Один порт для четырех переключаемых сигналов (TVI/AHD/CVI/CVBS",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Высококачественный звук по коаксиальному кабелю, встроенный микрофон. Если вам нужна эта опция, вы должны заказать ее",
        //                     "12 В постоянного тока",
        //                 ],
        //                 optionsuz: [
        //                     "AHD PELASTIC GUMBAL KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Yulduzli yorug'lik: kunduz / tun",
        //                     "To'rtta almashtiriladigan signallar uchun bitta port (TVI/AHD/CVI/CVBS)",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Koaksial kabel orqali audio bilan yuqori sifatli audio, o'rnatilgan micEsli vam nojna eta variant, vy doljny zakazat ee",
        //                     "12v DC",
        //                 ],
        //             },

        //             {
        //                 id: 19,
        //                 img: "./3.jpg",
        //                 ru: "FAD-S187o5 5mp",
        //                 en: "FAD-S187o5 5mp",
        //                 uz: "FAD-S187o5 5mp",
        //                 pr: "FAD-S187o5 5mp",
        //                 optionspr: [
        //                     "دوربین گلوله فلزی احد",
        //                     "تصویر 5 مگاپیکسلی با کیفیت بالا",
        //                     "تصویر رنگی 24 ساعت شبانه روز، 7 روز هفته",
        //                     "نور ستاره: روز/شب",
        //                     "یک پورت برای چهار سیگنال قابل تعویض (TVI/AHD/CVI/CVBS",
        //                     "LENZ: لنز با فاصله کانونی ثابت 4 میلی متری",
        //                     "صدای کابل کواکسیال با کیفیت بالا، میکروفون داخلی",
        //                     "مقاومت در برابر آب و گرد و غبار (IP66)",
        //                     "12 ولت DC",
        //                 ],
        //                 optionsen: [
        //                     "AHD METAL BULLET CAMERA",
        //                     "High quality imaging with 5 MP resolution",
        //                     "24/7 colorful imaging",
        //                     "Starlight :Day/Night",
        //                     "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        //                     "LENZ:4mm fixed focal lens",
        //                     "High quality audio with audio over coaxial cable, built-in mic",
        //                     "Water and dust resistant (IP66)",
        //                     "12v DC",
        //                 ],
        //                 optionsru: [
        //                     "AHD МЕТАЛЛИЧЕСКАЯ ПУЛЕВАЯ КАМЕРА",
        //                     "Высококачественное изображение с разрешением 5 МП",
        //                     "Цветное изображение 24 часа в сутки, 7 дней в неделю",
        //                     "Звездный свет: День/Ночь",
        //                     "Один порт для четырех переключаемых сигналов (TVI/AHD/CVI/CVBS",
        //                     "ЛЕНЦ: объектив с фиксированным фокусным расстоянием 4 мм",
        //                     "Высококачественный звук по коаксиальному кабелю, встроенный микрофон",
        //                     "Водо- и пыленепроницаемость (IP66)",
        //                     "12 В постоянного тока",
        //                 ],
        //                 optionsuz: [
        //                     "AHD METAL BULLET KAMERA",
        //                     "5 MP ruxsati bilan yuqori sifatli tasvirlash",
        //                     "24/7 rangli tasvir",
        //                     "Yulduzli yorug'lik: kunduz / tun",
        //                     "To'rtta almashtiriladigan signallar uchun bitta port (TVI/AHD/CVI/CVBS)",
        //                     "LENZ: 4 mm qattiq fokusli linza",
        //                     "Koaksial kabel orqali audio bilan yuqori sifatli audio, o'rnatilgan mikrofon",
        //                     "Suv va changga chidamli (IP66)",
        //                     "12v DC",
        //                 ],
        //             },
        //         ]
        //     })
        // },
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