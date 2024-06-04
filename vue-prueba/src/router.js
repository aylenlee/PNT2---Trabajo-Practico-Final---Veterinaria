import { createRouter, createWebHistory } from 'vue-router';

import Home from './Home.vue';
import Turnos from './Turnos.vue';
import Adopcion from './Adopcion.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/turnos', component: Turnos },
    { path: '/adopcion', component: Adopcion },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;