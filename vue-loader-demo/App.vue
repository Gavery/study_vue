<template>
	<h1 @click="change">welcome vue</h1>
	<h2>{{msg}}</h2>
	<my_menu></my_menu>
</template>
<script type="text/javascript">
	import Menu from "./components/menu.vue";
	export default{
		data(){
			return {
				msg:'welcome vue!!'
			}
		},
		methods:{
			change(){
				this.msg="hello vue"
			}
		},
		components:{
			"my_menu":Menu
		}
	}
</script>
<style type="text/css">
	body{
		background: #ccc;
	}
</style>