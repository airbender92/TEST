import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Connection from '../views/Connection.vue';
import Dash from '../views/Dash.vue';

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
        
    },
    {
        path: '/dash',
        name: 'Dash',
        component: Dash,
        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;