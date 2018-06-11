import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

// vue-router
import router from './router'

// vuex
import store from './store'

Vue.config.productionTip = false

// 兼容Promise
require('es6-promise').polyfill()

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")