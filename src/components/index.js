import bars from "./bars";
import tableData from "./tableData";
import pagination from "./pagination";

const component = {
    bind: Vue => {
        [
            bars,
            tableData,
            pagination
        ]
        .forEach((item, index) => {
            Vue.component(item.name, item);
        });
    }
};

export default component;
