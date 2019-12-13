<template>
    <div class="about">
        <p>
            接收url 参数 {{this.$route.query.userName}}
        </p>
        <h1>This is an about page</h1>
        <input v-focus /> {{city}} {{cstate}}
        是发送到发
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    city() {
      return this.$store.state.currentCity;
    },
    ...mapState(["cstate"])
  },

  directives: {
    // 指令的定义
    focus: {
      //参数：el 指令所绑定的元素，可以用来直接操作 DOM
      //参数： binding 是一个对象，包含以下属性 name,value

      //bind :只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      bind(el, binding) {
        console.log(el);
        console.log(binding);
        console.log(binding.name);
        console.log(binding.value);
      },
      //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
      inserted: function(el, binding) {
        // 获得焦点
        el.focus();
        console.log(binding);
        console.log(binding.name);
        console.log(binding.value);
      }
    }
  }
};
</script>