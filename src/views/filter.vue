<template>
    <div>
        <h1>全局过滤使用</h1>
        <div>
            <span>姓名脱敏</span> <br/>
            <span>{{name}}---{{ name | nameHide}}</span>
        </div>
        <div>
            <span>身份证号过滤男、女</span><br/>
            <span>{{idCardSex}}---{{idCardSex | sexIdcardFilter}}</span>
        </div>
        <div>
            <span>手机号脱敏</span><br/>
            <span>{{tel}}---{{tel | telHide}}</span>
        </div>
         <div>
            <span>身份证号脱敏</span><br/>
            <span>{{idCard}}---{{idCard | IDcardHide}}</span>
        </div>
         <div>
            <span>日期</span><br/>
            <span>{{date}}--- {{date | date}}</span>
        </div>
        <div>
            <span>金额保留两位小数</span><br/>
            <span>{{price}}--- {{price | formatMoney}}</span>
        </div>
       
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "张三是",
      idCardSex: "331004198704012722",
      tel: "15801389901",
      idCard:'331004198704012722',
      date:new Date(),
      price:32.2345
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
div {
  margin-bottom: 10px;
 
}
</style>
