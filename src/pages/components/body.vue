<template>
    <div class="home-body">
        <div class="body-container" :style="{height: (height - 55 - (width < 1360 ? 10 : 0)) + 'px'}">
            <router-view/>
        </div>
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

</style>
