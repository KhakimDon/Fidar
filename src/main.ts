import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
import { useLangStore } from "./stores/lang";

const i18n = createI18n({
  locale: useLangStore().lang,
  messages: {
    en: useLangStore().en,
    ru: useLangStore().ru,
    pr: useLangStore().pr,
    uz: useLangStore().uz,
  },
});

app.use(i18n);

app.mount("#app");
