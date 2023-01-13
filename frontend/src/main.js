import { createApp } from 'vue'
import naive from 'naive-ui'
import App from "@/App";
import MyAbout from "@/components/routes/MyAbout";
import MyStatus from "@/components/routes/MyStatus";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import FileManager from "@/components/routes/FileManager.vue";
import XTerm from "@/components/routes/XTerm.vue";
const app = createApp(App)
const routes = [
    {path: '/', redirect: '/status'},
    {path: '/about', component: MyAbout},
    {path: '/status', component: MyStatus},
    {path: '/file', component: FileManager},
    {path: '/xterm', component: XTerm}
];
const router = createRouter({history: createWebHistory('/'), routes, });
app.use(naive)
app.use(router)
app.mount("#app")