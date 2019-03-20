<template>
    <div>城市分布图-散点图
        <div id="city2Echart" style="width: 600px;height:600px;"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
var geoCoordMap = { //自定义城市坐标
    "青岛": [120.33, 36.07],
    "厦门": [118.1, 24.46],
    "宁波": [121.56, 29.86],
    "深圳": [114.07, 22.62],
    "大连": [121.62, 38.92]
};
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};



export default {
    data() {
        return {
            option: {
                backgroundColor: '#BBFFFF',
                title: {
                    text: '异常分布',
                    x: 'center'
                },
                tooltip: {
                    // trigger: 'item',
                    // formatter: '{b}',
                    trigger: 'item',
                    formatter: function(params) {
                        var res = params.name + '<br/>';
                        var myseries = option.series;
                        if (convertData) {
                            for (var i = 0; i < myseries.length - 1; i++) {
                                for (var j = 0; j < myseries[i].data.length; j++) {
                                    if (myseries[i].data[j].name == params.name) {
                                        res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>';
                                    }
                                }
                            }
                        } else {
                            for (var i = 0; i < myseries.length; i++) {
                                for (var j = 0; j < myseries[i].data.length; j++) {
                                    if (myseries[i].data[j].name == params.name) {
                                        res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>';
                                    }
                                }
                            }
                        }
                        return res;
                    }

                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['超时', '失败', '运行中']
                },
                dataRange: {
                    min: 0,
                    max: 30,
                    x: 'left',
                    y: 'bottom',
                    color: ['red', 'orange', 'yellow', 'green'],
                    text: ['高', '低'],
                    calculable: true
                },
                // toolbox: {
                //     show: true,
                //     orient: 'vertical',
                //     x: 'right',
                //     y: 'center',
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                // roamController: {
                //     show: true,
                //     x: 'right',
                //     mapTypeControl: {
                //         'china': true
                //     }
                // },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#FFE4CA',
                            borderColor: '#84C1FF',
                            borderWidth: 0.8
                        },
                        emphasis: {
                            areaColor: '#FFC78E'
                        }
                    }
                },

                 series: [
                //{
                //         name: '超时',
                //         type: 'map',
                //         mapType: 'china',
                //         roam: false,
                //         itemStyle: {
                //             normal: { label: { show: false } },
                //             emphasis: { label: { show: true } }
                //         },
                //         data: [
                //             { name: '广东', value: 4 },
                //             { name: '黑龙江', value: 1 },
                //             { name: '湖南', value: 3 }
                //         ]
                //     },
                //     {
                //         name: '失败',
                //         type: 'map',
                //         mapType: 'china',
                //         itemStyle: {
                //             normal: { label: { show: false } },
                //             emphasis: { label: { show: true } }
                //         },
                //         data: [
                //             { name: '安徽', value: 11 },
                //             { name: '北京', value: 1 },
                //             { name: '大连', value: 13 },
                //             { name: '福建', value: 6 },
                //             { name: '甘肃', value: 1 },
                //             { name: '广东', value: 4 },
                //             { name: '广西', value: 10 },
                //             { name: '贵州', value: 9 },
                //             { name: '海南', value: 4 },
                //             { name: '河北', value: 1 },
                //             { name: '河南', value: 18 },
                //             { name: '黑龙江', value: 1 },
                //             { name: '湖北', value: 3 },
                //             { name: '湖南', value: 18 },
                //             { name: '吉林', value: 16 },
                //             { name: '江苏', value: 16 },
                //             { name: '江西', value: 24 },
                //             { name: '辽宁', value: 1 },
                //             { name: '内蒙古', value: 18 },
                //             { name: '宁波', value: 12 },
                //             { name: '宁夏', value: 1 },
                //             { name: '青岛', value: 2 },
                //             { name: '青海', value: 23 },
                //             { name: '山东', value: 14 },
                //             { name: '山西', value: 8 },
                //             { name: '陕西', value: 13 },
                //             { name: '上海', value: 10 },
                //             { name: '深圳', value: 4 },
                //             { name: '四川', value: 8 },
                //             { name: '天津', value: 28 },
                //             { name: '西藏', value: 2 },
                //             { name: '厦门', value: 5 },
                //             { name: '新疆', value: 4 },
                //             { name: '云南', value: 10 },
                //             { name: '浙江', value: 13 },
                //             { name: '重庆', value: 18 }
                //         ],
                //     },
                //     {
                //         name: '运行中',
                //         type: 'map',
                //         mapType: 'china',
                //         itemStyle: {
                //             normal: { label: { show: false } },
                //             emphasis: { label: { show: true } }
                //         },
                //         data: [
                //             { name: "青岛", value: 1 },
                //             { name: "厦门", value: 23 },
                //             { name: "宁波", value: 12 },
                //             { name: "深圳", value: 4 },
                //             { name: "大连", value: 13 },
                //         ]
                //     },

                    {
                        name: '计划单列市',
                        type: 'effectScatter', //影响散点
                        coordinateSystem: 'geo',
                        symbolSize: 12,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                color: '#c60fff',
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            },
                        },
                        data: convertData([
                            { name: "青岛" },
                            { name: "厦门" },
                            { name: "宁波" },
                            { name: "深圳" },
                            { name: "大连" },
                        ]),
                    },

                    {
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        selectedMode: 'multiple', //single 表示单选;multiple表示多选  默认flase不选
                        //设置默认 样式颜色，边框 
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: 'lightgreen',
                                areaColor: 'orange',
                                label: {
                                    show: true
                                }
                            },
                            // 设置选中样式 颜色
                            emphasis: {
                                borderWidth: 2,
                                borderColor: '#fff',
                                areaColor: 'red',
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontSize: 15,
                                        color: '#fff'
                                    }
                                }

                            },

                        },
                        // 设置默认单独城市样式
                        data: [{
                            name: '新疆',
                            itemStyle: {
                                normal: {
                                    borderColor: '#0f0',
                                    areaColor: '#ff0',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#f0f',
                                            fontSize: 15
                                        }
                                    }
                                }
                            }


                        }, {
                            name: '西藏',
                            selected: true,
                            value: 10
                        }],

                        label: {
                            normal: { show: true },
                            emphasis: { show: true }
                        }


                    }
                ]
            }

        }
    },
    mounted() {
        this.cityEchart()
    },
    methods: {

        cityEchart() {
            let city2Echart = echarts.init(document.getElementById('city2Echart'))
            city2Echart.setOption(this.option)
            window.addEventListener("resize", function() {
                city2Echart.resize();
            });

        }



    }

}
</script>
<style lang="less" scoped>
</style>