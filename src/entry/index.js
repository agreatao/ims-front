import 'theme/index.less';

import Vue from 'vue';

import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload);

import ElementUI from 'element-ui';
Vue.use(ElementUI);

import router from 'router';
import store from 'store';
import 'lib/browser';

import http from 'lib/http';
http.bind(Vue);

import app from './app';

new Vue({
    el: '#app',
    router,
    store,
    components: { app },
    template: '<app />'
})