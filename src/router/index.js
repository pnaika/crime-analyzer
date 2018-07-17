import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue';
import DetailPage from './../components/DetailPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Crime List',
            component: HomePage
        },
        {
            path: '/:case_number',
            name: 'Detail Page',
            component: DetailPage
        }
    ]
})
