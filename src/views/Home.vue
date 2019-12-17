<template>
    <div class="home">
        <!-- 骨架屏 -->
        <skeleton class='skeleton' v-if="isSkeleton" type='listcom' active :options="{
    row: 3,
    lineHight: 20
}">
        </skeleton>
        <div id="loginDiv" tabindex="1" style="outline:0;">
            <input type="text" v-focus style="opacity:0;position:absolute;">
        </div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div v-for="item in yearArr" :key="item">{{item}}</div>
        {{yearArr}}<br />
        <el-button type="primary" class="sub-btn" @click="cur">获取return键</el-button>
        <router-link to="/About">About</router-link>
        <dev-index/>
    </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import devIndex from './dev_index.vue'
import { sessionStorageApi, localStorageApi } from "@/utils/storageApi.js";

// 添加引导步骤

import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import steps from "./guide";

export default {
    name: "home",

    components: {
        HelloWorld,
        devIndex
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function(el) {
                el.focus();
            }
        }
    },
    //  从另外的组件进入该组件前触发该钩子
    beforeRouteEnter(to, from, next) {
        console.log("todo before enter");
        console.log(this); // 这里获取不到上下文
        next();
    },
    //  同一个组件，param不同的是触发,常用与同一个组件当传入不通参数时，展示不同的数据
    beforeRouteUpdate(to, from, next) {
        console.log("todo update enter");
        next();
    },
    //  该组件离开跳转到另外的组件时触发该钩子,常应用于用户表单，当用户填了一部分内容，需要提醒用户是否离开页面
    beforeRouteLeave(to, from, next) {
        console.log("todo leave enter");
        next();
    },
    data() {
        return {
            yearArr: [],
            driver: null,
            isSkeleton: true,
            id: 1,
            userName: 'admin',
            firstName: 'A',
            lastName: 'B',
            fullName2: 'A B',
            leftMenus: {
                   "entity": null,
                   "childs": [
                     {
                       "entity": {
                         "id": 1,
                         "parentMenuId": 0,
                         "name": "systemManage",
                         "icon": "el-icon-message\r\n",
                         "alias": "系统管理",
                         "state": "ENABLE",
                         "sort": 0,
                         "value": null,
                         "type": "NONE",
                         "discription": "用于系统管理的菜单",
                         "createUserId": 1
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 3,
                             "parentMenuId": 1,
                             "name": "authManage",
                             "icon": "el-icon-loading",
                             "alias": "权限管理",
                             "state": "ENABLE",
                             "sort": 0,
                             "value": "/system/auth",
                             "type": "NONE",
                             "discription": "用于权限管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 4,
                             "parentMenuId": 1,
                             "name": "roleManage",
                             "icon": "el-icon-bell",
                             "alias": "角色管理",
                             "state": "ENABLE",
                             "sort": 1,
                             "value": "/system/role",
                             "type": "LINK",
                             "discription": "用于角色管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 2,
                             "parentMenuId": 1,
                             "name": "menuManage",
                             "icon": "el-icon-edit",
                             "alias": "菜单管理",
                             "state": "ENABLE",
                             "sort": 2,
                             "value": "/system/menu",
                             "type": "LINK",
                             "discription": "用于菜单管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 5,
                             "parentMenuId": 1,
                             "name": "groupManage",
                             "icon": "el-icon-mobile-phone\r\n",
                             "alias": "分组管理",
                             "state": "ENABLE",
                             "sort": 3,
                             "value": "/system/group",
                             "type": "LINK",
                             "discription": "用于分组管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         }
                       ]
                     },
                     {
                       "entity": {
                         "id": 6,
                         "parentMenuId": 0,
                         "name": "userManage",
                         "icon": "el-icon-news",
                         "alias": "用户管理",
                         "state": "ENABLE",
                         "sort": 1,
                         "value": null,
                         "type": "NONE",
                         "discription": "用于用户管理的菜单",
                         "createUserId": 1
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 7,
                             "parentMenuId": 6,
                             "name": "accountManage",
                             "icon": "el-icon-phone-outline\r\n",
                             "alias": "帐号管理",
                             "state": "ENABLE",
                             "sort": 0,
                             "value": "",
                             "type": "NONE",
                             "discription": "用于帐号管理的菜单",
                             "createUserId": 1
                           },
                           "childs": [
                             {
                               "entity": {
                                 "id": 14,
                                 "parentMenuId": 7,
                                 "name": "emailManage",
                                 "icon": "el-icon-sold-out\r\n",
                                 "alias": "邮箱管理",
                                 "state": "ENABLE",
                                 "sort": 0,
                                 "value": "/content/email",
                                 "type": "LINK",
                                 "discription": "用于邮箱管理的菜单",
                                 "createUserId": 1
                               },
                               "childs": null
                             },
                             {
                               "entity": {
                                 "id": 13,
                                 "parentMenuId": 7,
                                 "name": "passManage",
                                 "icon": "el-icon-service\r\n",
                                 "alias": "密码管理",
                                 "state": "ENABLE",
                                 "sort": 1,
                                 "value": "/content/pass",
                                 "type": "LINK",
                                 "discription": "用于密码管理的菜单",
                                 "createUserId": 1
                               },
                               "childs": null
                             }
                           ]
                         },
                         {
                           "entity": {
                             "id": 8,
                             "parentMenuId": 6,
                             "name": "integralManage",
                             "icon": "el-icon-picture",
                             "alias": "积分管理",
                             "state": "ENABLE",
                             "sort": 1,
                             "value": "/user/integral",
                             "type": "LINK",
                             "discription": "用于积分管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         }
                       ]
                     },
                     {
                       "entity": {
                         "id": 9,
                         "parentMenuId": 0,
                         "name": "contentManage",
                         "icon": "el-icon-rank",
                         "alias": "内容管理",
                         "state": "ENABLE",
                         "sort": 2,
                         "value": null,
                         "type": "NONE",
                         "discription": "用于内容管理的菜单",
                         "createUserId": 1
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 10,
                             "parentMenuId": 9,
                             "name": "classifyManage",
                             "icon": "el-icon-printer",
                             "alias": "分类管理",
                             "state": "ENABLE",
                             "sort": 0,
                             "value": "/content/classify",
                             "type": "LINK",
                             "discription": "用于分类管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 11,
                             "parentMenuId": 9,
                             "name": "articleManage",
                             "icon": "el-icon-star-on",
                             "alias": "文章管理",
                             "state": "ENABLE",
                             "sort": 1,
                             "value": "/content/article",
                             "type": "LINK",
                             "discription": "用于文章管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 12,
                             "parentMenuId": 9,
                             "name": "commentManage",
                             "icon": "el-icon-share",
                             "alias": "评论管理",
                             "state": "ENABLE",
                             "sort": 2,
                             "value": "/content/comment",
                             "type": "LINK",
                             "discription": "用于评论管理的菜单",
                             "createUserId": 1
                           },
                           "childs": null
                         }
                       ]
                     }
                     
                   ]
                 }

            
        };
    },
    computed: {
        fullName1() { //计算属性中的get方法，方法的返回值就是属性值
            return this.firstName + ' ' + this.lastName
        },
        fullName3: {
            get() { //回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
                return this.firstName + ' ' + this.lastName
            },
            set(val) { //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
                //val就是fullName3的最新属性值
                console.log(val)
                const names = val.split(' ');
                console.log(names)
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    },
    created() {
        console.log(this.userName);
        document.onkeypress = e => {
            let that = this;
            var keycode = document.all ? event.keyCode : e.which;
            if (keycode === 13) {
                if (sessionStorageApi.get("token")) {
                    return;
                }
                that.cur();
                return false;
            }
        };
    },
    mounted() {
        setTimeout(() => {
            this.isSkeleton = false;
        }, 50);
        this.getYear();
        this.random();
        this.driver = new Driver({
            className: "scoped-class", // className to wrap driver.js popover
            animate: true, // Animate while changing highlighted element
            opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
            padding: 10, // Distance of element from around the edges
            allowClose: true, // Whether clicking on overlay should close or not
            overlayClickNext: false, // Should it move to next step on overlay click
            doneBtnText: "完成", // Text on the final button
            closeBtnText: "关闭", // Text on the close button for this step
            nextBtnText: "下一步", // Next button text for this step
            prevBtnText: "上一步" // Previous button text for this step
            // Called when moving to next step on any step
        });
        if (!localStorageApi.get("firstLogin")) {
            this.guide();
            localStorageApi.set("firstLogin", "ture");
        }
    },

    methods: {
        // 带参数跳转路由
        userDetails() {
            this.$router.push("/baiduMap/" + this.id);
        },
        // ? 拼接参数
        router() {
            this.$router.push({ path: '/About', query: { userName: this.userName } });
        },
        random() {
            let token = [];
            for (let i = 0; i < 10; i++) {
                token.push(Math.ceil(Math.random() * 10) * i);
            }
            let tokens = token.join("");
            sessionStorageApi.set("token", tokens);
        },
        getYear() {
            var date = new Date();
            var currentYear = date.getFullYear();
            this.yearArr.push(currentYear);
            var onYear = currentYear - 1;
            this.yearArr.push(onYear);
        },
        cur() {
            this.$message({
                message: "警告哦，这是一条警告消息",
                type: "warning"
            });
        },
        //引导步骤
        guide() {
            this.driver.defineSteps(steps);
            this.driver.start();
        }
    }
};
</script>
<style lang="less" scoped>
.skeleton {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // width:100%;
    // height: 100%;
    background: #ccc;
    z-index: 333;
}
</style>
<style >
    .el-menu-vertical-demo{
        width:200px;
    }
</style>