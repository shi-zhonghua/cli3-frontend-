<template>
    <div class="echarts-wrap">
       <!-- 柱状图 -->
        <div id="lineEchart" style="width:400px;height: 400px;"></div>
        <!-- 放大 折线图-->
        <i class="el-icon-rank" title="放大"  @click="dialogVisible = true"></i>
        <el-dialog title="图表" :visible.sync="dialogVisible" width="70%" >
            <span style="height: 300px; display: block;">
                <echarts-zhexiantu></echarts-zhexiantu>
            </span>
            <span slot="footer" class="dialog-footer">
          </span>
        </el-dialog>
        <!-- 折线图 -->
        <echarts-zhexiantu></echarts-zhexiantu>
        <!-- 渐变 -->
        <echart-jianbian></echart-jianbian>
    </div>
</template>
<script>
import echarts from 'echarts'
import echartsZhexiantu from './echartZhexianshezhi.vue'
import echartJianbian from './echartJianbian.vue'
export default {
    components: {
        echartsZhexiantu,
        echartJianbian
    },
    data() {
        return {
            dialogVisible: false,
            data1: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data2: [120, 200, 150, 80, 70, 110, 130]
        }
    },
    mounted() {
        this.getEchart()

    },
    methods: {
        open() {

        },
        option(data1, data2) {
            return {
                xAxis: {
                    type: 'category',
                    data: data1
                },
                yAxis: {
                    name: '数量',
                    type: 'value',
                    // axisLabel: {
                    //     formatter: '{value} 包'
                    // }
                },
                series: [{
                    data: data2,
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            //定义一个list，然后根据所以取得不同的值，这样就实现了，
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            //以下为是否显示，显示位置和显示格式的设置了
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                }]
            }
        },
        getEchart() {
            let lineEchart = echarts.init(document.getElementById('lineEchart'))
            lineEchart.setOption(this.option(this.data1, this.data2))

        }

    }
}
</script>
<style lang="less" scoped>
</style>