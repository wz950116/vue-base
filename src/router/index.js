import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(Router);

// lazy router
// const SaleAction = reslove => {
// 	require.ensure(['view/sale-action/index.vue'], () => {
// 		reslove(require('view/sale-action/index.vue'));
// 	});
// };

var router = new Router({
	routes: [],
	mode: "hash"
});

router.beforeEach((to, from, next)=>{
	NProgress.start();
	next();
})
router.afterEach(()=>{
	NProgress.done();
})

export default router