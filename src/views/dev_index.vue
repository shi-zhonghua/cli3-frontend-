<template>
    <div>
        <p v-for="(item,index) in list" :key="index">{{item}}</p>
    </div>
</template>

<script>
export default {
  name: "dev_index",
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  mounted() {},
  methods: {},
  components: {},
  computed: {},
  watch: {},
  filters: {
      
  }
};
</script>
<style lang='less' scoped>
</style>