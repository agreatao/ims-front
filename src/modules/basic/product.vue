<template>
    <page page-class="product">
        <bars>
			<template slot="left">
				<router-link to="/product/add">新增</router-link><a @click="handleDelete()">删除</a>
			</template>
			<template slot="filter">
				<el-form
					inline
					:model="filter"
					size="small">
					<el-form-item label="产品名称">
						<el-input v-model="filter.name"/>
					</el-form-item>
					<el-form-item label="规格型号">
						<el-input v-model="filter.address"/>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleFilterSubmit">查询</el-button>
						<el-button @click="handleFilterReset">重置</el-button>
					</el-form-item>
				</el-form>
			</template>
		</bars>
		<el-table
			:data="data"
			@selection-change="handleSelectChange">
			<el-table-column type="selection" width="50"/>
			<el-table-column prop="name" label="产品名称" min-width="200" />
			<el-table-column prop="address" label="规格型号" min-width="300" />
			<el-table-column prop="creator" label="创建人" width="200" />
			<el-table-column label="操作" width="200">
				<template slot-scope="scope">
					<el-button @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
					<el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
					<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
        <pagination
            :pageNo="pageNo"
            :pageSize="pageSize"
            :total="total"
			@pageChange="pageChange"
        />
    </page>
</template>
<script>
export default {
    name: 'product',
    data() {
        return {
            filter: {},

            pageNo: 1,
            pageSize: 20,
            total: 0,
            data: []
        }
    },
    methods: {
        handleFilterSubmit() {

        },
        handleFilterReset() {

        },
        pageChange() {

        },
        handleAdd() {

        },
        handleDelete() {

        },
        handleSelectChange() {

        },
        handleDetail(row) {

        },
        handleEdit(row) {

        },
        handleDelete(row) {

        }
    }
}
</script>
<style lang="less">
.page-product {
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
