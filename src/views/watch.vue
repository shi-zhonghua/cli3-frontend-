<template>
    <div>
        路由监控
        {{cityName}}
        <span @click="handle" ref="span">上海</span>
        <barrager/>
    </div>
</template>
<script>
    import barrager from './barrager.vue'
export default {
    components:{
        barrager
    },
    data() {
        return {
            cityName: '北京'

        }
    },
    watch: {
        // $route(to, from) {
        //     console.log(to.path);
        //     this.path=to.path
        // }
        cityName(newName, oldName) {
            console.log('新值：'+newName);
            console.log('旧值：'+oldName);
            console.log('我被改变了')
        }
    },
    methods:{
        handle(){
            let name=this.$refs.span.innerText;
            this.cityName=name;
            // console.log(name)
        }
    }
}
</script>
<style lang="less" scoped>
</style>