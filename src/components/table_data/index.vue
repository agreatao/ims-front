<template>
	<el-table :data="tableData" :height="height" style="width: 100%">
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
	export default {
		name: "tableData",
		props: ["tableData", "height", "columns", "width"],
		methods: {
			
		}
	};
</script>
