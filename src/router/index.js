import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import store from 'store';
import routes from 'config/routes';

const router =  new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/welcome' }, // 默认跳转页
        {
            path: '/', component: () => import('pages/master'),
            children: [
                { path: 'welcome', component: () => import('pages/welcome') }, // 欢迎页
                { path: 'company', component: () => import('modules/basic/company') }, // 公司信息
                { path: 'employee', component: () => import('modules/basic/employee') }, // 员工信息
                { path: 'depot_search', component: () => import('modules/depot/search') }, // 库存查询
                // { path: 'purchase', component: () => import('modules/purchase') }, // 采购
                // { path: 'sales', component: () => import('modules/sales') }, // 销售
                // { path: 'system', component: () => import('modules/system') } // 系统
            ]
        }
    ]
});

let crumbs = {
    '/welcome': ['欢迎你']
};

for(let mod in routes) {
    routes[mod].forEach(({to, crumb}, index) => {
        crumbs[to] = crumb;
    })
}

router.beforeEach((to, from, next) => {
    store.dispatch('setBreadcrumb', crumbs[to.fullPath]);
    next();
})

export default router;