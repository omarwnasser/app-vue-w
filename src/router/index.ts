import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
<<<<<<< HEAD
=======
import Login from '../views/Login.vue';
import Register from '../views/register.vue';
>>>>>>> 1c172f99c9b1716d3efc0e5e5581d3e820ab13cf


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "الصفحة الرئيسية",
        }
<<<<<<< HEAD
=======
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
>>>>>>> 1c172f99c9b1716d3efc0e5e5581d3e820ab13cf
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router