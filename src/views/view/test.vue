<template>
    <div class="test">
        测试文件
        <template>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </template>
        sdfsdf
        <div></div>
        <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
            {{tag.name}}
        </el-tag>

    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ]
    };
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
  filter: {}
};
</script>
<style lang="less" scoped>
.test {
  width: 100px;
  a {
    color: #000;
  }
}
</style>


