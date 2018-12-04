<template>
	<el-container class="master-page">
		<el-header class="master-header">
			<router-link to="/welcome">
				<logo/>
			</router-link>
			<div class="user-profile">
				<router-link to="/welcome">
					<avatar name="admin"/>
				</router-link>
				<a>退出</a>
			</div>
		</el-header>
		<el-container class="master-body" :style="{height: (browser.height - 60) + 'px'}">
			<el-aside class="master-side" :style="{width: '246px'}">
				<navigator/>
			</el-aside>
			<el-main class="master-content">
				<el-breadcrumb class="master-breadcrumb">
					<template v-for="(item, index) in breadcrumb">
						<el-breadcrumb-item
							v-if="typeof item == 'string'"
							:key="index"
						>{{typeof item == 'string' ? item : item.name}}</el-breadcrumb-item>
						<el-breadcrumb-item v-else :key="index" :to="item.to">{{item.title}}</el-breadcrumb-item>
					</template>
				</el-breadcrumb>
				<div class="master-container" :style="{height: (browser.height - 96) + 'px'}">
					<div class="master-main">
						<router-view/>
					</div>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import { mapState } from "vuex";
	import navigator from "components/navigator";
	import logo from "components/logo";
	import avatar from "components/avatar";

	export default {
		name: "master",
		components: {
			navigator,
			logo,
			avatar
		},
		data() {
			return {};
		},
		computed: {
			...mapState({
				browser: state => state.browser,
				breadcrumb: state => state.routes.breadcrumb
			})
		},
		created() {},
		breforeUpdate() {}
	};
</script>
<style lang="less">
	.master-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1px #e6e6e6;
		background-color: #24292e;
	}
	.master-content {
		padding: 0;
		background-color: #fafafa;
		.master-breadcrumb {
			font-size: 12px;
			padding: 16px 8px 8px 8px;
		}
		.master-container {
			overflow: auto;
			border: 10px solid #fafafa;
			background-color: #fff;
		}
		.master-main {
			min-width: 1060px;
			min-height: 650px;
		}
	}
	.user-profile {
		display: inline-flex;
		align-items: center;
		a {
			display: inline-block;
			height: 24px;
			line-height: 24px;
			color: #fafafa;
		}
		a + a {
			margin-left: 10px;
		}
	}
</style>
