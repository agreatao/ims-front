<template>
    <div class="navigator">
        <ul>
            <li class="title">基础资料</li>
            <li v-if="navs != null" v-for="(nav, index) in navs.basic" :key="'basic' + index"><router-link :to="nav.to">{{nav.title}}</router-link></li>
            <li class="title">采购管理</li>
            <li v-if="navs != null" v-for="(nav, index) in navs.purchase" :key="'purchase-' + index"><router-link :to="nav.to">{{nav.title}}</router-link></li>
            <li class="title">库存管理</li>
            <li v-if="navs != null" v-for="(nav, index) in navs.depot" :key="'depot' + index"><router-link :to="nav.to">{{nav.title}}</router-link></li>
            <li class="title">销售管理</li>
            <li v-if="navs != null" v-for="(nav, index) in navs.sales" :key="'sales' + index"><router-link :to="nav.to">{{nav.title}}</router-link></li>
            <li class="title">系统管理</li>
            <li v-if="navs != null" v-for="(nav, index) in navs.system" :key="'system' + index"><router-link :to="nav.to">{{nav.title}}</router-link></li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import routes from 'config/routes';

export default {
    name: "navigator",
    data() {
        return {
            navs: routes
        }
    }
};
</script>
<style lang="less">
.navigator {
    height: 100%;
    overflow: auto;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 13px;
        li {
            display: block;
            &.title {
                font-size: 15px;
                height: 46px;
                line-height: 46px;
                padding-left: 20px;
                color: #909399;
                font-weight: normal;
            }
            & > a {
                display: block;
                height: 36px;
                line-height: 36px;
                color: #333;
                padding-left: 30px;
                margin-bottom: 2px;
                &:hover, &.active {
                    color: #409eff;
                    background-color: #ecf5ff;
                }
            }
        }

    }
}
</style>
