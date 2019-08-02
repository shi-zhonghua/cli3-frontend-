<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <video style="width:100%;" id="video" height="160" src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls="controls" playsinline="" webkit-playsinline="">
                        您的浏览器不支持 video 标签。
                    </video>
                    <button @click="stop">暂停</button>
                    <button @click="start">开始</button>
                </div>
                <div class="swiper-slide" v-for="(item,index) in 5">
                    {{item}}
                </div>

            </div>
            <div class="swiper-pagination"></div>
        </div>

    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { constants } from "fs";
export default {
  data() {
    return {};
  },
  mounted() {
      let _this=this;
    new Swiper(".swiper-container", {
      loop: true,
      //autoplay: true, //自动轮播  
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        touchMove: function(event) {
            _this.stop();
        }
      },
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar"
    });
  },
  methods: {
    stop() {
      var video = document.getElementById("video");
      //暂停
      video.pause();
    },
    start() {
      var video = document.getElementById("video");
      //播放
      video.play();
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 400px;
  height: 220px;
  margin: 0 auto;
  border-bottom: solid 1px #ccc;
}
.swiper-slide {
  width: 100%;
  height: 220px;
}
</style>


