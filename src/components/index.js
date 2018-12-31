import bars from "./bars";
import pagination from './pagination';
import alert from './alert';
import page from './page';
import panel from './panel';

const component = {
    bind: Vue => {
        [
            bars,
            pagination,
            page,
            panel
        ]
        .forEach((item, index) => {
            Vue.component(item.name, item);
        });
        Vue.prototype.$alert = alert;
    }
};

export default component;
