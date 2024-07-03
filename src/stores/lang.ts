import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLangStore = defineStore("language", () => {
  let lang = ref("pr");
  let once = ref(false);

  let ru = ref({
    p: "optionsru",
    aboutBtn: "О нас",
    products: "Продукты",
    gallery: "Галерея",
    ru: "Русский",
    uz: "Узбекский",
    en: "Английский",
    pr: "Фарси",
    video: "Видео о нас",
    chooseLanguage: "Выберите язык:",
    about:
      "Наша компания специализируется на производстве камер наблюдения, предоставляя современные решения для обеспечения безопасности и контроля. Мы создаем высококачественные камеры, которые обеспечивают надежное видеонаблюдение в различных сферах: от частных домов до коммерческих объектов и государственных учреждений. Наше производство основано на инновационных технологиях и высоких стандартах качества, чтобы обеспечить эффективную защиту и мониторинг для наших клиентов.",
    cameras: "Камеры",
    xvrnvr: "XVR и NVR",
    characters: "Характеристики",
    contact: "Контакты",
    address: "Адрес: г.Ташкент Чиланзарский район 1 квартал 32/22",
    tel: "Телефон номер:+998 77 300 80 60",
    wha: "Whatsup номер:+998 77 300 80 60",
    teleg: "Телеграм: visto_manager",
    close: "Закрыть",
    poisk: "Поиск",
  });

  let pr = ref({
    video: "ویدیو درباره ما",
    p: "optionspr",
    aboutBtn: "درباره ما",
    products: "محصولات",
    gallery: "آلبوم عکس",
    ru: "روسی",
    uz: "ازبکستان",
    en: "انگلیسی",
    pr: "فارسی",
    chooseLanguage: "زبان را انتخاب کنید:",
    about: "",
    cameras: "دوربین ها",
    xvrnvr: "XVR و NVR",
    characters: "مشخصات",
    contact: "مخاطب",
    address: "آدرس: تاشکند، منطقه چیلانزار، بلوک 1 32/22",
    tel: "شماره تلفن: +998 77 300 80 60",
    wha: "شماره واتس آپ: +998 77 300 80 60",
    teleg: "تلگرام: visto_manager",
    close: "بستن",
    poisk: "جستجو کردن",
  });

  let uz = ref({
    video: "Biz haqimizda Video",
    p: "optionsuz",
    aboutBtn: "Biz haqimizda",
    products: "Mahsulotlar",
    gallery: "Galereya",
    ru: "Rus tili",
    uz: "Uzbek tili",
    en: "Ingliz tili",
    pr: "Forsiy",
    chooseLanguage: "Tilni tanlang:",
    about: "",
    cameras: "Kameralar",
    xvrnvr: "XVR va NVR",
    characters: "Xususiyatlari",
    contact: "Kontaktlar",
    address: "Manzil: Toshkent sh., Chilonzor tumani, 1-kvartira 32/22",
    tel: "Telefon raqam: +998 77 300 80 60",
    wha: "Whatsup raqam:+998 77 300 80 60",
    teleg: "Telegram: visto_manager ",
    close: "Yopish",
    poisk: "Qidirish",
  });

  let en = ref({
    video: "Video about us",
    p: "optionsen",
    aboutBtn: "About us",
    products: "Products",
    gallery: "Gallery",
    ru: "Russian",
    uz: "Uzbek",
    en: "English",
    pr: "Persian",
    chooseLanguage: "Choose Language:",
    about:
      "Our company specializes in the production of surveillance cameras, providing modern solutions for security and control. We create high-quality cameras that provide reliable video surveillance in a variety of areas: from private homes to commercial facilities and government institutions. Our production is based on innovative technologies and high quality standards to provide effective protection and monitoring to our customers.",
    cameras: "Cameras",
    xvrnvr: "XVR and NVR",
    characters: "Characteristics",
    contact: "Contacts",
    address: "Address: Tashkent, Chilanzar district, 1st block 32/22",
    tel: "Phone number: +998 77 300 80 60",
    wha: "Whatsup номер:+998 77 300 80 60",
    teleg: "Telegram: visto_manager ",
    close: "Close",
    poisk: "Search",
  });

  return { lang, once, ru, pr, uz, en };
});
