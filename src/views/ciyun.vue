<template>
    <div class="container">
        <div>
            <input type="text" name="" ref="text" v-show="textShow">
            <el-button size="mini" @click="inputShow">显示/隐藏</el-button>
        </div>
        <el-button type="primary" @click="show" class="but">切换显示/隐藏</el-button>
        <div id="myChart-ciyun2" v-show="isShow" :style="{width: '300px', height: '300px',float:'left'}"></div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            isShow: true,
            textShow: false,
        
        }
    },
    mounted() {
        this.drawLine()
    },
    methods: {
        show() {
            // console.log('你还是')
            this.$nextTick(() => {
                this.isShow = !this.isShow
            })

        },
        inputShow() {
            this.textShow = !this.textShow
            this.$nextTick(function() {
                this.$refs.text.focus()
            })
        },
        drawLine() {
            let charData=[]
            for(let i=0;i<30;i++){
                charData.push(i)
            }
            let listOjb=[]
            for(let i=0;i<charData.length;i++){
                listOjb.push({
                    name: charData[i],
                    value: i,
                })
            }
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart-ciyun2'))
            // 绘制图表
            let option = {
                title: {
                    text: '词云示例',
                    // link: 'http://www.google.com/trends/hottrends'  跳转链接
                },
                tooltip: {
                    show: true
                },
                series: [{
                    name: '标题',
                    type: 'wordCloud',
                    size: ['80%', '80%'],
                    textRotation: [0, 45, 90, -45],
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 14
                    },
                    textStyle: {
                        normal: {
                            fontFamily: 'sans-serif',
                            color: function() {
                                return (
                                    'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') +
                                    ')'
                                )
                            }
                        },
                        emphasis: {
                            shadowBlur: 5, //阴影距离
                            shadowColor: '#333' //阴影颜色
                        }
                    },
                    data: listOjb
                }]
            }

            // 为echarts对象加载数据
            myChart.setOption(option)
        }
    }
}
</script>
<style scoped>
.but {
    float: left;
    margin: 10px;
    cursor: pointer;
}
</style>