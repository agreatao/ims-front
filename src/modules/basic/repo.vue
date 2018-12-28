<template>
	<div class="repo-page">
		<bars>
			<template slot="left">
				<a>新增</a><a>删除</a>
			</template>
			<template slot="filter">
				<div class="filter">abc</div>
			</template>
		</bars>
		<el-table :data="data" @selection-change="handleSelectChange">
			<el-table-column type="selection" width="50"/>
			<el-table-column prop="name" label="仓库名称" width="200" />
			<el-table-column prop="address" label="地址" width="300" />
			<el-table-column prop="creator" label="创建人" width="100" />
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
					<el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
        <pagination
            :pageNo="1"
            :pageSize="20"
            :total="100"
			@pageChange="pageChange"
        />
	</div>
</template>
<script>
	export default {
		name: "repo",
		data() {
			return {
				data: Array.from({ length: 5}, (item, index) => ({
                    name: '仓库-' + (index + 1),
                    address: '文辉喽A楼B座' + (index + 1) + '室',
                    creator: 'admin'
                }))
			};
		},
		methods: {
			handleSelectChange(rows) {},
			handleDetail(row) {
				console.log(row);
			},
			handleDelete(row) {
				this.$alert.delete()
					.then(() => {

					})
					.catch(() => {

					})
			},
			pageChange(pageNo, pageSize) {
				console.log(pageNo, pageSize);
			}
		}
	};
</script>
<style lang="less">
</style>