import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/HomeView.vue';
import Turnos from './views/TurnosView.vue';
import Adopcion from './views/AdopcionView.vue';
import AdminReport from './views/AdminReportView.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Logout from './components/Logout.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/turnos', name: 'Turnos', component: Turnos },
    { path: '/adopcion', name: 'Adopcion', component: Adopcion },
    { path: '/admin-report', name: 'AdminReport', component: AdminReport, meta: {requiresAdmin: true}},
    // {path: '/admin-report', name: 'AdminReport', component: () => import('.views.AdminReport.vue') es lo mismo creo
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/logout', name: 'Logout', component: Logout },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
const user = JSON.parse(localStorage.getItem('user')); //para obtener que el usuario esta loggeado y convertir el usuario en objeto
if(to.matched.some(record => record.meta.requiresAdmin)){
    if(user && user.role === 'admin'){
        next(); // para continuar navegacion
    } else {
        next('/login');
    }
} else {
    next();
}
});

export default router;