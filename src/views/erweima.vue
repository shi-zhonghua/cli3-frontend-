<template>
    <div>二维码
        1.显示内容(text所指向内容)必须是UTF-8编码格式。
        　　2.生成二维码js必须在 this.$nextTick(function(){调用})或setTimeout(() => { 调用 }, 100)，是为了确保二维码容器DOM已经存在。
        　　3.为了防止重复生成二维码，使用置空进行控制：document.getElementById("qrcode").innerHTML = "";
        <div id="qrcode" ref="qrcode"></div>
        <div>
        	<p v-for="(item,index) in dataList">
        		{{item.name}}
        		{{item.email}}
        	</p>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'

export default {
    components: { QRCode },
    data() {
        return {
        	dataList:[],
            message: '产品名称：'+"单簧管"+"价格："+'200',
            id:'10',
            
            obj:{
            	name:'张三',
            	sex:'男',
            	age:23,
            	des:'北京市'
            }
        }

    },
    mounted() {
        this.$nextTick(() => {
            this.qrcode()
        })
        this.getDataList()
    },
    methods: {
        qrcode() {
            let qrcode = new QRCode('qrcode', {
                width: 232, // 设置宽度 
                height: 232, // 设置高度 
                text:'http://www.huibenwu.vip/'
            })
        },
        getDataList(){
        	// this.$store.commit('showLoading', { LOADING: true })
        	this.$http.get('http://jsonplaceholder.typicode.com/users').then(res=>{
        		this.dataList=res.body
        	})
        }

    }
}
</script>
<style lang="less" scoped>
#qrcode {
    margin: 30px;
}
</style>