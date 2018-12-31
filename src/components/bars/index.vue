<template>
	<div class="bars-wrapper">
		<div class="bars">
			<div class="bars-left">
				<slot name="left"></slot>
			</div>
			<div class="bars-right">
				<slot name="right"></slot>
				<a v-if="$slots.filter" class="filter-btn" :class="show ? 'active' : ''" @click="toggleFilter">
					<svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M854.688 214.336 608.053 460.972l0 371.204c0 13.007-8.004 24.514-19.511 29.517-4.002 1.5-8.505 2.501-12.507 2.501-8.505 0-16.51-3.002-22.512-9.505l-128.071-128.07c-6.003-6.004-9.505-14.008-9.505-22.513L415.947 460.972 169.312 214.336c-9.505-9.005-12.007-23.012-7.004-35.019 5.002-11.506 16.509-19.511 29.516-19.511l640.352 0c13.007 0 24.514 8.004 29.517 19.511C866.694 191.324 864.193 205.332 854.688 214.336z"></path></svg>
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
	border-bottom: 1px solid #ebeef5;
	user-select: none;
	margin-bottom: 10px;
	.bars {
		display: block;
		padding: 4px 14px;
		&:after {
			clear: both;
			content: "";
			display: block;
		}
		.bars-left, .bars-right {
			display: block;
			&>* {
				display: block;
				float: left;
				min-width: 32px;
				height: 32px;
				line-height: 32px;
			}
			&>a {
				color: #333;
			}
		}
		.bars-left {
			float: left;
		}
		.bars-right {
			float: right;
		}
		.filter-btn {
			width: 32px;
			border-radius: 2px;
			text-align: center;
			font-size: 22px;
			padding: 5px;
			color: #555;
			svg {
				display: block;
			}
			&.active {
				background-color: #fafafa;
				color: #409eff;
			}
		}
	}
	.bars-filter {
		display: block;
		background: #fafafa;
		border-top: 1px solid #ebeef5;
		padding: 10px 20px;
		.el-form {
			.el-form-item {
				margin-bottom: 0;
			}
		}
	}
}

</style>