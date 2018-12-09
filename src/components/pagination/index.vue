<template>
	<div class="pagination">
		<div class="pagination-left">
			<span class="total">共 {{total}} 条</span>
		</div>
		<div class="pagination-right">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="pNo"
				:page-size="pSize"
				layout="prev, pager, next"
				:total="tot"
			/>
		</div>
	</div>
</template>
<script>
	export default {
		name: "pagination",
		props: ["pageNo", "pageSize", "total"],
		methods: {
			handleSizeChange(pageSize) {
				this.pSize = pageSize;
				this.pNo = Math.min(Math.ceil(this.tot / this.pSize), this.pNo);
				this.$emit("onPage", this.pNo, pageSize);
			},
			handleCurrentChange(pageNo) {
				this.pNo = pageNo;
				this.$emit("onPage", pageNo, this.pSize);
			}
		}
	};
</script>
<style lang="less">
.pagination {
}
</style>
