import "./assets/css/main.css";
import "vue-fast-marquee/style.css";
import { createApp } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import Marquee from "vue-fast-marquee";
import App from "./App.vue";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(Marquee);
app.mount("#app");
