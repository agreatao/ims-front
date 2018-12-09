<template>
	<div class="bars-wrapper">
		<div class="bars">
			<div class="bars-left">
				<slot name="left"></slot>
			</div>
			<div class="bars-right">
				<slot name="right"></slot>
				<a v-if="$slots.filter" class="filter-btn" @click="toggleFilter">aa</a>
			</div>
		</div>
		<div v-if="$slots.filter && show" class="filter">
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
.bars {
	display: table;
	width: 100%;
	.bars-left {
		display: table-cell;
		vertical-align: top;
	}
	.bars-right {
		display: table-cell;
		vertical-align: top;
		text-align: right;
	}
}
</style>