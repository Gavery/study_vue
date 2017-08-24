<template>
	<h3>我是新闻</h3>
	<ul>
		<li><a v-link="{path:'/news/detail/001'}">新闻001</a></li>
	<li><a v-link="{path:'/news/detail/002'}">新闻002</a></li>
	</ul>
	<div>
		<router-view></router-view>
	</div>
</template>