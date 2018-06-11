import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(Router);

// lazy router
const Management = reslove => {
	require.ensure(['@/views/management/index.vue'], () => {
		reslove(require('@/views/management/index.vue'));
	});
};

var router = new Router({
	routes: [
	    {
	        path: '/management',
	        name: 'management',
	        component: Management
	    }
	],
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