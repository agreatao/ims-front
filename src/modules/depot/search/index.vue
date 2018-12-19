<template>
	<div class="depot-search-page">
		<bars
			@onToggleFilter="onToggleFilter"
		>
			<template slot="left">
				<a>新增</a>
				<a>删除</a>
			</template>
			<template slot="filter">
				<search-filter
					:formProps="{
						name: {
							label: '产品名称',
							type: 'input'
						},
						status: {
							label: '状态',
							type: 'select',
							initialValue: '1',
							filterable: true,
							options: [
								{
									label: '出库',
									value: '1'
								},
								{
									label: '入库',
									value: '0'
								}
							]
						},
						size: {
							label: '型号',
							type: 'input'
						}
					}"
					@onFilter="onFilter"
				/>
			</template>
		</bars>
		<table-data
			:filter-height="filterShow ? 66 : 0"
			:columns="[
				{
					prop: 'time',
					label: '时间'
				}
			]"
			:data="[]"
		/>
		<pagination
			:pageNo="1"
			:pageSize="20"
			:total="100"
			:pageSizeOptions="[10, 20, 30, 40]"
			@pageChange="pageChange"
		/>
	</div>
</template>
<script>
	import { mapState } from 'vuex';

	import searchFilter from 'components/filterForm';

	export default {
		name: "depotSearch",
		components: { searchFilter },
		computed: {
			...mapState({
				browser: state => state.browser
			})
		},
		data() {
			return {
				filterShow: false
			}
		},
		methods: {
			pageChange(pageNo, pageSize) {
				this.pageNo = pageNo;
				this.pageSize = pageSize;
				console.log(pageNo, pageSize);
			},
			onToggleFilter(filterShow) {
				this.filterShow = filterShow;
			},
			onFilter(value) {
				console.log(value);
			}
		}
	};
</script>
<style lang="less">
</style>