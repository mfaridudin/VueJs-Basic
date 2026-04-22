import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/HelloWorld.vue';
import HandlingUserInput from '@/HandleuserInput.vue';
import AtributeBinding from '@/AttributeBindings.vue';
import ConditionalsAndLoops from '@/ConditionalsAndLoops.vue';
import FormBindings from '@/FormBindings.vue';
import SimpleComponents from '@/SimpleComponents.vue';
import MarkdownEditor from '@/MarkdownEditor.vue';
import FetchingData from '@/FetchingData.vue';
import GridWithSortAndFilter from '@/GridWithSortAndFilter.vue';
import TreeView from '@/TreeView.vue';
import ListWithTransitions from '@/ListWithTransitions .vue';
import Counter from '@/Counter.vue';
import TemperatureConverter from '@/TemperatureConverter.vue';
import FlightBooker from '@/FlightBooker.vue';
import Timer from '@/Timer.vue';
import Crud from '@/Crud.vue';
import CircleDrawer from '@/CircleDrawer.vue';
import ShowModal from '@/ShowModal.vue';
import SvgGraph from '@/SvgGrahp.vue';
import Cells from '@/Cells.vue';

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
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;