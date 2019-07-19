<template>
    <div>
        百度地图
        <p>当前城市：{{LocationCity}}</p>
        经度：{{lng}}
        纬度：{{lat}}
        <div id="map">
        </div>
    </div>
</template>
<script>
import BMap from 'BMap'
export default {
    name: 'Map',
    data() {
        return {
            LocationCity: '',
            position: '',
            success: false,
            lng: 116.404,
            lat: 39.915
        }
    },
    mounted() {
        this.createMap();
        this.getLocation();
    },

    methods: {

        getLocation() {
            const geolocation = new BMap.Geolocation();
            var _this = this;
            _this.LocationCity = '正在定位';
            geolocation.getCurrentPosition(function getinfo(position) {
                let city = position.address.city; //获取城市信息
                _this.LocationCity = city;
                _this.success = true;
            }, function(e) {
                _this.LocationCity = '定位失败, 请点击重试';
                this.success = false;
            }, { provider: 'baidu' });
        },

        


        createMap() {
            if (BMap) {
                var map = new BMap.Map("map")
                // 初始化地图,设置中心点坐标
                var point = new BMap.Point(this.lng, this.lat);
                //地图级别
                map.centerAndZoom(point, 15)
                //添加地图类型控件
                map.addControl(new BMap.MapTypeControl({
                    mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                }))
                // 设置地图显示的城市 此项是必须设置的
                map.setCurrentCity("北京")
                //开启鼠标滚轮缩放
                map.enableScrollWheelZoom(true)

                // 添加控件
                //平移缩放
                map.addControl(new BMap.NavigationControl());
                // 比例尺
                map.addControl(new BMap.ScaleControl());
                //缩略图
                map.addControl(new BMap.OverviewMapControl());


                //添加标注
                var marker = new BMap.Marker(point); // 创建标注    
                map.addOverlay(marker); // 将标注添加到地图中 


                // 信息窗口 
                var point1 = new BMap.Point(116.417854, 39.921988);
                var marker1 = new BMap.Marker(point1); // 创建标注    
                map.addOverlay(marker1); // 将标注添加到地图中 
                var opts = {
                    width: 200, // 信息窗口宽度
                    height: 100, // 信息窗口高度
                    title: "海底捞王府井店", // 信息窗口标题
                    enableMessage: true, //设置允许信息窗发送短息
                    message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
                }
                var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts); // 创建信息窗口对象 
                marker1.addEventListener("click", function() {
                    map.openInfoWindow(infoWindow, point1); //开启信息窗口
                });

                // 创建圆区域
                var circle = new BMap.Circle(point1, 500, { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
                map.addOverlay(circle);



            }
        }
    }

}
</script>
<style scoped lang="less">
#map {
    margin: 20px auto;
    width: 700px;
    height: 400px;
}
</style>