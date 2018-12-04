import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import browser from "./browser";
import routes from './routes';

export default new Vuex.Store({
    modules: { browser, routes }
});
