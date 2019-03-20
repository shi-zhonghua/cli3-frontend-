<template>
    <div>
        <div id="cityEchart" style="width: 600px;height:600px;float: left;"></div>
        <v-distpicker :province="cityArr.province" :city="cityArr.city" :area="cityArr.area" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" style="float: left;">
        </v-distpicker>
        <el-button @click="output" type="primary">输出</el-button>
        <div>
            {{city}}
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import VDistpicker from 'v-distpicker'
export default {
    components: {
        VDistpicker
    },
    data() {
        return {
            city:'',
            cityArr: {
                province: '',
                city: '',
                area: ''
            }
        }
    },
    mounted() {
        this.cityEchart()

    },
    methods: {
        onChangeProvince(province) {
            this.cityArr.province = province.value
        },
        onChangeCity(city) {
            this.cityArr.city = city.value
        },
        onChangeArea(area) {
            this.cityArr.area = area.value
        },
        output() {
            this.city="你选择了"+this.cityArr.province+this.cityArr.city+this.cityArr.area
            this.$message.error("你选择了"+this.cityArr.province+this.cityArr.city+this.cityArr.area)
            // console.log(this.cityArr)


        },
        cityEchart() {
            let cityEchart = echarts.init(document.getElementById('cityEchart'))
            cityEchart.setOption(this.getOption())
            // window.onresize = this.chart.resize;
        },
        getOption() {
            return {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                series: [{
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


                }]
            }
        }


    }

}
</script>
<style lang="less" scoped>
</style>