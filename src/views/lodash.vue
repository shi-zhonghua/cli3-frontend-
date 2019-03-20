l<template>
  <div class="data-type">
    <div id="dataTypeEcahrt"></div>
    <!-- <li v-for="item in name">{{item}}</li> -->
  </div>
</template>
<script>
import echarts from "echarts"
// import _ from 'lodash'
export default {
  data() {
    return {};
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    option() {
      return {
        title: {
          text: "媒体活跃度",
          x: "60",
          textStyle: {
            color: "#8b8b8b",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "80",
          y: "center",
          data: ["lenove1", "lenove2", "lenove3", "lenove4", "lenove5"]
        },
        color: ["#C1232B", "#B5C334", "#FCCE10", "#E87C25", "#27727B"], // 设置每个图例的颜色
        series: [
          {
            name: "媒体活跃度",
            type: "pie",
            radius: ["36%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              // 图形样式
              normal: {
                label: {
                  show: true,
                  position: "inside", //数据在中间显示
                  formatter: "{d}%" //百分比显示
                }
              }
            },
            data: [
              { value: 335, name: "lenove1" },
              { value: 310, name: "lenove2" },
              { value: 234, name: "lenove3" },
              { value: 135, name: "lenove4" },
              { value: 148, name: "lenove5" }
            ]
          }
        ]
      };
    },
    getEchart() {
      let dataTypeEcahrt = echarts.init(
        document.getElementById("dataTypeEcahrt")
      );
      dataTypeEcahrt.setOption(this.option());
    }
  }
};
</script>
<style lang="less" scoped>
.data-type {
  height: 360px;
  width: 100%;
  #dataTypeEcahrt {
    width: 60%;
    height: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
}
</style>
