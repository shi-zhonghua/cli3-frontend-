<template>
    <div>
        路由监控
        {{path}}
    </div>
</template>
<script>
export default {
    watch: {
        $route(to, from) {
            console.log(to.path);
            this.path=to.path
        }
    },
    data(){
    	return{
    		path:''

    	}
    }
}
</script>
<style lang="less" scoped>
</style>