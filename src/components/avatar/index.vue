<template>
	<span class="avatar">
		<i v-if="src != null" :style="style"/>
		<i v-else class="default-avatar"/>
		<span>{{name}}</span>
	</span>
</template>
<script>
	export default {
		name: "avatar",
        props: ["name", "src"],
        data() {
            return {
                style: {
                    backgroundImage: 'url('+this.src+')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '100% auto'
                }
            }
        }
	};
</script>
<style lang="less">
	.avatar {
		display: inline-flex;
        height: 24px;
        align-items: center;
        color: #fafafa;
        i {
            width: 24px;
            height: 24px;
            border-radius: 3px;
            overflow: hidden;
        }
        span {
            margin-left: 5px;
            font-size: 14px;
        }
		.default-avatar {
			display: inline-block;
			background: url("./images/default-avatar.png") no-repeat;
			background-size: 100% 100%;
			background-position: center center;
		}
	}
</style>
