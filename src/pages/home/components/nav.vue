<template>
    <div class="home-nav" @mouseleave="$emit('mouseleave')">
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
                </ul>
                <ul class="home-nav-menu">
                    <li><router-link to="/depot/add">产品入库</router-link></li>
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
</template>
<script>
export default {
    name: 'home-nav'
}
</script>
<style lang="less">
@navHeight: 146px;
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
</style>

