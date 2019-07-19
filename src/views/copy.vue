<template>
    <div>
        <li v-for="(item,index) in list">
            <span class="NetbarNumber">{{item}}</span>
            <button ref="copy" class="lr" :data-clipboard-text="item" @click="copy(index)" :id="'copy_text'+index">复制</button>
        </li>
    </div>
</template>
<script>
import Clipboard from 'clipboard';
export default {
    data() {
        return {
            list: ['信息1', '信息2', '信息3', '信息4', ]
        }
    },
    methods: {
        copy(index) {
            let clipboard = new Clipboard("#copy_text" + index);
            clipboard.on('success', e => {
                this.$message({
                    message: '复制成功！',
                    type: 'success'
                });
                // 释放内存
                clipboard.destroy()
            })
            clipboard.on('error', e => {
                // 不支持复制
                Message({
                    message: '该浏览器不支持自动复制',
                    type: 'warning'
                });
                // 释放内存
                clipboard.destroy()
            })
        }
    }
}
</script>