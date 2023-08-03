import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Request from '../services/Request';
import {useUserStore} from '../services/userStore';


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
    },
    {
        path: '/logout',
        name: 'logout',
        redirect:  (to)=> {
             Request.get('/user/logout').then((value)=>{
                useUserStore().logout()
            })
            return {name: 'login'};  
        },
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