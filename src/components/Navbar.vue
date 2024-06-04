<script lang="ts" setup>
import { ref } from "vue";


const link = window.location.href
const activealert = ref(false)

function shareOnWhatsApp() {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, '_blank');
}

function changelanguage(){
    
}

function shareOnTelegram() {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
}

function copyLin() {
    // Попытка использования navigator.clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(this.link).then(() => {
            console.log('Ссылка скопирована!');
        }).catch(err => {
            console.error('Ошибка копирования через clipboard API: ', err);
            this.fallbackCopyLink();
        });
    } else {
        this.fallbackCopyLink();
    }
    activealert.value = true
    setTimeout(() => {
        activealert.value = false
    }, 1000);
}

function fallbackCopyLink() {
    // Создание временного текстового поля для копирования
    const textArea = document.createElement('textarea');
    textArea.value = this.link;
    textArea.style.position = 'fixed';  // Avoid scrolling to bottom
    textArea.style.left = '-9999px';  // Move it out of sight
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        console.log('Ссылка скопирована!');
    } catch (err) {
        console.error('Ошибка копирования через execCommand: ', err);
    }
    document.body.removeChild(textArea);
}

</script>

<template>
    <div class="navmedia fixed left-[10px] top-[20px] flex flex-col gap-[10px] z-[999]">
        <a href="https://fidarnetwork.com/"
            class="flex items-center justify-center bg-[white] border-[1px] h-[40px] w-[40px] rounded-[50%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 text-[#01BAF1]">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        </a>
        <a href="https://www.instagram.com/fidarnetwork.uz/"
            class="flex items-center justify-center bg-[white] border-[1px] h-[40px] w-[40px] rounded-[50%]">
            <svg class="h-[20px] w-[20px] text-[#01BAF1]" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#01BAF1" />
                <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#01BAF1" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#01BAF1" />
            </svg>
        </a>
        <a href="tel:+998773008060"
            class="flex items-center justify-center bg-[white] border-[1px] h-[40px] w-[40px] rounded-[50%]">
            <svg class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                    stroke="#01BAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <a onclick="my_modal_4.showModal()"
            class="flex items-center justify-center bg-[white] border-[1px] h-[40px] w-[40px] rounded-[50%]">
            <svg class="h-[30px] w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.6921 5H9.30807C8.15914 5.00635 7.0598 5.46885 6.25189 6.28576C5.44398 7.10268 4.99368 8.20708 5.00007 9.356V14.644C4.99368 15.7929 5.44398 16.8973 6.25189 17.7142C7.0598 18.5311 8.15914 18.9937 9.30807 19H14.6921C15.841 18.9937 16.9403 18.5311 17.7482 17.7142C18.5562 16.8973 19.0064 15.7929 19.0001 14.644V9.356C19.0064 8.20708 18.5562 7.10268 17.7482 6.28576C16.9403 5.46885 15.841 5.00635 14.6921 5Z"
                    stroke="#01BAF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M8.00012 9C7.58591 9 7.25012 9.33579 7.25012 9.75C7.25012 10.1642 7.58591 10.5 8.00012 10.5V9ZM12.0001 10.5C12.4143 10.5 12.7501 10.1642 12.7501 9.75C12.7501 9.33579 12.4143 9 12.0001 9V10.5ZM11.2501 9.75C11.2501 10.1642 11.5859 10.5 12.0001 10.5C12.4143 10.5 12.7501 10.1642 12.7501 9.75H11.2501ZM12.7501 8C12.7501 7.58579 12.4143 7.25 12.0001 7.25C11.5859 7.25 11.2501 7.58579 11.2501 8H12.7501ZM12.0001 9C11.5859 9 11.2501 9.33579 11.2501 9.75C11.2501 10.1642 11.5859 10.5 12.0001 10.5V9ZM15.5001 10.5C15.9143 10.5 16.2501 10.1642 16.2501 9.75C16.2501 9.33579 15.9143 9 15.5001 9V10.5ZM15.5001 9C15.0859 9 14.7501 9.33579 14.7501 9.75C14.7501 10.1642 15.0859 10.5 15.5001 10.5V9ZM16.0001 10.5C16.4143 10.5 16.7501 10.1642 16.7501 9.75C16.7501 9.33579 16.4143 9 16.0001 9V10.5ZM16.1138 10.1811C16.3519 9.84222 16.2702 9.37443 15.9313 9.13631C15.5923 8.8982 15.1246 8.97992 14.8864 9.31885L16.1138 10.1811ZM11.2737 13.2783C10.9579 13.5464 10.9193 14.0197 11.1874 14.3354C11.4555 14.6512 11.9288 14.6898 12.2445 14.4217L11.2737 13.2783ZM9.29973 14.9003C8.96852 15.149 8.90167 15.6192 9.15041 15.9504C9.39916 16.2816 9.8693 16.3485 10.2005 16.0997L9.29973 14.9003ZM12.2569 14.407C12.5667 14.1321 12.595 13.6581 12.3201 13.3483C12.0453 13.0384 11.5712 13.0101 11.2614 13.285L12.2569 14.407ZM11.1691 14.3091C11.4249 14.6349 11.8963 14.6917 12.2222 14.436C12.548 14.1802 12.6048 13.7088 12.3491 13.3829L11.1691 14.3091ZM11.186 11.4467C11.0185 11.0678 10.5756 10.8966 10.1968 11.0641C9.81796 11.2316 9.64667 11.6745 9.8142 12.0533L11.186 11.4467ZM12.3609 13.4024C12.1137 13.07 11.6439 13.001 11.3115 13.2482C10.9792 13.4954 10.9101 13.9652 11.1573 14.2976L12.3609 13.4024ZM13.8953 16.6608C14.2602 16.8567 14.7149 16.7198 14.9109 16.3548C15.1068 15.9899 14.9699 15.5352 14.605 15.3392L13.8953 16.6608ZM8.00012 10.5H12.0001V9H8.00012V10.5ZM12.7501 9.75V8H11.2501V9.75H12.7501ZM12.0001 10.5H15.5001V9H12.0001V10.5ZM15.5001 10.5H16.0001V9H15.5001V10.5ZM14.8864 9.31885C13.8552 10.7867 12.6412 12.1172 11.2737 13.2783L12.2445 14.4217C13.7091 13.1782 15.0093 11.7532 16.1138 10.1811L14.8864 9.31885ZM10.2005 16.0997C10.7113 15.7161 11.4531 15.1201 12.2569 14.407L11.2614 13.285C10.4871 13.9719 9.77692 14.5419 9.29973 14.9003L10.2005 16.0997ZM12.3491 13.3829C11.8824 12.7884 11.4917 12.1379 11.186 11.4467L9.8142 12.0533C10.1703 12.8586 10.6255 13.6164 11.1691 14.3091L12.3491 13.3829ZM11.1573 14.2976C11.8855 15.2767 12.8203 16.0835 13.8953 16.6608L14.605 15.3392C13.7239 14.8661 12.9578 14.2048 12.3609 13.4024L11.1573 14.2976Z"
                    fill="#01BAF1" />
            </svg>
            <dialog id="my_modal_4" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="mb-[20px] font-[600]">{{ $t("chooseLanguage") }}</h3>
                    <form method="dialog">
                        <button onclick="my_modal_4.showModal()" @click="$i18n.locale = 'ru'"
                        class="bg-[#1c8fdb] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <img class="h-[30px] max-w-[45px]"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
                            alt="image">
                            {{ $t("ru") }}
                    </button>
                    </form>
                    <form method="dialog">
                    <button @click="$i18n.locale = 'uz'"
                        class="bg-[#1c8fdb] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <img class="h-[30px] max-w-[45px]" 
                            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                            alt="image">
                        {{ $t("uz") }}
                    </button>
                </form>
                <form method="dialog">
                    <button @click="$i18n.locale = 'en'"
                        class="bg-[#1c8fdb] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <img class="h-[30px] max-w-[45px]"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
                            alt="image">
                            {{ $t("en") }}
                    </button>
                </form>
                </div>

                <div :class="{ activealert: activealert }" role="alert"
                    class="duration-[.3s] alert flex items-center w-[90%] alert-success fixed top-[-80px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-white shrink-0 h-6 w-6"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-white">Ссылка скопирована !</span>
                </div>

            </dialog>
        </a>
        <a onclick="my_modal_3.showModal()"
            class="flex items-center justify-center bg-[white] border-[1px] h-[40px] w-[40px] rounded-[50%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 text-[#01BAF1]">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>

            <dialog id="my_modal_3" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="mb-[20px] font-[600]">Поделится на :</h3>
                    <button @click="shareOnTelegram"
                        class="bg-[#1c8fdb] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <img class="h-[30px]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
                            alt="image">
                        Поделится на Telegram
                    </button>
                    <button @click="shareOnWhatsApp"
                        class="bg-[#39dc57] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <img class="h-[30px]"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
                            alt="image">
                        Поделится на Whatsup
                    </button>
                    <button @click="copyLin()"
                        class="bg-[gray] flex items-center gap-[10px] px-[10px] py-[15px] rounded-[10px] font-[600] text-white mb-[10px] w-[100%] text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                        Скопировать ссылку
                    </button>
                </div>

                <div :class="{ activealert: activealert }" role="alert"
                    class="duration-[.3s] alert flex items-center w-[90%] alert-success fixed top-[-80px]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-white shrink-0 h-6 w-6"
                        fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-white">Ссылка скопирована !</span>
                </div>

            </dialog>

        </a>
    </div>
</template>



<style>
@media screen and (min-width: 600px) {
    .navmedia {
        left: 470px !important;
        top: 100px !important;
    }
}

.activealert {
    top: 10px !important;
}
</style>