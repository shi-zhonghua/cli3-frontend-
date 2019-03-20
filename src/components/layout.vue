<template>
  <div class="layout-wrap">
    <nav-menu />
    <router-view id="page-content" />
  </div>
</template>
<script>
import navMenu from "./navMenu";
export default {
  name: "layout",
  components: {
    navMenu
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.layout-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  #page-content {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    // padding: 0 3%;
    overflow-y: auto;
  }
}
</style>
