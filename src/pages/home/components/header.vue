<template>
    <div class="home-header">
        <div class="home-bars clearfix">
            <a class="title-bar">进销存管理系统</a>
            <div class="home-bars-right">
                <a class="nav-bar" :class="navShow ? 'active' : ''" @mouseover="navShow = true">快捷导航</a><el-tooltip effect="dark" content="系统设置" placement="bottom">
                <a class="cogs-bar" @mouseenter="navShow = false"></a></el-tooltip><el-tooltip effect="dark" content="用户详情" placement="bottom">
                <a class="user-bar" @mouseenter="navShow = false"></a></el-tooltip><el-tooltip effect="dark" content="退出" placement="bottom">
                <a class="sign-out-bar" @mouseenter="navShow = false"></a></el-tooltip>
            </div>
        </div>
        <transition name="el-fade-in">
            <home-nav
                v-show="navShow"
                @mouseleave="navShow = false"
            />
        </transition>
    </div>
</template>
<script>
import nav from './nav';

export default {
    name: 'home-header',
    components: {
        homeNav: nav
    },
    data() {
        return {
            navShow: false
        }
    }
}
</script>
<style lang="less">
.home-header {
    height: 50px;
    background-color: #1d75de;
    position: relative;
    .home-bars {
        display: block;
        padding-left: 30px;
        background: url("../images/home-bars.png") no-repeat;
        .home-bars-right {
            float: right;
            height: 50px;
            text-align: right;
            a:hover, a.active {
                background-color: #4fa5ff;
                border-left: 1px #1669cc solid;
            }
        }
        a {
            display: inline-block;
            vertical-align: top;
            width: 50px;
            height: 50px;
            line-height: 50px;
            background-repeat: no-repeat;
            background-position: center center;
            overflow: hidden;
            text-align: left;
            color: #fff;
            position: relative;
            font-size: 14px;
            &.title-bar {
                width: auto;
                font-size: 18px;
            }
            &.nav-bar {
                width: auto;
                padding: 0 12px 0 40px;
                background-image: url("../images/nav-bar.png");
                background-position: 9px center;
                &:after {
                    display: block;
                    border: 6px solid transparent;
                    border-color: transparent transparent #92c3f8 transparent;
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: -6px;
                }
            }
            &.cogs-bar {
                background-image: url("../images/cogs-bar.png");
            }
            &.user-bar {
                background-image: url("../images/user-bar.png");
            }
            &.sign-out-bar {
                background-image: url("../images/sign-out-bar.png");
            }
        }
    }
}
</style>
