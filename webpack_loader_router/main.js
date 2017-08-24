import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

//引入配置的router路由模块
import routerConfig from './router.config.js';//导出来就是一个json 可以直接放入map里
Vue.use(VueRouter);//vueRouter是基于vue开发，所以要加这句话

//配置路由
const router=new VueRouter();


router.map(routerConfig);//routerConfig是一个json对象，和原生写法是一样的结果
router.redirect({
	'/':'/home'
});

router.start(App,'#app');
