<template>
    <div class="flex-warp">
        <h1>flex布局</h1>
        <div class="flex">

        	<div v-for="(item,index) in 4" class="flex-child" >{{index}}</div>
        </div>
    </div>
</template>
<script >
	export default{
		data(){
			return{
			}
		}
	}
</script>
<style lang="less" scoped>
.flex {
    display: flex;
    justify-content: space-between;//项目位于各行之间留有空白的容器内
    flex-wrap: wrap;//换行
    .flex-child{
    	width: 49%;
    	height: 200px;
    	margin-bottom: 20px;
    	background: #ccc;
    }
}
</style>