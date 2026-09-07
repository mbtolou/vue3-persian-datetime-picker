import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3PersianDatetimePicker from "./picker/Vue3PersianDatetimePicker.vue";

const app = createApp(App);

app.component("DatePicker", Vue3PersianDatetimePicker);
app.use(router);
app.mount("#app");
