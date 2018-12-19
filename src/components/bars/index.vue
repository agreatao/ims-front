<template>
	<div class="bars-wrapper">
		<div class="bars">
			<div class="bars-left">
				<slot name="left"></slot>
			</div>
			<div class="bars-right">
				<slot name="right"></slot>
				<a v-if="$slots.filter" class="filter-btn" :class="show ? 'active' : ''" @click="toggleFilter">
					fliter
				</a>
			</div>
		</div>
		<div v-if="$slots.filter && show" class="bars-filter">
			<slot name="filter"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: "bars",
		data() {
			return {
				show: false
			}
		},
		mounted() {
		},
		methods: {
			toggleFilter() {
				this.show = !this.show;
				this.$emit('onToggleFilter', this.show);
			}
		}
	};
</script>
<style lang="less">
.bars-wrapper {
	border-bottom: 1px solid #e5e5e5;
	user-select: none;
	.bars {
		display: table;
		width: 100%;
		height: 48px;
		padding: 0 14px;
		.bars-left, .bars-right {
			display: table-cell;
			vertical-align: middle;
			&>* {
				display: block;
				& + * {
					margin-left: 5px;
				}
			}
		}
		.bars-left {
			&>* {
				float: left;
			}
		}
		.bars-right {
			&>* {
				float: right;
			}
		}
		.filter-btn {
			width: 32px;
			height: 32px;
			line-height: 32px;
			border-radius: 2px;
			text-align: center;
			&.active {
				background-color: #eaeaea;
				color: #409eff;
			}
		}
	}
	.bars-filter {
		display: block;
		background: #f6f6f6;
		border-top: 1px solid #e5e5e5;
		padding: 18px 14px 0;
	}
}

</style>