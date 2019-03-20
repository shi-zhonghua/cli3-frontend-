<template>
  <div class="city-warp">
    <edms-card :title="'销售分布'">
      <div id="cityEchart" style="width: 100%;height:600px;" />
    </edms-card>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import 'echarts/map/js/china.js'
  export default {
    data() {
      return {
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          series: [
            {
              name: '中国',
              type: 'map',
              mapType: 'china',
              roam: false,
              selectedMode: 'multiple',
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: 'lightgreen',
                  areaColor: 'orange',
                  label: {
                    show: true
                  }
                },
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
                }
              },
              // 设置默认单独城市样式
              data: [
                {
                  name: '河北',
                  itemStyle: {
                    normal: {
                      borderWidth: 1,
                      borderColor: '#f0f',
                      areaColor: 'red',
                      label: {
                        show: true,
                        textStyle: {
                          color: '#f0f',
                          fontSize: 12
                        }
                      }
                    }
                  }
                }
                //   {
                //     name: '山东',
                //     selected: true,
                //     value: 10
                //   }
              ],

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
        let cityEchart = echarts.init(document.getElementById('cityEchart'))
        cityEchart.setOption(this.option)
      }
    }
  }
</script>
