<template>
    <div class="home-body" :style="{height: (height - 50 - (width < 1360 ? 9 : 0)) + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
	import { mapState } from "vuex";
    export default {
        name: 'home-body',
        computed: {
            ...mapState({
                width: state => state.browser.width,
                height: state => state.browser.height
            })
        }
    }
</script>
<style lang="less">
.home-body {
    padding: 10px;
    overflow: hidden;
}
</style>
