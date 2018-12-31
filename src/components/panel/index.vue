<template>
    <div class="panel">
        <div class="panel-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="panel-body">    
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'panel'
}
</script>
<style lang="less">
.panel {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .panel-header {
        border-bottom: 1px solid #ebeef5;
        box-sizing: border-box;
        padding: 8px 16px;
        background-color: #fafafa;
    }
    .panel-body {
        padding: 16px;
        background: #fff;
    }
    & + .panel {
        margin-top: 10px;
    }
}
</style>
