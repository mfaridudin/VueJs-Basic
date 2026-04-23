import { createRouter, createWebHistory } from 'vue-router';

import Setup from '@/CompositionAPI/Setup.vue';
import ReactivityCore from '@/CompositionAPI/ReactivityCore.vue';
import ReactivityUtilities from '@/CompositionAPI/ReactivityUtilities.vue'

const routes = [
    // vue 3 setup
    {
        path: '/application/setup',
        name: 'setup',
        component: Setup
    },
    {
        path: '/application/ReactivityCore',
        name: 'ReactivityCore',
        component: ReactivityCore
    },
    {
        path: '/application/ReactivityUtilities',
        name: 'ReactivityUtilities',
        component: ReactivityUtilities
    },


];

const applicationRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default applicationRouter;