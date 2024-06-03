import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("useProducts", () => {
  const switches = ref([
    {
      id: 1,
      title: "XVR-FAX-333045N-5MP",
      img: "/1.jpg",
      options: [
        "4-канальный цифровой видеорегистратор с разрешением 5 Мп.",
        "H.264/H.264+/H.265/H.265+",
        "5MP N 5 В 1. (AHD/TVI/CVI/CVBS/IP)",
        "4-КАНАЛЬНОЕ ВОСПРОИЗВЕДЕНИЕ.",
        "Поддерживает 1 жесткий диск SATA емкостью до 8 ТБ.",
        "2-канальная IP-камера @ 1080P HDMI",
        "1-канальный аналоговый звук; 2 ГБ ОЗУ; ВСПЫШКА 16М.",
        "Поддерживает ключ 3G/4G/WIFI",
        "15 кадров в секунду при 5 МП/20 кадров в секунду при 2 МП AHD/CVI/TVI",
        "25 кадров в секунду при 1080P IP",
        "По одному IP или аналоговое переключение",
        "Мобильное приложение XVRView для Android/iOS",
        "Активный быстрый P2P",
        "Сильная поддержка RTSP.",
      ],
    },
    {
      id: 2,
      title: "XVR-FAX-333085N-5MP",
      img: "/1.jpg",
      options: [
        "8-канальный цифровой видеорегистратор с разрешением 5 Мп.",
        "H.264/H.264+/H.265/H.265+",
        "5MP N 5 В 1. (AHD/TVI/CVI/CVBS/IP)",
        "8-КАНАЛЬНОЕ ВОСПРОИЗВЕДЕНИЕ.",
        "Поддерживает 1 жесткий диск SATA емкостью до 8 ТБ.",
        "8-канальная IP-камера @ 1080P",
        "Поддержка 4-канального квааксиального звука / HDMI",
        "1-канальный аналоговый звук; 2 ГБ ОЗУ; ВСПЫШКА 16М.",
        "Поддерживает ключ 3G/4G/WIFI",
        "7 кадров в секунду при 5 МП/20 кадров в секунду при  2 МП AHD/CVI/TVI",
        "25 кадров в секунду при 1080P IP",
        "По одному IP или аналоговое переключение",
        "Мобильное приложение XVRView для Android/iOS",
        "Активный быстрый P2P",
        "Сильная поддержка RTSP.",
      ],
    },
    {
      id: 3,
      title: "XVR-FAX-333165N-5MP",
      img: "/1.jpg",
      options: [
        "16-канальный цифровой видеорегистратор с разрешением 5 Мп.",
        "H.264/H.264+/H.265/H.265+",
        "5MP N 5 В 1. (AHD/TVI/CVI/CVBS/IP)",
        "16-КАНАЛЬНОЕ ВОСПРОИЗВЕДЕНИЕ.",
        "Поддерживает 2 жестких диска SATA емкостью до 8 ТБ.",
        "16-канальная IP-камера @ 1080P",
        "HDMI/2-канальный аналоговый звук; 2 ГБ ОЗУ; ВСПЫШКА 16М.",
        "Поддерживает ключ 3G/4G/WIFI",
        "6 кадров в секунду при 5 МП/20 кадров в секунду при 2 МП AHD/CVI/TVI",
        "25 кадров в секунду при 1080P IP",
        "По одному IP или аналоговое переключение",
        "Мобильное приложение XVRView для Android/iOS",
        "Активный быстрый P2P",
        "Сильная поддержка RTSP.",
      ],
    },
    {
      id: 4,
      title: "NVR- FIN-333644K– 4K",
      img: "/2.jpg",
      options: [
        "64 канала: поддержка полного подключения 64-канальной камеры 4K (8,0​ МП)​",
        "Поддержка быстрого переключения многосценических режимов камер IPC.​",
        "Автоматическое добавление камер + автоматическое переключение на H.265.​",
        "Поддержка межсегментного поиска и добавления камер.​",
        "Полная совместимость: поддержка основного бренда и основногопроизводителя IPC.​",
        "доступ к модулю;​",
        "Поддержка изменения параметров изображения: насыщенность, яркость,  контрастность и т. д.​",
        "Поддержка изменения параметров кодирования IPC;​",
        "Поддержка технологии интеллектуального сжатия кодирования CODE​",
        "патентов UOS,​",
        "сокращение объема хранилища вдвое и уменьшение вдвое, а также экономия  места на жестком диске с помощью Super H.265;​",
        "Поддержка изменения информации OSD основных поставщиков IPC;​",
        "Поддержка перетаскивания мышью для изменения канала камеры и  синхронного изменения.​",
        "соответствующий канал воспроизведения видео;​",
        "Поддержка функций сигнализации, таких как отключение проводов;​",
        "Поддержка видеоформатов Ultra 265/H.265/H.264H​",
        "IP-камеры сторонних производителей, поддерживающие соответствие​",
        "ONVIF.​",
        "Входная полоса пропускания: до 320 Мбит/с.​",
        "возможность воспроизведения 16*1080p@30  8*4МП@30​",
        "4*4к@30​",
        "приложение Guard Viewer CMS: GUARD STATHON​",
        "разрешение записи​",
        "Поддержка 1 канала HDMI, 1 канала VGA (5) Одновременная поддержка​",
        "HDMI и VGA​",
        "4 жестких диска SATA до 10 ТБ​",
        "Поддержка обновления облака",
      ],
    },
    {
      id: 5,
      title: "NVR- FIN-333324K– 4K",
      img: "/2.jpg",
      options: [
        "32 канала: поддержка полного подключения 32-канальной камеры 4K (8,0 МП);​",
        "Поддержка быстрого переключения многосценических режимов камер IPC;​",
        "Автоматическое добавление камер;​",
        "Поддержка межсегментного поиска и добавление камер: добавление основных  брендов и Модули IPC для межсегментного поиска;​",
        "Поддержка изменения IP-адреса, даже IP-адреса других марок IPC;​",
        "Полная совместимость: поддержка основного бренда и основного  производителя IPC.​",
        "доступ к модулю;​",
        "Поддержка изменения параметров изображения: насыщенность, яркость,  контрастность и т. д.​",
        "Поддержка изменения параметров кодирования IPC;​",
        "Поддержка технологии интеллектуального сжатия кодирования CODE патентов​",
        "UOS,​",
        "сокращение объема хранилища вдвое и уменьшение вдвое, а также экономия  места на жестком диске с помощью Super H.265;​",
        "Поддержка изменения информации OSD основных поставщиков IPC;​",
        "Поддержка перетаскивания мышью для изменения канала камеры и  синхронного изменения.​",
        "соответствующий канал воспроизведения видео;​",
        "Поддержка функций сигнализации, таких как отключение проводов;​",
        "Поддержка 32-канального интерфейса для обеспечения одинакового размера  изображения дороги при 20-канальном полном воспроизведении;​",
        "Приложение UFO GV (GUARD VIEWER) представляет собой динамичную карту  без рекламы.​",
        "Хранение без сбоев: Universal Vision имеет технологию хранения,  автоматическое форматирование жесткого диска без потери видео.​",
        "Он также поддерживает функцию обнаружения плохих дорожек и экранирования  жесткого диска Western.​",
        "во избежание повреждения жесткого диска, вызванного распространением  плохой дорожки.",
      ],
    },
    {
      id: 6,
      title: "NVR- FIN-333165 - 5MP",
      img: "/2.jpg",
      options: [
        "H.264/H.264+/H.265​",
        "16 каналов: поддержка полного подключения 16-канальной камеры 5,0 МП; Поддержка быстрого переключения многосценовых режимов IPC-камер;  Автоматическое добавление камер​",
        "Поддержка межсегментного поиска и добавление камер: добавление  основных брендов и модулей IPC в межсегментный поиск;​",
        "Поддержка изменения IP-адреса, даже IP-адреса других марок IPC;​",
        "Полная совместимость: поддержка доступа к модулю IPC основного бренда и  основного производителя;​",
        "Поддержка изменения параметров изображения: насыщенность, яркость,  контрастность и т. д.​",
        "Поддержка изменения параметров кодирования IPC;​",
        "Поддержка технологии интеллектуального сжатия кодирования CODE,​",
        "запатентованной патентами UOS, сокращение объема памяти вдвое и  уменьшение вдвое, а также экономия места на жестком диске с помощью  Super H.265;​",
        "Поддержка изменения информации OSD IPC;​",
        "Поддержка перетаскивания мышью для изменения канала камеры и​",
        "синхронного изменения соответствующего канала воспроизведения видео;  Поддержка функций сигнализации, таких как отключение проводов;​",
        "Поддержка 16-канального интерфейса для обеспечения одинакового размера  изображения дороги при 10-канальном полном воспроизведении;​",
        "Приложение UFO GV (GUARD VIEWER) представляет собой динамичную карту  без рекламы.​",
        "Хранение без сбоев: Universal Vision имеет технологию хранения,​",
        "автоматическое форматирование жесткого диска, отсутствие потери видео. Он  также поддерживает функцию обнаружения и защиты плохих дорожек​",
        "жесткого диска Western, чтобы избежать повреждения жесткого диска,  вызванного распространением плохих дорожек.​",
      ],
    },
  ]);

  const cameras = ref([
    {
      id: 7,
      img: "./3.jpg",
      title: "5mp FIB-S1084k5 5mp",
      options: [
        "METAL DOME CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "5MP Super Starlight   Progressive Scan CMOS",
        "Support 120dB Optical width dynamic (WDR) two mic",
        "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        "Starlight :Day/Night (ICR) AWB,AGC,BLC,HLC2DNR/3DNR",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 8,
      img: "./3.jpg",
      title: "4mp FIB-S1084k334 4mp",
      options: [
        "METAL DOME CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol",
        "Support audio input/output 1ch, support two-way audio;support dual-stream Если вам нужна эта опция, вы должны заказать ее",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 9,
      img: "./3.jpg",
      title: "4mp FIB-S1084k414 4mp",
      options: [
        "METAL DOME CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 10,
      img: "./4.jpg",
      title: "5mp FID-S1087k5 5mp",
      options: [
        "METAL BULLET CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "5MP Super Starlight   Progressive Scan CMOS",
        "Support 120dB Optical width dynamic (WDR)   ",
        "two mic",
        "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;",
        "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 11,
      img: "./4.jpg",
      title: "4mp FID-S1087k334 4mp",
      options: [
        "METAL BULLET CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol",
        "Support audio input/output 1ch, support two-way audio;support dual-stream",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 12,
      img: "./4.jpg",
      title: "4mp FID-S1087k414 4mp",
      options: [
        "METAL BULLET CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },
    {
      id: 13,
      img: "./5.jpg",
      title: "5mp FIB-S1085k5 5mp",
      options: [
        "PELASTIC DOME CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "5MP Super Starlight   Progressive Scan CMOS",
        "Support 120dB Optical width dynamic (WDR)   ",
        "two mic",
        "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "SMATR POE",
      ],
    },

    {
      id: 13,
      img: "./5.jpg",
      title: "4mp FIB-S1085k334 4mp",
      options: [
        "PELASTIC DOME CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol",
        "Support audio input/output 1ch, support two-way audio;support dual-stream",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "SMATR POE",
      ],
    },
    {
      id: 14,
      img: "./5.jpg",
      title: "4mp FIB-S1085k414 4mp",
      options: [
        "PELASTIC DOME CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Flash 8MB,DDR264MB ; single-core A7 1.2GHz",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        "LENZ:4mm fixed focal lens",
        "SMATR POE",
      ],
    },

    {
      id: 15,
      img: "./6.jpg",
      title: "5mp FID-S1086k5 5mp",
      options: [
        "METAL BULLET CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "5MP Super Starlight   Progressive Scan CMOS",
        "Support 120dB Optical width dynamic (WDR)   ",
        "two mic",
        "5MP HD Resolution, 2880*1620@25, 2560*1440@25, 2304*1296@25, 1920*1080@25, 1920*1080@30",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding",
        "Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;",
        "Starlight :Day/Night(ICR)AWB,AGC,BLC,HLC2DNR/3DNR",
        "Smart Hybrid Light: advanced technology with long range",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },

    {
      id: 16,
      img: "./6.jpg",
      title: "4mp FID-S1086k414 4mp",
      options: [
        "METAL BULLET CAMERA",
        "High quality imaging with 4 MP resolution",
        "24/7 colorful imaging",
        "Flash 8MB,DDR264MB ; single-core A7 1.2GHz               ",
        "Support Human Body Detection + Dual-Light Intelligent Function,",
        "4mp hd resolution, 2560*1440@25, 2304*1296@25 , 1080P@25",
        "Smart infrared/warm light control, no need photosensitive",
        "Supports Ultra H. 265 intelligent coding*Support Onvif international standard protocol with third-party NVR, Support Uniview and HIK Vision private protocol",
        "Support audio input/output 1ch, support two-way audio;Если вам нужна эта опция, вы должны заказать ее",
        "LENZ:4mm fixed focal lens",
        "Water and dust resistant (IP66)",
        "SMATR POE",
      ],
    },

    {
      id: 17,
      img: "./6.jpg",
      title: "FAB-184o5 5mp",
      options: [
        "AHD METAL BULLET CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "Starlight :Day/Night",
        "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        "LENZ:4mm fixed focal lens",
        "High quality audio with audio over coaxial cable, built-in mic",
        "Water and dust resistant (IP66)",
        "12v DC",
      ],
    },

    {
      id: 18,
      img: "./5.jpg",
      title: "FAB-185o5 5mp",
      options: [
        "AHD PELASTIC DOME CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "Starlight :Day/Night",
        "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        "LENZ:4mm fixed focal lens",
        "High quality audio with audio over coaxial cable, built-in micЕсли вам нужна эта опция, вы должны заказать ее",
        "12v DC",
      ],
    },

    {
      id: 19,
      img: "./3.jpg",
      title: "FAD-S187o5 5mp",
      options: [
        "AHD METAL BULLET CAMERA",
        "High quality imaging with 5 MP resolution",
        "24/7 colorful imaging",
        "Starlight :Day/Night",
        "One port for four switchable signals (TVI/AHD/CVI/CVBS）",
        "LENZ:4mm fixed focal lens",
        "High quality audio with audio over coaxial cable, built-in mic",
        "Water and dust resistant (IP66)",
        "12v DC",
      ],
    },

  ]);

  return { switches, cameras };
});
