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
import OptionsComposition from '@/OptionsAPI/OptionsComposition.vue'
import OptionsMisc from '@/OptionsAPI/OptionsMisc.vue'
import ComponentInstance from '@/OptionsAPI/ComponentInstance.vue'
import Directives from '@/Built-ins/Directives.vue'
import Components from '@/Built-ins/Components.vue'
import SpecialElements from '@/Built-ins/SpecialElements.vue'
import SpecialAttributes from '@/Built-ins/SpecialAttributes.vue'
import SyntaxSpecification from '@/SingleFileComponent/SyntaxSpecification.vue'
import ScriptSetup from '@/SingleFileComponent/ScriptSetup.vue'
import CSSFeatures from '@/SingleFileComponent/CSSFeatures.vue'
import RenderFunction from '@/AdvancedAPIs/RenderFunction.vue'

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
    {
        path: '/application/OptionsComposition',
        name: 'OptionsComposition',
        component: OptionsComposition
    },
    {
        path: '/application/OptionsMisc',
        name: 'OptionsMisc',
        component: OptionsMisc
    },
    {
        path: '/application/ComponentInstance',
        name: 'ComponentInstance',
        component: ComponentInstance
    },
    {
        path: '/application/Directives',
        name: 'Directives',
        component: Directives
    },
    {
        path: '/application/Components',
        name: 'Components',
        component: Components
    },
    {
        path: '/application/SpecialElements',
        name: 'SpecialElements',
        component: SpecialElements
    },
    {
        path: '/application/SpecialAttributes',
        name: 'SpecialAttributes',
        component: SpecialAttributes
    },
    {
        path: '/application/SyntaxSpecification',
        name: 'SyntaxSpecification',
        component: SyntaxSpecification
    },
    {
        path: '/application/ScriptSetup',
        name: 'ScriptSetup',
        component: ScriptSetup
    },
    {
        path: '/application/CSSFeatures',
        name: 'CSSFeatures',
        component: CSSFeatures
    },
    {
        path: '/application/RenderFunction',
        name: 'RenderFunction',
        component: RenderFunction
    },

];

const applicationRouter = createRouter({
    history: createWebHistory(),
    routes
});

export default applicationRouter;