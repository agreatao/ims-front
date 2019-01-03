<template>
    <page page-class="purchase-add">
        <el-form
            inline
            :model="order"
            size="small">
            <el-form-item label="申请人">
                <el-input v-model="order.user"/>
            </el-form-item>
            <el-form-item label="供应商">
                <el-input v-model="order.suppier"/>
            </el-form-item>
        </el-form>
        <el-table
			:data="products">
			<el-table-column prop="name" label="产品名称" min-width="200">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.name" size="small"/>
                </template>
			</el-table-column>
			<el-table-column prop="spec" label="规格型号" min-width="300">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.spec" size="small"/>
                </template>
			</el-table-column>
			<el-table-column prop="brand" label="品牌" width="200">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.brand" size="small"/>
                </template>
			</el-table-column>
			<el-table-column prop="price" label="单价" width="200">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.price" size="small"/>
                </template>
            </el-table-column>
			<el-table-column prop="count" label="数量" width="200">
                <template slot-scope="scope">
                    <el-input v-model="scope.row.count" size="small"/>
                </template>
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template slot-scope="scope">
					<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
            <div slot="append">
                <el-button type="text" @click="addProduct">添加产品</el-button>
            </div>
		</el-table>
    </page>
</template>
<script>
export default {
    name: 'purchase-add',
    data() {
        return {
            order: {
                user: null,
                suppier: null
            },
            products: []
        }
    },
    methods: {
        addProduct() {
            this.products.push({
                name: null,
                spec: null,
                brand: null,
                price: null,
                count: null
            })
        }
    }
}
</script>
<style lang="less">
.page-purchase-add {
    background: #fff;
	border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 20px 10px;
}
</style>
