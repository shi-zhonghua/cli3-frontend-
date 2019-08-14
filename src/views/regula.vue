<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="手机">
                <el-input v-model.trim="form.phone"></el-input>
            </el-form-item>
             <el-form-item label="邮箱">
                <el-input v-model.trim="form.email"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
// 验证手机号
function isPhone(obj) {
  let reg = /^1\d{10}$/;
  if (!reg.test(obj)) {
    return false;
  } else {
    return true;
  }
}
// 验证邮箱
function isEmail(obj) {
  let reg = new RegExp(
    "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
  );
  if (!reg.test(obj)) {
    return false;
  } else {
    return true;
  }
}

export default {
  data() {
    return {
      form: {
        phone: "",
        email:''
      }
    };
  },
  methods: {
    onSubmit() {
      if (!this.form.phone) {
        this.$message.error("手机不能为空");
        return false;
      } else if (!isPhone(this.form.phone)) {
        this.$message.error("请输入正确的手机号");
        return false;
      }
      if (!this.form.email) {
        this.$message.error("邮箱不能为空");
        return false;
      } else if (!isEmail(this.form.email)) {
        this.$message.error("请输入正确的邮箱账号");
        return false;
      }
      console.log(this.form);
    },
    cancel() {
      this.form = {
        phone: "",
        email:''
      };
      console.log("cancel");
    }
  }
};
</script>

