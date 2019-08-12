<template>
    <div>
        <div >{{isContent?'正在录音中...':'请点击录音按钮开始录音'}}</div>
        <button @click="start">录音</button>
        <button>暂停录音</button>
        <button @click="stop">停止录音</button>

    </div>
</template>
<script>
import Recorder from "js-audio-recorder";
export default {
  data() {
    return {
      recorder: "",
      isContent:false
    };
  },
  mounted() {},
  methods: {
    // 开始录音
    start() {
        this.isContent=true;
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      

      let recorder = new Recorder(audioContext, {
        sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1, // 声道，支持 1 或 2， 默认是1
      });

    //   recorder.start().then(function() {
    //     console.log("开始录音了");
    //   });
    },
    // 停止录音
    stop(){
        this.isContent=false;
    }
  }
};
</script>

