import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import store from 'store';

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
                { path: 'depot_new', component: () => import('modules/depot/newOrEdit') }, //新增库存
                { path: 'depot_edit/:id', component: () => import('modules/depot/newOrEdit')}, // 编辑库存
                // { path: 'purchase', component: () => import('modules/purchase') }, // 采购
                // { path: 'sales', component: () => import('modules/sales') }, // 销售
                // { path: 'system', component: () => import('modules/system') } // 系统
            ]
        }
    ]
});

let crumbs = {
    '/welcome': ['欢迎你'],
    '/company': ["基础资料", "公司信息"],
    '/employee': ["基础资料", "公司信息"],
    '/depot_search': ["库存管理", "库存查询"],
    '/depot_new': ["库存管理", "库存查询", '新增库存'],
    '/depot_edit': ["库存管理", "库存查询", '编辑库存'],
};

router.beforeEach((to, from, next) => {
    let crumb = [];
    for(let path in crumbs) {
        if(to.fullPath.indexOf(path) > -1) {
            crumb = crumbs[path];
        }
    }
    store.dispatch('setBreadcrumb', crumb);
    next();
})

export default router;