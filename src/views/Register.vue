<template>
    <div class="w-full h-screen bg-gray-200 flex justify-center items-center" dir="rtl">
        <div class="w-full h-screen md:w-80 md:h-auto bg-white rounded-md p-4">
            <h1 class="text-center my-10">صفحة تسجيل الدخول</h1>
            <div>
                <div class="grid grid-cols-1">
                    <label class="text-sm" for="username">اسم المستخدم</label>
                    <input type="text" name="username" id="username" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                </div>
                <div class="grid grid-cols-1">
                    <label class="text-sm" for="password">كلمة المرور</label>
                    <input type="text" name="password" id="password" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                </div>
                <div class="grid grid-cols-1">
                    <label class="text-sm" for="password_confirmation">تأكيد كلمة المرور</label>
                    <input type="text" name="password_confirmation" id="password_confirmation" class="w-full border p-2 rounded-md my-2 focus:border-green-700 focus:outline-none focus:border-b-2">
                </div>
                <div>
                    <button class="my-5 px-3 py-2 text-center rounded-md w-full text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-2 border-blue-500 shadow-md">تسجيل</button>
                </div>
                <div>
                    <p class="text-xs text-gray-800">أملك حساب سابق <span class="text-blue-600 hover:text-blue-400"><a href="/login">من هنا</a></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>