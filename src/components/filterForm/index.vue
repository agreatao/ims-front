<template>
	<el-form :inline="true" :model="formInline" size="mini" class="filter-form">
		<el-form-item
			v-for="(prop, key) in formProps"
			:key="key"
			:label="prop.label">
			<el-input v-if="prop.type =='input'" v-model="formInline[key]"/>
			<el-select v-else-if="prop.type=='select'" :filterable="formProps[key].filterable" v-model="formInline[key]">
				<el-option
					v-for="(option, index) in prop.options"
					:key="index"
					:label="option.label"
					:value="option.value"
				/>
			</el-select>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">查询</el-button><el-button @click="onReset">重置</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		name: "filterForm",
		props: {
			formProps: {
				type: Object,
				required: true
			}
		},
		data() {
			let formInline = {};
			for (let key in this.formProps) {
				formInline[key] = this.formProps[key].initialValue || null;
			}
			console.log(formInline);
			return {
				formInline
			};
		},
		methods: {
			onSubmit() {
				let value = {};
				for(let prop in this.formInline) {
					value[prop] = this.formInline[prop];
				}
				this.$emit("onFilter", value);
			},
			onReset() {
				let value = {};
				for (let key in this.formProps) {
					this.formInline[key] = this.formProps[key].initialValue || null;
					value[key] = this.formProps[key].initialValue || null;
				}
				this.$emit("onFilter", value);
			}
		}
	};
</script>
<style lang="less">
.filter-form {
	display: flex;
	.el-form-item--mini {
		margin-right: 0;
		width: 25%;
		display: inline-flex;
		min-height: 1px;
	}
	.el-form-item__label {
		font-size: 12px;
		width: 72px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.el-form-item__content {
		vertical-align: middle;
		flex: 1;
		.el-select {
			width: 100%;
		}
	}
	.el-button {
		margin-left: 20px;
	}
}
</style>
