<template>
  <div id="app">
    <free-tree @selectCaputure="onselect" :allData="myData" class="trees"></free-tree>
  </div>
</template>
 
<script>
  var myData = [
    {
      'id': '1',
      'menuName': '一级-01',
      'menuCode': '10',
      'children': [
        {
          'menuName': '二级-01',
          'menuCode': '11',
          'id': '11'
        },
        {
          'menuName': '二级-02',
          'menuCode': '12',
          'id': '12',
          'children': [
            {
              'menuName': '三级-02',
              'menuCode': '121',
              'id': '121'
            },
            {
              'menuName': '三级-03',
              'menuCode': '122',
              'id': '122'
            }
          ]
        },
        {
          'menuName': '二级-03',
          'menuCode': '13',
          'id': '13'
        }
      ]
    },
    {
      'id': '2',
      'menuName': '一级-02',
      'menuCode': ''
    },
    {
      'id': '3',
      'menuName': '一级-03',
      'menuCode': '30',
      'children': [
        {
          'menuName': '二级-01',
          'menuCode': '31',
          'id': '31'
        },
        {
          'menuName': '二级-02',
          'menuCode': '32',
          'id': '32',
          'children': []
        }
      ]
    },
    {
      'id': '4',
      'menuName': '一级-04',
      'menuCode': '',
      'children': []
    }
  ];
  import freeTree from './free-tree'
  export default {
    name: 'app',
    methods:{
      onselect(id){
        console.log(id);
      }
    },
    data () {
      return {
        myData:myData
      }
    },
    components:{
      freeTree
    }
  }
</script>
<style >
.trees{
  margin: 20px;
}
</style>
