<template>
	<div class="depot-search-page">
		<bars>
			<template slot="left">
				<a>新增</a>
				<a>删除</a>
			</template>
			<template slot="right">
				<a>dadda</a>
			</template>
			<template slot="filter">
				<div>aaa</div>
			</template>
		</bars>
		<pagination />
	</div>
</template>
<script>
	import { mapState } from 'vuex';

	import bars from "components/bars";
	import pagination from "components/pagination";

	export default {
		name: "depotSearch",
		components: {
			bars, pagination
		},
		data() {
			return {
				
			}
		},
		created() {
			
		},
		computed: {
			...mapState({
				browser: state => state.browser
			})
		},
		methods: {
			
		}
	};
</script>
<style lang="less">
</style>