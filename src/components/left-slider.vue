<template>
	<div class="left-slider-wrap">
		<el-menu v-bind:default-active="currentIndex" class="el-menu-vertical-demo">
			<el-submenu index="1" v-if="accessList.ad_seller">
				<template slot="title">业务</template>
				<router-link to="/management">
					<el-menu-item index="/management">管理</el-menu-item>
				</router-link>
			</el-submenu>
	    </el-menu>
	</div>
</template>

<style scoped>
    .left-slider-wrap {
        height: 100%;
    }

    .left-slider-wrap .el-menu-item {
        border-bottom: 1px solid #e1e1e1;
        background: #eff2f7;
    }

    .left-slider-wrap .el-menu-item:hover,
    .left-slider-wrap .el-menu-item.is-active {
        background-color: #d3dce6;
    }

    .left-slider-wrap .el-menu-item a {
        display: block;
        color: #475669;
    }

    .left-slider-wrap .el-menu-item:hover a,
    .left-slider-wrap .el-menu-item.is-active a {
        color: #20a0ff;
    }

    .left-slider-wrap .el-submenu {
        border-bottom: 1px solid #e1e1e1;
    }
</style>

<script>
    export default {
        data () {
            return {
                currentIndex: "/",
                accessList: {
                    ad_seller: true
                }
            };
        },
        methods: {
            setAllTabsAbility (ableOrNot) {
                return this.setTabsAbility(Object.keys(this.accessList), ableOrNot);
            },
            setTabsAbility (tabNames, ableOrNot) {
                const _this = this;
                let abilityArr = [];
                ableOrNot = ableOrNot !== undefined ? !!ableOrNot : true;
                if (ableOrNot) {
                    abilityArr = tabNames;
                } else {
                    Object.keys(_this.accessList).forEach(function (v) {
                        if (tabNames.indexOf(v) == -1) {
                            abilityArr.push(v);
                        }
                    });
                }
                return abilityArr;
            },
            // 不同身份权限显示不同侧边栏
            getAbilityArrByRole (role) {
                let abilityArr = [];
                const _this = this;
                switch (role) {
                    case "ROLE_BE_STAFF_SUPER_ADMIN":
                        abilityArr = _this.setAllTabsAbility(true);
                        break;
                }
                return abilityArr;
            }
        },
        beforeMount () {
            // this.currentIndex = window.app.currentRouter.path;
            // 初始accessList内的所有值设置为true
            // userModel.getUserInfo(res => {
            //     if (res.code === 0) {
            //         const abilityArrByRoles = [],
            //             roles = res.data.roles;
            //         roles.forEach(function (item) {
            //             abilityArrByRoles.push(_this.getAbilityArrByRole(item.name));
            //         });
            //         _this.accessList = _this.setAllTabsAbility(false);
            //         for (let i = 0; i < abilityArrByRoles.length; i++) {
            //             abilityArrByRoles[i].forEach(function (v) {
            //                 _this.accessList[v] = true;
            //             });
            //         }
            //     }
            // });
        }
    };
</script>
