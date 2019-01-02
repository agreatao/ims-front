<template>
    <div class="home-header">
        <div class="home-bars clearfix">
            <a class="title-bar">进销存管理系统</a>
            <div class="home-bars-right">
                <a class="nav-bar" :class="navShow ? 'active' : ''" @mouseover="navShow = true">快捷导航</a><el-tooltip effect="dark" content="系统设置" placement="bottom">
                    <a class="cogs-bar" @mouseenter="navShow = false"></a>
                </el-tooltip><el-tooltip effect="dark" content="用户详情" placement="bottom">
                    <a class="user-bar" @mouseenter="navShow = false"></a>
                </el-tooltip><el-tooltip effect="dark" content="退出" placement="bottom">
                    <a class="sign-out-bar" @mouseenter="navShow = false"></a>
                </el-tooltip>
            </div>
        </div>
        <transition name="el-fade-in">
            <div class="home-nav" v-if="navShow" @mouseleave="navShow = false">
                <ul>
                    <li>
                        <h4>基本信息管理</h4>
                        <ul class="home-nav-menu">
                            <li><router-link to="/repo">仓库管理</router-link></li>
                            <li><router-link to="/product">产品管理</router-link></li>
                        </ul>
                    </li><li>
                        <h4>库存管理</h4>
                        <ul class="home-nav-menu">
                            <li><router-link to="/depot/search">库存查询</router-link></li>
                            <li><router-link to="/depot/search">库存记录</router-link></li>
                        </ul>
                        <ul class="home-nav-menu">
                            <li><router-link to="/depot/search">产品入库</router-link></li>
                        </ul>
                    </li><li>
                        <h4>采购管理</h4>
                        <ul class="home-nav-menu">
                            <li><router-link to="/purchase">采购订单查询</router-link></li>
                        </ul>
                        <ul class="home-nav-menu">
                            <li><router-link to="/purchase/add">新增采购订单</router-link></li>
                        </ul>
                    </li><li>
                        <h4>销售管理</h4>
                        <ul class="home-nav-menu">
                            <li><router-link to="/sell">销售订单查询</router-link></li>
                        </ul>
                        <ul class="home-nav-menu">
                            <li><router-link to="/sell/add">新建销售订单</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'home-header',
    data() {
        return {
            navShow: false
        }
    }
}
</script>
<style lang="less">
@navHeight: 146px;
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
    .home-nav {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 999;
        background-color: #459df5;
        padding-top: 5px;
        & > ul {
            display: block;
            text-align: center;
            background: #114f8a;
            & > li {
                display: inline-block;
                vertical-align: top;
                width: 250px;
                padding: 30px 0 15px;
                height: @navHeight;
                h4 {
                    color: #d7ebff;
                    font-size: 16px;
                    font-weight: normal;
                    margin: 0 0 18px;
                }
                &:hover {
                    background-color: #184b82;
                    position: relative;
                    &:before {
                        display: block;
                        position: absolute;
                        top: -5px;
                        left: 0;
                        width: 100%;
                        height: 5px;
                        background-color: #003670;
                        content: "";
                    }
                }
                & + li {
                    border-left: 1px solid #2761a1;
                }
                .home-nav-menu {
                    display: inline-block;
                    vertical-align: top;
                    & > li {
                        margin-bottom: 15px;
                        width: 100px;
                        a {
                            text-align: left;
                            color: #a2c9f0;
                            &:hover {
                                color: #fff;
                                border-bottom: 1px solid #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
