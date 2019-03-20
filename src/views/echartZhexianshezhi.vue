<template>
  <div class="information-trend">
    <div id="inforMationEcahrt"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      xData: ["11/2", "11/3", "11/4", "11/5", "11/6", "11/7"]
      // yData: ["0", "20k", "40k", "80k", "100k", "120k"]
    };
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    option(xData) {
      return {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: xData,
          // x 轴边框颜色 跟宽度
          axisLine: {
            show:true,
            lineStyle: {
              color: "#26C0C0",
              width: "1",
              type:'solid'
            }
          },
          // x 轴文本颜色
          axisLabel: {
            textStyle: {
              color: "#27727B"
            }
          }
        },
        yAxis: {
          type: "value",
          // y 轴边框颜色 跟宽度
          axisLine: {
            show: true,
            lineStyle: {
              color: "#C6E579", //左边线的颜色
              width: "1", //坐标线的宽度
              type:'solid' //坐标线格式
            }
          },
          // y 轴文本颜色
          axisLabel: {
            formatter: "{value}K",
            color:'#C1232B'
          },
          // 隔行边框换色 border
          splitLine: {
            show: true,
            lineStyle: {
              // backgroundColor: ["#ccc", "#f0f"],
              color: ["#fff", "#000"],
              width: 2,
              type: "solid"
            }
          },
          // 隔行区域换色
          splitArea: {
            // 分隔区域
            show: true, // 默认不显示，属性show控制显示与否
            areaStyle: {
              // 属性areaStyle（详见areaStyle）控制区域样式
              color: [ "#D7504B","#FAD860"]
            }
          },
          
        },
        series: [
          {
            // symbol: "none",// 取消圆点
            type: "line",
            itemStyle: {
              normal: {
                color: "#ff0",// 设置圆点颜色
                lineStyle: {
                  color: "#ff0",
                  width: 2
                }
              }
            },

            data: [20, 30, 80, 50, 60, 90]
          },
          {
            symbol: "none",// 取消圆点
            type: "line",
            itemStyle: {
              normal: {
                color: "#2ec7c9",// 设置圆点颜色
                lineStyle: {
                  color: "#f0f",
                  width: 2
                }
              }
            },
            data: [10, 5, 13, 18, 12, 20]
          }
        ]
      };
    },
    getEchart() {
      let inforMationEcahrt = echarts.init(
        document.getElementById("inforMationEcahrt")
      );
      inforMationEcahrt.setOption(this.option(this.xData));
    }
  }
};
</script>
<style lang="less" scoped>
.information-trend {
  height: 360px;
  width: 100%;
  #inforMationEcahrt {
    width: 80%;
    height: 90%;
    padding-top: 20px;
  }
}
</style>