import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Connection from '../views/Connection.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/connection',
        name: 'Connection',
        component: Connection,
        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;