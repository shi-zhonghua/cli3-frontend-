<template>
    <div>
        <h2>data 处理方式</h2>
        <p>混入的数据 跟组件内数据有冲突时 组件内的数据优先 比如：message 输出的是 goodbye 其他数据在内部进行递归合并</p>
        {{message}} {{foo}} {{bar}}

        <h2>同名钩子函数  声明周期  created mounted</h2>
        <p>同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。</p>

        <h2>同名方法 methods</h2>
        <p>值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对</p>
    </div>
</template>

<script>
import mixins from "./mixins.js";
export default {
  mixins: [mixins],
  data() {
    return {
      message: "goodbye",
      bar: "def"
    };
  },
  created() {
    console.log("组件钩子被调用");
  },
  methods: {
    bar: function() {
      console.log("bar");
    },
    conflicting: function() {
      console.log("from self");
    }
  }
};
</script>
<style lang="less" scoped>
</style>

