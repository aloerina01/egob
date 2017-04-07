import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index';

const routes = [
    { path: Index.PATH, component: Index }
];

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
});

export default router;