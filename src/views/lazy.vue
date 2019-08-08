<template>
    <div>
        图片懒加载
        <!-- <ul id="container">
            <li v-for="img in list">
                <img v-lazy="img.url">
            </li>
        </ul> -->
        <li v-for="item in imgArr">
            <img v-lazy="item.imgUrl">
        </li>
        {{message}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: "你好",
      imgArr: [{ imgUrl: require("../assets/imgages/1.jpg") }, ""]
    };
  }
};
</script>

<style lang="less" scoped>
li{
    list-style: none;
    float: left;
    width: 150px;
    height: 100px;
    margin:0 30px;
    overflow: hidden;
    img{
        width:100%;
        height: 100%;
    }
}
</style>


