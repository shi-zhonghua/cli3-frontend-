<template>
    <div>
        {{res}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      res: ""
    };
  },
  mounted() {
    this.$axios
      .get("/movie/top250")
      .then(res => {
        this.res = res;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="less" scoped>
</style>


