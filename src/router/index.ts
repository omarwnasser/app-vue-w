import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "الصفحة الرئيسية",
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: "صفحة تسجيل الدخول",
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: "صفحة تسجيل الدخول",
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router