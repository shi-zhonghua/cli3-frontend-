<template>
    <div>
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in 15" :class="{'active':currentIndex==index}">
                    {{item}}
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            </swiper>
        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: false, //连续滚动
        slidesPerView: 5, //slides 一屏显示的数量
        spaceBetween: 10, //slide之间设置距离
        slidesPerGroup: 1, //slides分组
        
      }
    };
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 400px;
  height: 23px;
  margin: 0 auto;
  border-bottom: solid 1px #ccc;
}
.active {
  color: red;
}
</style>


