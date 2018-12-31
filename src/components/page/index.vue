<template>
    <div class="page">
        <div v-if="back != null && breadthumb != null && breadthumb.length > 0" class="page-header">
            <router-link :to="back">
                <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"></path></svg>
            </router-link>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item, index) in breadthumb" :key="index">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="page-body" :class="`page-${pageClass}`">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'page',
    props: {
        back: {
            type: String,
            default: null
        },
        breadthumb: {
            type: Array,
            default: null
        },
        pageClass: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="less">
.page {
    .page-header {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        a {
            margin-right: 10px;
            color: #333;
        }
        .el-breadcrumb {
            display: inline-block;
        }
    }
}
</style>
