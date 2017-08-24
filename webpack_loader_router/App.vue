<template>
<div id="app">
		<h3>vue-loader+vue-router</h3>
	<div>
		<a v-link="{path:'/home'}">主页</a>
		<a v-link="{path:'/news'}">新闻</a>
	</div>
	<router-view></router-view>
</div>

</template>
<script type="text/javascript">
</script>
<style type="text/css">
	body{
		background: #ccc;
	}
	.v-link-active{
		font-size: 20px;
		color: #f60;
	}
</style>