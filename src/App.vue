<template>
	<div id='app'>
		<header class="header">业务管理系统</header>

        <section class="main-content" :style="{ height : mheight + 'px' }">
            <section class="com-left-slider">
                <left-slider></left-slider>
            </section>
            <section class='info-content' v-if="isVisible">
                <div class="info-content-wrap">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </section>
        </section>
	</div>
</template>

<script>
	import '@/lib/global.css'
	import leftSlider from './components/left-slider.vue'

	export default {
		data () {
			return {
				mheight: document.documentElement.clientHeight - 60,
				isVisible: true
			}
		},
        components: {
            leftSlider
        }
	}
</script>

<style>
    html {
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    #app {
        width: 100%;
        height: 100%;
    }

    #app a {
        text-decoration: none;
    }

    .logo {
        width: 100px;
        height: 100px
    }

    header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        background: #324057;
        color: #fff;
        text-indent: 20px;
    }

    .main-content {
        background-color: #eff2f7;
        overflow: hidden;
    }

    .com-left-slider {
        width: 200px;
        float: left;
        height: 100%;
    }

    .info-content {
        margin-left: 200px;
        height: 100%;
        overflow-y: scroll;
        padding: 0.1px 20px 20px;
        background-color: #ffffff;
    }

    .el-date-picker {
        z-index: 9999 !important;
    }
</style>
