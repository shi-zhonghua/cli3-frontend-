<template>
    <div style="width:600px; height:600px;">
        <video-player class="video-player vjs-custom-skin vjs-big-play-centered" id="videoPlayer" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
    </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "https://media.w3.org/2010/05/sintel/trailer.mp4", // 视频路径
            type: "video/mp4" // 类型
          }
        ],
        poster:
          "http://imsapi.yueqizhixiang.com/uploads/images/leqizhixiang/shangjiadianpu/zixun2/1564392065070.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  mounted() {
      // 外部加载视频路径
    //   this.playerOptions.sources[0].src=this.videoUrl
  }
};
</script>
<style lang="less" >
//  vjs-big-play-centered  播放按钮居中 添加这个类名
.video-js .vjs-big-play-button {
  //播放按钮样式
  height: 2em;
  width: 2em;
  line-height: 2em;
  border-radius: 1em;
}
// 显示视频总时长，当前播放时间  重点、重点、重点
.video-js .vjs-time-control {
  display: block;
}
.video-js .vjs-remaining-time {
  display: none;
}
</style>

