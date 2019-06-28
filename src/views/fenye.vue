<template>
    <div>

       
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: []
    };
  },
  mounted() {
   
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>