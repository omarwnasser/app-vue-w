import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "الصفحة الرئيسية",
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router