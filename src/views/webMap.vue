<template>
    <div>
        <!-- <a href="//uri.amap.com/navigation?from=116.478346,39.997361,startpoint&to=116.3246,39.966577,endpoint&via=116.402796,39.936915,midwaypoint&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0">高德导航</a> -->
        <!-- <a href="baidumap://map/direction?mode=driving&origin=39.915,116.404 &destination=36.62,114.48 ®ion=1" class="map">调用了百度app导航</a> -->

        <!-- <a href="baidumap://map/direction?origin=34.264642646862,108.95108518068&destination=40.007623,116.360582&coord_type=bd09ll&mode=driving&src=ios.baidu.openAPIdemo">路线规划</a>
        <p>
            <a href="http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=目的位置&content=百度奎科大厦&output=html">去这里： 百度奎科大厦</a>
            网页打开
        </p>
        <p>
            <a href="http://map.baidu.com/mobile/" class="map">
                查看地图公交/驾车去这里</a>
            百度地图首页
        </p>
        纬度：{{lat}} 经度：{{lng}} {{inner}} -->
        <p @click="openMap">
            百度地图

        </p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      inner: "",
      lat: "",
      lng: ""
    };
  },
  mounted() {
    this.getLocation();
    // alert(this.lat)
  },
  methods: {
    openMap() {
      var ua = window.navigator.userAgent.toLowerCase();
      //微信
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        window.location.href = "https://itunes.apple.com/cn/app/jian-kang-mao-rang-yun-dong/id966436668?mt=8"; // 安卓下载地址 erro
      } else {
        //非微信浏览器
        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
          var loadDateTime = new Date();
          window.setTimeout(function() {
            var timeOutDateTime = new Date();
            if (timeOutDateTime - loadDateTime < 5000) {
              window.location.href =
                "https://apps.apple.com/cn/app/%E7%99%BE%E5%BA%A6%E5%9C%B0%E5%9B%BE-%E5%87%BA%E8%A1%8C%E5%AF%BC%E8%88%AA%E5%BF%85%E5%A4%87%E7%9A%84%E6%99%BA%E8%83%BD%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92%E8%BD%AF%E4%BB%B6/id452186370"; //ios下载地址
            } else {
              window.close();
            }
          }, 2000);
          window.location = "baidumap://map"; //打开app
        } else if (navigator.userAgent.match(/android/i)) {
          var iframe = document.createElement("iframe");
          iframe.style.display = "none";
          iframe.src =
            "https://itunes.apple.com/cn/app/jian-kang-mao-rang-yun-dong/id966436668?mt=8";
          document.body.appendChild(iframe);
          //清除iframe
          iframe.parentNode.removeChild(iframe);
          iframe = null;
          //   try {
          //     window.location = "baidumap://map";// 打开app
          //     // $("#btn2").hide();
          //     setTimeout(function() {
          //       window.location.href =
          //         "https://itunes.apple.com/cn/app/jian-kang-mao-rang-yun-dong/id966436668?mt=8"; //android下载地址 erro
          //     }, 500);
          //   } catch (e) {}
        }
      }
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.inner = "地理位置浏览器支持";
      }
    },

    showPosition(position) {
      //showPosition() 函数获得并显示经度和纬度
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.inner =
        "纬度: " +
        position.coords.latitude +
        "<br />经度: " +
        position.coords.longitude;
    }
  }
};
</script>