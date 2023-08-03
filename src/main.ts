import { createApp } from 'vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate';
import router from './router';
import App from './App.vue';
import './assets/main.css'

import axios from './services/Request';
import vueAxios from 'vue-axios';

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(vueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(pinia);
app.use(router);
app.mount('#app');
