//专门配置路由的js文件


//引入要用的home和news组件
import Home from "./components/home.vue";
import News from "./components/news.vue";

//引入子路由模块
	import Login from './components/login.vue';
	import Reg from './components/reg.vue';
	import Detail from './components/detail.vue';

export default{
	'/home':{
		component:Home,
		subRoutes:{
			'login':{
				component:Login
			},
			'reg':{
				component:Reg
			}
		}

	},
	'/news':{
		component:News,
		subRoutes:{
			'/detail/:id':{
				component:Detail
			}
		}
	}
}