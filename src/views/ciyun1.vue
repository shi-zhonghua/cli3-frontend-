<template>
    <div class="container">
        <div>
            <input type="text" name="" ref="text" v-show="textShow">
            <el-button size="mini" @click="inputShow">显示/隐藏</el-button>
        </div>
        <el-button type="primary" @click="show" class="but">切换显示/隐藏</el-button>
        <div id="myChart" v-show="isShow" :style="{width: '300px', height: '300px',float:'left'}"></div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            isShow: true,
            textShow: false,
            dataList: [{
                    name: '词语1',
                    value: 10000,
                   
                },
                {
                    name: '词语2',
                    value: 6181,
                },
                {
                    name: '词语3',
                    value: 4386,
                },
                {
                    name: '词语4',
                    value: 4386,
                },
                {
                    name: '词语5',
                    value: 4386,
                },
                {
                    name: '词语6',
                    value: 4386,
                }

            ]
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
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
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
                    data: this.dataList
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