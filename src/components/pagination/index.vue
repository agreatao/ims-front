<template>
	<div class="pagination">
		<div class="pagination-left">
			<span class="total">共{{dataTotal}}条</span>
			<el-select
				:style="{width: '80px'}"
				size="mini"
				:value="dataPageSize"
				@change="pageSizeChange">
				<el-option v-for="(option, index) in pageSizeOptions" :key="index" :value="option">{{option}}</el-option>
			</el-select>
			<span>条 / 页</span>
		</div>
		<div class="pagination-right">
			<el-pagination
				class="page"
				layout="prev, pager, next"
				:total="dataTotal"
				:current-page="dataPageNo"
				:page-size="dataPageSize"
				@current-change="pageChange"
			/>
			<span>跳至</span>
			<el-input
				:value="jumpPageNo"
				@input="jumpChange"
				size="mini"
				:style="{width: '80px'}"
			/>
			<span>/ {{Math.ceil(dataTotal / dataPageSize)}} 页</span>
			<el-button @click="jumpTo" size="mini">跳转</el-button>
		</div>
	</div>
</template>
<script>
	export default {
		name: "pagination",
		props: {
			pageNo: {
				type: Number,
				default: 1
			},
			pageSize: {
				type: Number,
				default: 20
			},
			total: {
				type: Number,
				required: true
			},
			pageSizeOptions: {
				type: Array,
				default: () => [10, 20, 30, 40]
			}
		},
		data() {
			return {
				dataPageNo: this.pageNo,
				dataPageSize: this.pageSize,
				dataTotal: this.total,
				jumpPageNo: this.pageNo
			};
		},
		methods: {
			pageSizeChange(pageSize) {
				this.dataPageSize = pageSize;
				this.dataPageNo = Math.max(
					1,
					Math.min(this.dataPageNo, Math.ceil(this.dataTotal / pageSize))
				);
				this.jumpPageNo = this.dataPageNo;
				this.$emit("pageChange", this.dataPageNo, pageSize);
			},
			pageChange(pageNo) {
				this.dataPageNo = pageNo;
				this.jumpPageNo = pageNo;
				this.$emit("pageChange", pageNo, this.dataPageSize);
			},
			jumpChange(next) {
				this.jumpPageNo = next;
				if (next != null && next != "") {
					this.$nextTick(() => {
						if (isNaN(next)) {
							this.jumpPageNo = this.dataPageNo;
						} else {
							this.jumpPageNo = Math.max(
								1,
								Math.min(
									parseInt(next, 10),
									Math.ceil(this.dataTotal / this.dataPageSize)
								)
							);
						}
					});
				}
			},
			jumpTo() {
				this.dataPageNo = this.jumpPageNo;
				this.$emit("pageChange", this.dataPageNo, this.dataPageSize);
			}
		}
	};
</script>
<style lang="less">
.pagination {
	display: table;
	width: 100%;
	height: 48px;
	border-top: 1px solid #e5e5e5;
	padding: 0 14px;
	.pagination-left, .pagination-right {
		display: table-cell;
		vertical-align: middle;
		&>* {
			vertical-align: middle;
		}
		&>span {
			margin: 0 5px;
		}
		.page {
			display: inline-block;
		}
	}
	.pagination-right {
		text-align: right;
	}
}
</style>
