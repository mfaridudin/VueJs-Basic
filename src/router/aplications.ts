import { createRouter, createWebHistory } from 'vue-router';

import Setup from '@/CompositionAPI/Setup.vue';
import ReactivityCore from '@/CompositionAPI/ReactivityCore.vue';
import ReactivityUtilities from '@/CompositionAPI/ReactivityUtilities.vue'
import ReactivityAdvanced from '@/CompositionAPI/ReactivityAdvanced.vue'
import LifecycleHooks from '@/CompositionAPI/LifecycleHooks.vue'
import DependencyInjection from '@/CompositionAPI/DependencyInjection.vue'
import Halpers from '@/CompositionAPI/Helpers.vue'
import OptionsState from '@/OptionsAPI/OptionsState.vue'
import OptionsRendering from '@/OptionsAPI/OptionsRendering.vue'
import OptionsLifecycle from '@/OptionsAPI/OptionsLifecycle.vue'

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
    {
        path: '/application/ReactivityAdvanced',
        name: 'ReactivityAdvanced',
        component: ReactivityAdvanced
    },
    {
        path: '/application/LifecycleHooks',
        name: 'LifecycleHooks',
        component: LifecycleHooks
    },
    {
        path: '/application/DependencyInjection',
        name: 'DependencyInjection',
        component: DependencyInjection
    },
    {
        path: '/application/Halpers',
        name: 'Halpers',
        component: Halpers
    },
    {
        path: '/application/OptionsState',
        name: 'OptionsState',
        component: OptionsState
    },
    {
        path: '/application/OptionsRendering',
        name: 'OptionsRendering',
        component: OptionsRendering
    },
    {
        path: '/application/OptionsLifecycle',
        name: 'OptionsLifecycle',
        component: OptionsLifecycle
    },

];

const applicationRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default applicationRouter;