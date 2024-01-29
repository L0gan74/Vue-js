import './assets/scss/main.scss'

import {createApp} from 'vue'
import {createPinia} from "pinia";

import App from './App.vue'
import router from "./routes/index.js";

createApp(App).use(createPinia()).use(router).mount("#app");
