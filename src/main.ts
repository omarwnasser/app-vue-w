import { createApp } from 'vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate';
import router from './router';
import App from './App.vue';
import './assets/main.css'

import axios from './services/Request';
import vueAxios from 'vue-axios';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate );

const app = createApp(App).use(pinia);
app.use(vueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(router);
app.mount('#app');
