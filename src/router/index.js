import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router =  new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/', component: () => import('pages/master'),
            children: [
                { path: 'repo', component: () => import('modules/basic/repo')}
            ]
        }
    ]
});

export default router;