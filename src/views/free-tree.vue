<template>
  <div class="tree-menu">
    <ul v-for="menuItem in allData" :key="menuItem.id">
      <free-tree-list @selectCaputure="onselect" :model="menuItem"></free-tree-list>
    </ul>
  </div>
</template>
<script>
  import freeTreeList from './free-tree-list.vue'
  export default {
    props:{
      allData:{
        type:Array,
        default:[]
      }
    },
    components: {
      freeTreeList
    },
    data() {
      return {
 
      }
    },
    methods:{
      onselect(id){
        this.$emit('selectCaputure',id);
      }
    }
  }
</script>
