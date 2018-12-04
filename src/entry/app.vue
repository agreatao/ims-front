<template>
    <div id="app" :style="{width, height}">
        <router-view/>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "app",
    computed: {
        ...mapState({
            width: state => state.browser.width + 'px',
            height: state => state.browser.height + 'px'
        })
    }
};
</script>
<style lang="less">
</style>
