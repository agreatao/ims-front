import bars from "./bars";
import tableData from "./tableData";
import pagination from "./pagination";

import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

const component = {
    bind: Vue => {
        [
            bars,
            tableData,
            pagination,
            FontAwesomeIcon
        ]
        .forEach((item, index) => {
            Vue.component(item.name, item);
        });
    }
};

export default component;
