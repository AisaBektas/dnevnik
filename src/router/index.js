import Vue from 'vue';
import Router from 'vue-router';

import UcenikPage from '../pages/UcenikPage.vue';
import AdminPage from '../pages/AdminPage';
import ListaUcenikaPage from '../pages/ListaUcenikaPage';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: ListaUcenikaPage 
    },
    {
        path: '/ucenik',
        component: UcenikPage 
    },
    {
        path: '/admin',
        component: AdminPage
    }
]
})