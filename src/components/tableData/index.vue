<template>
	<el-table
		:data="data"
		:height="Math.max(browser.height, 766) -  216 - (browser.width < 1326 ? 8 : 0) - filterHeight"
		style="width: 100%"
	>
		<el-table-column
			v-for="(col, index) in columns"
			:key="index"
			:prop="col.prop"
			:label="col.label"
			:width="col.width"
			:formatter="col.render"
		/>
	</el-table>
</template>
<script>
	import { mapState } from "vuex";
	export default {
		name: "tableData",
		props: {
			data: {
				type: Array,
				required: true
			},
			filterHeight: {
				type: Number,
				default: 0
			},
			columns: {
				type: Array,
				required: true
			}
		},
		computed: {
			...mapState({
				browser: state => state.browser
			})
		},
		methods: {}
	};
</script>
