<template>
    <div>
        你选择的城市：{{currentCity}}
        <emitChildren @handleEmit="show"></emitChildren>
    </div>
</template>
<script>
import emitChildren from './emitChildren'
export default {
    data() {
        return {
            currentCity:'北京'
        }
    },
    components:{
        emitChildren
    },
    methods:{
        show(item){
            this.currentCity=item
        }
    }

}
</script>