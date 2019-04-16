<template>
    <div>
        图片放大 添加 preview="0" 这个属性的值相同表示为一组<br/>
        1、安装 import preview from 'vue-photo-preview'<br/>
        在main.js 文件里添加<br/>
       2、引入 import 'vue-photo-preview/dist/skin.css'<br/>
        Vue.use(preview)<br/>
        <p v-for="(item,index) in imgUrl" :key="index">
            <img :src="item.img" :preview="index" alt=""/>
		</p>
        <p>
           <img src="../assets/imgages/1.jpg" preview="1" alt=""/>
		</p>
        <p>
            <img src="../assets/imgages/2.jpg" preview="2" alt=""/>
		</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgUrl: [{
                    img: require('../assets/imgages/1.jpg')

                },
                {
                    img: require('../assets/imgages/2.jpg')
                },
                {
                    img: require('../assets/imgages/3.jpg')
                },
            ]
        }

    }

}
</script>
<style lang="less" scoped>
p {
    width: 50px;
    height: 50px;
    overflow: hidden;
    cursor: zoom-in;

    img {
        width: 100%;
        height: 100%;
    }

}
</style>