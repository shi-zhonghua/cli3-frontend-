<template>
    <div>
        promise
        <div id="orderContrastEchart" style="width:90%;height:350px;overflow: hidden; " />
    </div>
</template>
<script>
const getRandom = () => +(Math.random() * 1000).toFixed(0);
const asyncTask = (taskID) => new Promise((resolve) => {
    // 随机获取一次0~1000的随机数
    let timeout = getRandom();
    // 打印出传递进来的ID号 taskID=1 start.
    console.log(`taskID=${taskID} start.`);
    // 设置计时时间，function()等价于 () => {...}
    setTimeout(function() {
        // 打印出执行的taskID,和timeout
        console.log(`taskID=${taskID} finished in time=${timeout}.`);
        // 异步成功执行
        resolve(taskID)
    }, timeout);
});
import echarts from 'echarts'
export default {
    data() {
        return {
            currentYearArr: [2019, 2018]

        }
    },
    mounted() {
        Promise.all([asyncTask(1), asyncTask(2), asyncTask(3)])
            .then(resultList => {
                console.log('results:', resultList);
            });
        this.contrastData()
    },
    methods: {
        contrastData() {
            if (this.currentYearArr.length < 2) {
                this.$message('最少选择两个年份做对比')
                return false
            }
            var legendLabel = []
            if (this.currentYearArr.length >= 2) {
                for (var i = 0; i < this.currentYearArr.length; i++) {
                    /* eslint-disable */
                    legendLabel.push('' + this.currentYearArr[i] + '' + '年')
                }
            }
            let seriesName1 = legendLabel[0]
            let seriesName2 = legendLabel[1]
            let orderContrastEchart = echarts.init(document.getElementById('orderContrastEchart'))
            orderContrastEchart.setOption(this.getOption(legendLabel, seriesName1, seriesName2))
                       /*promise start */
            let promise = this.currentYearArr.map(item => {
                return makePromise(item)
            })

            function makePromise(item) {

                return item
            }
            Promise.all(promise)
                .then(function(posts) {
                    console.log(posts[0])
                    console.log(posts[1])
                })
                .catch(function(reason) {
                    console.log(reason)
                })

            /*promise end */
            for (var i = 0; i < this.currentYearArr.length; i++) {}
        },
        getOption(legendLabel, seriesName1, seriesName2, dataOne, dataTwo) {
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legendLabel
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}单'
                    }
                },
                series: [{
                        name: [2, 3],
                        symbolSize: 14,
                        itemStyle: { normal: { color: '#2ec7c9', lineStyle: { color: '#2ec7c9' } } },
                        symbol: 'circle',
                        type: 'line',
                        stack: '总量',
                        data: dataOne
                    },
                    {
                        name: seriesName2,
                        symbolSize: 14,
                        itemStyle: { normal: { color: '#B5C334', lineStyle: { color: '#B5C334' } } },
                        symbol: 'circle',
                        type: 'line',
                        stack: '总量',
                        data: dataTwo
                    }
                ]
            }
            return option
        }

    }
}
</script>
<style scoped>
</style>