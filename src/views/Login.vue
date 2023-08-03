<template>
    <div class="w-full h-screen bg-gray-200 flex justify-center items-center" dir="rtl">
        <div class="w-full h-screen md:w-80 md:h-auto bg-white rounded-md p-10">
            <h1 class="text-center my-10">صفحة تسجيل الدخول</h1>
            <div class="mt-40 md:mt-auto">
                <div>
                    <div class="grid grid-cols-1">
                        <label class="text-sm" for="username">اسم المستخدم</label>
                        <input type="text" v-model="user.username" name="username" id="username" class="w-full border p-2 rounded-md my-2 focus:border-blue-700 focus:outline-none focus:border-b-2 ">
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="text-sm" for="password">كلمة المرور</label>
                        <input type="password" v-model="user.password" name="password" id="password" class="w-full border p-2 rounded-md my-2 focus:border-blue-700 focus:outline-none focus:border-b-2 ">
                    </div>
                    <div>
                        <button @click.prevent.enter="login()" class="my-5 px-3 py-2 text-center rounded-md w-full text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 border-blue-500 shadow-md">دخول</button>
                    </div>
                    <div>
                        <p class="text-xs text-gray-800">تسجيل دخول مستخدم جديد  <span class="text-blue-600 hover:text-blue-400"><a href="/register">من هنا</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {inject, onMounted, reactive } from 'vue';
import {useUserStore} from '@/services/userStore';
import router from '@/router';

const axios = inject('axios');
const userStore = useUserStore();

const user = reactive({
    username: '',
    password: ''
})

onMounted(()=>{
    console.log(userStore.user);
    axios.get('/user/test').then(e=>{
        console.log(e);
    })
})

const login = async ()=>{
    await axios.post('/user/login',{username: user.username ,password: user.password}).then(e=>{
        if(e.data.success){
           userStore.login(e.data.docs);
           console.log(userStore.user);
           router.push('/')
       }
    })
}

</script>

<style lang="scss" scoped>

</style>