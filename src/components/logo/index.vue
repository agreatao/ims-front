<template>
    <span class="logo">
        <b class="logo-text">{{title}}</b>
    </span>
</template>
<script>
import config from 'config';

export default {
    name: 'logo',
    data() {
        return {
            title: config.title
        }
    }
}
</script>
<style lang="less">
.logo {
    .logo-text {
        font-size: 16px;
        color: #fafafa;
    }
}
</style>
