<template>
    <div>
        <div class="relative w-full h-screen bg-black" >
            <HeaderPage></HeaderPage>
            <div class="flex">
              <mainPage></mainPage>
              <sidebar></sidebar>
            </div>
            <footerBar></footerBar>
          </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, defineComponent, onMounted } from 'vue';
import HeaderPage from '@/components/HeaderBar.vue';
import mainPage from '@/components/MainPage.vue';
import sidebar from '@/components/Sidebars.vue';
import footerBar from '@/components/FooterBar.vue';
import {useUserStore} from '@/services/userStore';
import router from '@/router';

onMounted(()=>{
  if(!useUserStore().user._id){
    router.push('/login')
  }
})

</script>

<style scoped>

</style>