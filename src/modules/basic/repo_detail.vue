<template>
	<page
        page-class="repo-detail"
        back="/repo"
        :breadthumb="[{label: '首页'}, {label: '库存列表'}, {label: '库存详情'}]">
		<panel>
            <div slot="header">
                <span>仓库详情</span>
                <el-button size="mini">编辑</el-button>
            </div>
            <div class="repo-detail">
                <div class="repo-image">
                    <div class="repo-folder">
                        <svg viewBox="0 0 1024 1024" width="80" height="80"><path d="M810.665 269.333v-24.889c0-27.467-22.288-49.777-49.777-49.777H437.333v-24.89c0-27.467-22.288-49.777-49.779-49.777H263.11c-27.489 0-49.777 22.31-49.777 49.777v99.556h597.332z" fill="#2577FF"></path><path d="M885.332 269.333H399.999V232c0-41.203-33.431-74.667-74.667-74.667H138.667C97.431 157.333 64 190.798 64 232v597.333C64 870.6 97.431 904 138.667 904h746.665c41.235 0 74.666-33.4 74.666-74.667V344c0-41.202-33.431-74.667-74.666-74.667z" fill="#FCB814"></path><path d="M344 209.224v60.109h55.528c10.588-82.956-28.514-102.28-62.733-110.843A181.619 181.619 0 0 1 344 209.224zM896.794 270.491C901.296 280.096 904 290.7 904 302v485.334C904 828.6 870.566 862 829.332 862H82.665c-3.93 0-7.71-0.571-11.477-1.156C83.092 886.282 108.73 904 138.665 904h746.667C926.566 904 960 870.6 960 829.333V344c0-37.278-27.454-67.953-63.206-73.509z"></path></svg>
                    </div>
                </div>
                <div class="repo-info">
                    <div class="repo-item">
                        <div class="repo-col">
                            <label>仓库名称：</label><span>{{'你是仓库'}}</span>
                        </div>
                        <div class="repo-col">
                            <label>创建人：</label><span>{{'admin'}}</span>
                        </div>
                    </div>
                    <div class="repo-item">
                        <label>地址：</label><span>{{'你是仓库你是仓库你是仓库你是仓库你是仓库'}}</span>
                    </div>
                    <div class="repo-item">
                        <label>描述：</label><span>{{'你是仓库'}}</span>
                    </div>
                </div>
            </div>
		</panel>
        <panel>
            <div slot="header">
                <span class="box-title">产品详情</span>
            </div>
            <el-table
                :data="data">
                <el-table-column prop="name" label="产品名称" min-width="200" />
                <el-table-column prop="address" label="类型" min-width="300" />
                <el-table-column prop="spec" label="规格型号" min-width="300" />
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
        </panel>
	</page>
</template>
<script>
	export default {
		name: "repo-detail",
		data() {
			return {
                pageNo: 1,
                pageSize: 20,
                total: 0,
                data: []
			};
		},
		created() {
		},
		methods: {
            pageChange(pageNo, pageSize) {
                
            }
		}
	};
</script>
<style lang="less">
.page-repo-detail {
    .repo-detail {
        font-size: 16px;
        text-align: center;
        padding: 10px 0;
        .repo-image, .repo-info {
            display: inline-block;
            vertical-align: top;
        }
        .repo-info {
            padding: 8px 0;
            margin-left: 60px;
            text-align: left;
            .repo-item {
                width: 565px;
                margin-bottom: 12px;
                .repo-col {
                    display: inline-block;
                    vertical-align: top;
                    width: 280px;
                }
                label {
                    display: inline-block;
                    width: 90px;
                    text-align: right;
                    color: #999;
                }
            }
        }
    }
    .repo-folder {
        display: inline-block;
        padding: 16px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fafafa;
    }
}
</style>