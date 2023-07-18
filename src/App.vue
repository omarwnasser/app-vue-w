<script setup lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
const HeaderPage = defineAsyncComponent(()=> import('./components/HeaderBar.vue'));
const mainPage = defineAsyncComponent(()=> import('./components/MainPage.vue'));
const sidebar = defineAsyncComponent(()=> import('./components/Sidebars.vue'));
const footerBar = defineAsyncComponent(()=> import('./components/FooterBar.vue'));

</script>

<template>
  <div class="relative w-full h-screen bg-black" >
    <HeaderPage></HeaderPage>
    <div class="flex">
      <mainPage></mainPage>
      <sidebar></sidebar>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<style scoped>

</style>
