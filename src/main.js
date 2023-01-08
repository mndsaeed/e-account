import { createApp } from "vue";
import App from "./App.vue";

import VueTailwindDatepicker from "vue-tailwind-datepicker";
import router from "./router";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(VueTailwindDatepicker);
app.mount("#app");
