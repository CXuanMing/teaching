import Vue from 'vue';
// 安装axios
import axios from 'axios';
// 引入应用程序
import App from './App.vue';
// 引入store
import store from "./store";
// 引入路由
import router from './router'

// 安装
Vue.prototype.$http = axios;

// 创建vue实例化对象
new Vue({
	// 安装store
	store,
	// 安装路由
	router,
	// 渲染应用程序
	render: h => h(App)
// 挂载vue实例化对象
}).$mount('#app')
