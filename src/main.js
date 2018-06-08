import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

// vue-router
import router from './router';

Vue.config.productionTip = false;

// 兼容Promise
require('es6-promise').polyfill();

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");