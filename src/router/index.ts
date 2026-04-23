import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/Basic/HelloWorld.vue';
import HandlingUserInput from '@/Basic/HandleuserInput.vue';
import AtributeBinding from '@/Basic/AttributeBindings.vue';
import ConditionalsAndLoops from '@/Basic/ConditionalsAndLoops.vue';
import FormBindings from '@/Basic/FormBindings.vue';
import SimpleComponents from '@/Basic/SimpleComponents.vue';
import MarkdownEditor from '@/Practical/MarkdownEditor.vue';
import FetchingData from '@/Practical/FetchingData.vue';
import GridWithSortAndFilter from '@/Practical/GridWithSortAndFilter.vue';
import TreeView from '@/Practical/TreeView.vue';
import ListWithTransitions from '@/Practical/ListWithTransitions .vue';
import Counter from '@/7GUIs/Counter.vue';
import TemperatureConverter from '@/7GUIs/TemperatureConverter.vue';
import FlightBooker from '@/7GUIs/FlightBooker.vue';
import Timer from '@/7GUIs/Timer.vue';
import Crud from '@/7GUIs/Crud.vue';
import CircleDrawer from '@/7GUIs/CircleDrawer.vue';
import ShowModal from '@/Practical/ShowModal.vue';
import SvgGraph from '@/Practical/SvgGrahp.vue';
import Cells from '@/7GUIs/Cells.vue';

// vue 3 setup
import Setup from '@/CompositionAPI/Setup.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/handling-user-input',
        name: 'handling-user-input',
        component: HandlingUserInput
    },
    {
        path: '/attribute-bindings',
        name: 'atribute-binding',
        component: AtributeBinding
    },
    {
        path: '/conditionals-and-loops',
        name: 'conditionals-and-loops',
        component: ConditionalsAndLoops
    },
    {
        path: '/form-bindings',
        name: 'form-bindings',
        component: FormBindings
    },
    {
        path: '/simple-components',
        name: 'simple-components',
        component: SimpleComponents
    },
    {
        path: '/markdown-editor',
        name: 'markdown-editor',
        component: MarkdownEditor
    },
    {
        path: '/fetching-data',
        name: 'fetching-data',
        component: FetchingData
    },
    {
        path: '/grid-with-sort-and-filter',
        name: 'grid-with-sort-and-filter',
        component: GridWithSortAndFilter
    },
    {
        path: '/show-modal',
        name: 'show-modal',
        component: ShowModal
    },
    {
        path: '/svg-graph',
        name: 'svg-graph',
        component: SvgGraph
    },
    {
        path: '/tree-view',
        name: 'tree-view',
        component: TreeView
    },
    {
        path: '/list-with-transitions',
        name: 'list-with-transitions',
        component: ListWithTransitions
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    },
    {
        path: '/temperature-converter',
        name: 'temperature-converter',
        component: TemperatureConverter
    },
    {
        path: '/flight-booker',
        name: 'flight-booker',
        component: FlightBooker
    },
    {
        path: '/timer',
        name: 'timer',
        component: Timer
    },
    {
        path: '/crud',
        name: 'crud',
        component: Crud
    },
    {
        path: '/circle-drawer',
        name: 'circle-drawer',
        component: CircleDrawer
    },
    {
        path: '/cells',
        name: 'cells',
        component: Cells
    },


    // vue 3 setup
    {
        path: '/application/setup',
        name: 'setup',
        component: Setup
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;