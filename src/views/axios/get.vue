<template>
    <div>
        <p>总数：{{info.totalRecord}}</p>
        <li v-for="(item,index) in info.userList">
            <span>姓名：{{item.name}}</span>
            <label>年龄：{{item.age}}</label>
        </li>
        {{infoApi}}
    </div>
</template>

<script>
import {getUser} from '@/http/api/userApi.js'
export default {
  data() {
    return {
      info: [],
      infoApi:[]
    };
  },
  methods: {
      getUser(){
          getUser().then((res)=>{
              console.log(res)
              this.infoApi=res.data
          })
      }
  },
  mounted() {
      this.getUser();
    //get或者post , api为接口地址
    this.$axios
      .get(
        "https://www.fastmock.site/mock/871b3e736e653b99374b7713e4011f9f/boss/user/list",
        {
          params: {
            //post不需要params:这部分
            //请求参数
          }
        }
      )
      .then(res => {
        //res是返回结果
        //你的下一步操作 例:
        this.info = res.data.data; //存数据
      })
      .catch(err => {
        //请求失败就会捕获报错信息
        //err.response可拿到服务器返回的报错数据
      });

    // 第二种写法
    //    this.$axios({
    //            method:'post',
    //            url:'api',
    //            data:{  //get这里应为params
    //               //请求参数
    //            },
    //            //withCredentials:true, //局部携带cookie
    //            headers:{} //如果需要添加请求头可在这写
    //        }).then(res => {  //res是返回结果
    //            //你的下一步操作 例:
    //             this.info = res.data  //存数据
    //        }).catch(err => { //请求失败就会捕获报错信息
    //              //err.response可拿到服务器返回的报错数据
    //        })
  }
};
</script>

<style>
</style>
