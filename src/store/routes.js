export default {
    state: {
        breadcrumb: null,
        navs: null
    },
    mutations: {
        setBreadcrumb(state, payload) {
            state.breadcrumb = payload;
        },
        setNavigator(state, payload) {
            state.navs = payload;
        }
    },
    actions: {
        setBreadcrumb({ commit }, payload) {
            commit("setBreadcrumb", payload);
        },
        setNavigator({ commit }, payload) {
            commit("setNavigator", payload);
        }
    },
    getters: {}
};
