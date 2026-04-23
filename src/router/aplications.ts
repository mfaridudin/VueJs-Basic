import { createRouter, createWebHistory } from 'vue-router';

import Setup from '@/CompositionAPI/Setup.vue';

const routes = [
    // vue 3 setup
    {
        path: '/application/setup',
        name: 'setup',
        component: Setup
    }


];

const applicationRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default applicationRouter;