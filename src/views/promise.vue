<template>
    <div>
        promise
        <li v-for="item in promiseData">{{item}}</li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            promiseData:[]
        }
    },
    mounted() {
        this.promise1(),
        this.promiseAll()
    },
    methods: {
        // promise 基本用法，resolve 表示成功  reject 表示失败
        promise1() {
            var promise1 = new Promise(function(resolve, reject) {
                resolve('ss')
            })
            // console.log(promise1) // promise 对象
            promise1.then(function(value) {
                console.log(value);
            })
        },
        // promise.all用法
        promiseAll(){
            let p1=1,p2=2,p3=3;
            let p4=new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve('异步调用')
                },200)
            })
            Promise.all([p1,p2,p3,p4]).then(data=>{
                console.log( data)
                this.promiseData=data
            })
        }


    }
}
</script>
<style scoped>
</style>