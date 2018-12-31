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
                { path: 'repo', component: () => import('modules/basic/repo')},
                { path: 'repo/:id', component: () => import("modules/basic/repo_detail")},
                { path: 'product', component: () => import("modules/basic/product")},
                
            ]
        }
    ]
});

export default router;