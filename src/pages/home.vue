<template>
	<div class="home-overflow">
		<div class="home-container">
			<home-header />
			<home-body />
		</div>
	</div>
</template>
<script>
	import header from './components/header';
	import body from './components/body';
	export default {
		name: "home",
		components: {
			homeHeader: header,
			homeBody: body
		}
	};
</script>
<style lang="less">
.home-overflow {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	overflow-x: auto;
	overflow-y: hidden;
	.home-container {
		display: block;
		min-width: 1360px;
		min-height: 10px;
	}
}
</style>
