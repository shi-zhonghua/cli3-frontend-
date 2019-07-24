<template>
    <div>
        <a href="//uri.amap.com/navigation?from=116.478346,39.997361,startpoint&to=116.3246,39.966577,endpoint&via=116.402796,39.936915,midwaypoint&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0">高德导航</a>
        <p>
            <a href="baidumap://map/direction?mode=driving&origin=39.915,116.404 &destination=36.62,114.48 ®ion=1" class="map">查看地图公交/驾车去这里</a>
            调用了百度app导航
        </p>
        <p>
            <a href="http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=目的位置&content=百度奎科大厦&output=html">去这里： 百度奎科大厦</a>
            网页打开
        </p>
        <p><a href="http://map.baidu.com/mobile/" class="map">
                查看地图公交/驾车去这里</a>
            百度地图首页
        </p>
        纬度：{{lat}}
        经度：{{lng}}
        {{inner}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            inner: '',
            lat: '',
            lng: '',
        }
    },
    mounted() {
        this.getLocation();
        alert(this.lat)
    },
    methods: {
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                this.inner = "地理位置浏览器支持";
            }
        },

        showPosition(position) { //showPosition() 函数获得并显示经度和纬度
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.inner = "纬度: " + position.coords.latitude + "<br />经度: " + position.coords.longitude;
        }
    }
}
</script>