import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import VueTailwindDatepicker from "vue-tailwind-datepicker";
import VOtpInput from "vue3-otp-input";
import router from "./router";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueTailwindDatepicker);
app.mount("#app");
app.component("v-otp-input", VOtpInput);
