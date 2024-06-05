import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import './assets/css/bootstrap.min.css';
import './assets/js/bootstrap.bundle.min';


createApp(App).use(router).mount('#app')
