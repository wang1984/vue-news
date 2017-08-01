import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import routes from './routeConfig.js'
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', //切换路径模式，变成history模式  地址栏中就不会有 #
	scrollBehavior: () => ({
		y: 0
	}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes: routes
});

//vuex 状态管理
import store from './store/index.js'


import Loading from './components/Loading'
Vue.use(Loading);

import axios from 'axios'
//axios 是不能 使用 Vue.use()的
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的

axios.interceptors.request.use(function(config) { //配置发送请求的信息
	store.dispatch('showLoading')
	return config;
}, function(error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
	store.dispatch('hideLoading')
	return response;
}, function(error) {

	return Promise.reject(error);
});

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 配置默认的请求头信息（post）
//axios.defaults.baseURL='http://localhost:8082/'; 配置默认请求路径
Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了

/*import filters from './filters'
//有待研究
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))*/


Vue.filter('normalTime', (time) => {
	if (time) {
		var oDate = new Date();
		oDate.setTime(time);

		var y = oDate.getFullYear();
		var m = oDate.getMonth() + 1;
		var d = oDate.getDate();

		var h = oDate.getHours();
		var m = oDate.getMinutes();
		var s = oDate.getSeconds();

		return y + '-' + m + '-' + d + ' ' + h + ':' + m + ':' + s;
	}
})


new Vue({
	el: '#app',
	render: h => h(App),
	router: router,
	store: store
})