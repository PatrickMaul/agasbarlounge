import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/style.scss";

import { createI18n } from "vue-i18n";
import de_i18n from "./i18n/de";
import en_i18n from "./i18n/en";

const i18n = createI18n({
  locale: "de",
  fallbackLocale: "de",
  messages: {
    de: {
      ...de_i18n,
    },
    en: {
      ...en_i18n,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
