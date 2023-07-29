<template>
    <div class="w-full h-screen bg-gray-200 flex justify-center items-center" dir="rtl">
        <div class="w-full h-screen md:w-80 md:h-auto bg-white rounded-md p-10">
            <h1 class="text-center my-10">صفحة تسجيل الدخول</h1>
            <div  class="mt-40 md:mt-auto">
                <div >
                    <div class="grid grid-cols-1">
                        <label class="text-sm" for="username">اسم المستخدم</label>
                        <input type="text" v-model="user.username" name="username" id="username" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="text-sm" for="password">كلمة المرور</label>
                        <input type="password" v-model="user.password" name="password" id="password" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="text-sm" for="password_confirmation">تأكيد كلمة المرور</label>
                        <input type="password" v-model="password_confirm" name="password_confirmation" id="password_confirmation" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                    </div>
                    <div>
                        <button @click="register()" class="my-5 px-3 py-2 text-center rounded-md w-full text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 border-blue-500 shadow-md">تسجيل</button>
                    </div>
                    <div>
                        <p class="text-xs text-gray-800">أملك حساب سابق <span class="text-blue-600 hover:text-blue-400"><a href="/login">من هنا</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/services/userStore";
import { inject, reactive, ref } from "vue";
import Swal from '@/services/sweetalert';

const axios = inject('axios');
const userStore = useUserStore();

const user = reactive({
    username: '',
    password: '',
});
const password_confirm = ref('');

const register = ()=>{
    if(user.password && user.password == password_confirm.value)
        axios.post('/user/register',user).then(e=>{
            if(e.data.success){
                Swal.success('تم التسجيل بنجاح')
                console.log(e.data);
            }else
                Swal.error(e.data.error.message)
        },error =>{
            Swal.error('حدث خطأ في عملية التسجيل')
            console.log(error)
        })
    else
        Swal.error('كلمتي المرور غير متطابقتين')
}

</script>

<style lang="scss" scoped>

</style>