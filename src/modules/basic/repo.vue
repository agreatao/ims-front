<template>
	<page page-class="repo">
		<bars>
			<template slot="left">
				<a @click="handleAdd">新增</a><a @click="handleDelete()">删除</a>
			</template>
			<template slot="filter">
				<el-form
					inline
					:model="filter"
					size="small">
					<el-form-item label="仓库名称">
						<el-input v-model="filter.name"/>
					</el-form-item>
					<el-form-item label="地址">
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
			<el-table-column prop="name" label="仓库名称" min-width="200" />
			<el-table-column prop="address" label="地址" min-width="300" />
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
		<el-dialog
			:close-on-click-modal="false"
			width="550px"
			:title="form && form.id != null ? '编辑仓库' : '新增仓库'"
			:visible.sync="visible">
			<el-form
				ref="repoForm"
				label-width="80px"
				size="small"
				:model="form">
				<el-form-item
					label="仓库名称"
					prop="name"
					required
					:rules="[
						{ required: true, message: '请输入仓库名称', trigger: 'blur' }
					]">
					<el-input v-model="form.name" />
				</el-form-item>
				<el-form-item
					label="地址"
					prop="address">
					<el-input v-model="form.address" />
				</el-form-item>
				<el-form-item 
					label="描述"
					prop="description">
					<el-input type="textarea" v-model="form.description" resize="none" :autosize="{minRows: 2, maxRows: 4}" />
				</el-form-item>
			</el-form>
			<div slot="footer">
				<el-button size="small" type="primary" @click="handleSubmit">确 定</el-button>
				<el-button size="small" @click="visible = false">取 消</el-button>
			</div>
		</el-dialog>
	</page>
</template>
<script>
	export default {
		name: "repo",
		data() {
			return {
				filter: {
					name: undefined,
					address: undefined
				}, // filter default value
				form: {
					name: null,
					address: null,
					description: null
				}, // add or edit default value
				visible: false, // 新增 or 编辑 dialog visible

				pageNo: 1,
				pageSize: 20,
				
				total: 100,
				data: Array.from({ length: 5}, (item, index) => ({
					id: index,
                    name: '仓库-' + (index + 1),
                    address: '文辉喽A楼B座' + (index + 1) + '室',
					creator: 'admin',
					description: null
				})),
				selected: null
			};
		},
		created() {
			const { query } = this.$route;
			if(query) {
				this.pageNo = parseInt(query.pageNo, 10) || 1;
				this.pageSize = parseInt(query.pageSize, 10) || 20;
				this.filter.name = query.name;
				this.filter.address = query.address;
			}
			this.onloadData();
		},
		methods: {
			onloadData() {
				let { pageNo, pageSize, filter } = this;
				pageNo = Math.min(Math.ceil(this.total / pageSize), pageNo);
				this.$router.push({
					path: '/repo',
					query: { pageNo, pageSize, ...filter }
				});
			},
			handleFilterSubmit() {
				this.onloadData();
			},
			handleFilterReset() {
				this.filter = {name: undefined, address: undefined};
				this.onloadData();
			},
			pageChange(pageNo, pageSize) {
				this.pageNo = pageNo;
				this.pageSize = pageSize;
				this.onloadData();
			},
			handleDetail(row) {
				this.$router.push("/repo/" + row.id);
			},			
			handleSelectChange(rows) {
				this.selected = rows;
			},
			handleDelete(row) {
				let rows = this.selected;
				if(row) rows = [row];
				if(rows && rows.length > 0) {
					this.$alert.delete()
						.then(() => {

						})
						.catch(() => {

						})
				} else {
					this.$alert.error("请选择要删除的仓库");
				}
			},
			handleAdd() {
				this.visible = true;
				this.$nextTick(() => {
					this.form = {};
					this.$refs.repoForm.resetFields();
				})
			},
			handleEdit(row) {
				this.visible = true;
				this.$nextTick(() => {
					this.form = {...row};
					this.$refs.repoForm.resetFields();
				})
			},
			handleSubmit() {
				this.$refs.repoForm.validateField(['name'], () => {

				});
			},
			
		}
	};
</script>
<style lang="less">
.page-repo {
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>