<template>
    <page
        page-class="product-add"
        back="/product"
        :breadthumb="[{label:'首页'},{label:'新增产品'}]"
    >
        <panel>
            <div slot="header">
                <span>新增产品</span>
            </div>
            <el-form size="small" class="product-add-form clearfix">
                <div :style="{float: 'left', paddingTop: '40px'}">
                    <el-form-item label="产品图片">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </div>
                <div :style="{float: 'left', width: '800px'}">
                    <div class="clearfix">
                        <div :style="{float: 'left', width: '400px'}">
                            <h4>基本信息</h4>
                            <el-form-item label="产品名称" label-width="100px">
                                <el-input />
                            </el-form-item>
                            <el-form-item label="类型" label-width="100px">
                                <el-input />
                            </el-form-item>
                            <el-form-item label="规格型号" label-width="100px">
                                <el-input />
                            </el-form-item>
                            <el-form-item label="品牌" label-width="100px">
                                <el-input />
                            </el-form-item>
                        </div>
                        <div :style="{float: 'left', width: '400px'}">
                            <h4>附加信息</h4>
                            <el-form-item label="计量单位" label-width="100px">
                                <el-input />
                            </el-form-item>
                            <el-form-item label="预设进价" label-width="100px">
                                <el-input />
                            </el-form-item>
                            <el-form-item label="预设售价" label-width="100px">
                                <el-input />
                            </el-form-item>
                        </div>
                    </div>
                    <div>
                        <el-form-item label="产品描述" label-width="100px">
                            <el-input type="textarea" resize="none" :autosize="{minRows: 2, maxRows: 4}"/>
                        </el-form-item>
                        <el-form-item label="" label-width="100px">
                            <el-button type="primary">提交</el-button><el-button>取消</el-button>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
        </panel>
    </page>
</template>
<script>
export default {
    name: 'product-add',
    data() {
        return {
            imageUrl: ''
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>
<style lang="less">
.page-product-add {
    .product-add-form {
        width: 980px;
        margin: 0 auto;
        h4 {
            font-size: 14px;
            padding-left: 20px;
            margin-top: 8px;
            margin-bottom: 16px;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    }
}
</style>

