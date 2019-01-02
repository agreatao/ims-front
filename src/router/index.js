import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router =  new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/', component: () => import('pages/home'),
            children: [
                { path: 'repo', component: () => import('modules/basic/repo')},
                { path: 'repo/:id', component: () => import("modules/basic/repo_detail")},
                { path: 'product', component: () => import("modules/basic/product")},
                { path: 'product/add', component: () => import("modules/basic/product_add_or_edit")},
                

                { path: 'depot/search', component: () => import("modules/depot/search")},
            ]
        }
    ]
});

export default router;