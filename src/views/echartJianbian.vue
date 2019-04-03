<template>
    <div id="jianbianEchart" style="width:600px;height: 300px;"></div>
</template>
<script>
import echarts from "echarts";
export default {
    filters: {
        myCurrency: function(value) {
            if (!value) {
                return ''
            }

            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        this.getEchart()
    },
    methods: {
        getEchart() {
            let jianbianEchart = echarts.init(document.getElementById('jianbianEchart'))
            jianbianEchart.setOption(this.option())

        },
        option() {
            return {
                legend: {
                    orient: 'horizontal',
                    right: 64,
                    y: 'top',
                    itemWidth: 20,
                    itemHeight: 10,
                    itemGap: 10,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#4A4A4A'


                    },
                    data: [
                        { name: '正面', icon: 'circle' },
                        { name: '中性', icon: 'circle' },
                        { name: '负面', icon: 'circle' }
                    ]
                },
                tooltip: { //这个tooltip是设置鼠标移上去时候显示的详情投影
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时'],
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#fff", //左边线的颜色
                            width: "0" //坐标线的宽度
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 90,
                        textStyle: {
                            color: "#4A4A4A",
                            fontSzie: '14px'
                        }
                    }
                },
                yAxis: [{
                    type: 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#fff", //左边线的颜色
                            width: "0" //坐标线的宽度
                        }
                    },
                    // 隔行边框换色 border
                    splitLine: {
                        show: true,
                        lineStyle: {
                            // backgroundColor: ["#ccc", "#f0f"],
                            color: ["#EFEFEF", "#EFEFEF"],
                            width: 1,
                            type: "solid"
                        }
                    },
                    // 隔行区域换色
                    splitArea: {
                        // 分隔区域
                        show: false, // 默认不显示，属性show控制显示与否
                        areaStyle: {
                            // 属性areaStyle（详见areaStyle）控制区域样式
                            color: ["rgba(200,200,200,0.2)", "rgba(250,250,250,0.3)"]
                        }
                    },
                    axisLabel: {
                        formatter: "{value}K",
                        color: '#4A4A4A'
                    }
                }],
                series: [{
                        name: '负面',
                        type: 'bar',
                        stack: '总量',
                        mbarminWidth: 20, //最小柱图宽度
                        barMaxWidth: 50, //最大柱图宽度
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#B0AAD2' }, { offset: 1, color: '#FF603C' }]),
                                barBorderRadius: [0, 0, 15, 15],
                                barBorderWidth: -1 // 消除中间线，接触更融合
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                align: 'center'
                            }
                        },
                        data: [120, 132, 101, 400, 500, 96, 45, 37, 485, 457, 220, 425, 120, 132, 101, 400, 500, 96, 45, 37, 485, 457, 220, 425]
                    },
                    {
                        name: '中性',
                        type: 'bar',
                        stack: '总量',
                        barminWidth: 20, //最小柱图宽度
                        barMaxWidth: 50, //最大柱图宽度
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#80B9F9' }, { offset: 1, color: '#B0AAD2' }]),
                                barBorderWidth: -1 // 消除中间线，接触更融合
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                align: 'center'
                            }
                        },
                        data: [120, 132, 101, 400, 500, 96, 45, 37, 485, 457, 220, 425, 120, 132, 101, 400, 500, 96, 45, 37, 485, 457, 220, 425]
                    },

                    {
                        name: '正面',
                        type: 'bar',
                        stack: '总量',
                        barminWidth: 20, //最小柱图宽度
                        barMaxWidth: 50, //最大柱图宽度
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#476BFE' }, { offset: 1, color: '#80B9F9 ' }]),
                                barBorderRadius: [15, 15, 0, 0],
                                barBorderWidth: -1 // 消除中间线，接触更融合
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                align: 'center'
                            }
                        },
                        data: [320, 302, 301, 400, 500, 102, 489, 458, 10, 35, 782, 356, 320, 302, 301, 400, 500, 102, 489, 458, 10, 35, 782, 356]
                    }
                ]
            }
        }
    }
}
</script>
<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>