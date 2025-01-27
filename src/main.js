import "./assets/main.css";
import { createApp } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

import App from "./App.vue";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
const app = createApp(App);
app.component("v-icon", OhVueIcon);

app.mount("#app");
