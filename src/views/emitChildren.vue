<template>
    <div class="emitChildren">
        <li v-for="(item,index) in cityData" :key="index" :class="{'acitve':index===currentIndex}" @click="handle(item,index)">{{item}}</li>
    </div>
</template>
<script>
export default {
  //   props: ["currentCity"],
  data() {
    return {
      currentIndex: 0,
      cityData: ["北京", "上海", "深圳", "广州", "杭州"]
    };
  },
  mounted() {
  },
  methods: {
    handle(item, index) {
      this.currentCity = item;
      this.currentIndex = index;
      this.$emit('handleEmit',item)
    }
  }
};
</script>
<style lang="less" scoped>
.emitChildren {
  width: 500px;
  margin: 0 auto;
  padding-top: 20px;
  li {
    padding: 10px;
    border: solid 1px #ccc;
    width: 30px;
    list-style: none;
    float: left;
    margin-right: 10px;
    &.acitve {
      color: blue;
    }
  }
}
</style>

