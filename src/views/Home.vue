<template>
    <div class="home">
        <div id="loginDiv" tabindex="1" style="outline:0;">
            <input type="text" v-focus style="opacity:0;position:absolute;">
        </div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div v-for="item in yearArr" :key="item">{{item}}</div>
        {{yearArr}}
        <el-button type="primary" class="sub-btn" @click="cur">获取return键</el-button>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: 'home',
    components: {
        HelloWorld
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function(el) {
                el.focus()
            }
        }
    },
    data() {
        return {
            yearArr: []
        }
    },
    created() {
        document.onkeypress = e => {
            let that = this
            var keycode = document.all ? event.keyCode : e.which
            if (keycode === 13) {

                that.cur()
                return false
            }
        }
    },
    mounted() {
        this.getYear()
    },

    methods: {
        getYear() {
            var date = new Date()
            var currentYear = date.getFullYear()
            this.yearArr.push(currentYear)
            var onYear = currentYear - 1
            this.yearArr.push(onYear)
        },
        cur() {
            this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
        }
    }

}
</script>