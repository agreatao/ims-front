<template>
	<div class="master-overflow">
		<div class="master">
			<div class="master-header">
				<div class="master-title">
					进销存管理系统
				</div>
				<div class="nav">
					<a class="nav-bar">快捷导航</a>
					<ul class="nav-menu">
						<li>
							<ul class="nav-item">
								<li><router-link to="/repo">仓库管理</router-link></li>
								<li><router-link to="/product">产品管理</router-link></li>
							</ul>
						</li><li>
							<ul class="nav-item">
								<li><router-link to="/depot/search">库存查询</router-link></li>
							</ul>
						</li><li>
							<ul class="nav-item">
								<!-- <li><router-link to="/repo">仓库管理</router-link></li> -->
							</ul>
						</li><li>
							<ul class="nav-item">
								<!-- <li><router-link to="/repo">仓库管理</router-link></li> -->
							</ul>
						</li>
					</ul>
				</div>
				<a class="cogs" title="系统设置"></a>
				<a class="user" title="用户详情"></a>
				<a class="sign-out" title="退出"></a>
			</div>
			<div class="master-body">
				<div class="body-container" :style="{height: (height - 55 - (width < 1360 ? 10 : 0)) + 'px'}">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from "vuex";
	export default {
		name: "master",
		components: {
			navigator
		},
		computed: {
			...mapState({
				width: state => state.browser.width,
				height: state => state.browser.height
			})
		}
	};
</script>
<style lang="less">
.master-overflow {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	overflow-x: auto;
	overflow-y: hidden;
	.master {
		display: block;
		min-width: 1360px;
		.master-header {
			height: 55px;
			background: #459df5;
			position: relative;
			// border-bottom: 1px solid #fafafa;
			text-align: right;
			padding: 0 20px;
			.master-title {
				position: absolute;
				top: 0;
				left: 20px;
				height: 55px;
				line-height: 55px;
				color: #fff;
				font-size: 18px;
			}
			& > a, .nav > .nav-bar {
				display: inline-block;
				vertical-align: top;
				width: 55px;
				height: 55px;
				line-height: 55px;
				color: #fff;
				font-size: 16px;
				text-align: left;
				background-repeat: no-repeat;
				background-position: center center;
				&:hover {
					background-color: rgba(100, 100, 100, .2);
				}
			}
			.cogs {
				background-image: url("~images/cogs.png");
			}
			.user {
				background-image: url("~images/user.png");
			}
			.sign-out {
				background-image: url("~images/sign-out.png");
			}
			.nav {
				display: inline-block;
				&:hover {
					.nav-menu {
						visibility: visible;
						opacity: 1;
						// height: 140px;
					}
					.nav-bar {
						background-color: rgba(100, 100, 100, .2);
					}
				}
				.nav-bar {
					width: 115px;
					padding-left: 40px;
					background-image: url("~images/nav-bar.png");
					background-position: 10px center;
					position: relative;
					overflow: hidden;
					&:after {
						display: block;
						border: 10px solid transparent;
						border-color: transparent transparent #fff transparent;
						content: "";
						position: absolute;
						bottom: 0;
						right: -10px;
					}
				}
				.nav-menu {
					position: absolute;
					left: 0;
					top: 55px;
					background: rgba(36,97,158,0.9);
					width: 100%;
					text-align: center;
					z-index: 99;
					opacity: 0;
					visibility: hidden;
					transition: all .3s ease-in;
					// height: 0;
					& > li {
						display: inline-block;
						vertical-align: top;
						width: 200px;
						height: 100%;
						&:hover {
							background-color: rgba(100, 100, 100, .2);
						}
					}
				}
				.nav-item {
					padding: 20px 0;
					& > li {
						display: block;
						height: 30px;
						line-height: 30px;
						&:last-child {
							margin-bottom: 0;
						}
						label {
							color: #777;
						}
						a {
							display: block;
							color: #fff;
							font-size: 14px;
							&:hover {
								color: #00C1DE;
							}
						}
					}
				}
			}
		}
	}

	.body-container {
		padding: 10px;
	}
}
</style>
