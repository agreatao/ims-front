import bars from "./bars";
import pagination from './pagination';
import alert from './alert';

const component = {
    bind: Vue => {
        [
            bars,
            pagination
        ]
        .forEach((item, index) => {
            Vue.component(item.name, item);
        });
        Vue.prototype.$alert = alert;
    }
};

export default component;
