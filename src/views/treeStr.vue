<template>
    <div class="tree">
        <tree-children :list="treeData" :handlVal="handItem"></tree-children>
        <div v-if="isShow">
            <!-- {{currentData}} -->
            <table >
                <tr>
                    <td>日期</td>
                    <td>名称</td>
                    <td>描述</td>
                </tr>
                <tr>
                    <td>{{currentData.createDate | formatDate}}</td>
                    <td>{{currentData.label}}</td>
                    <td>{{currentData.desc}}</td>
                    <td><el-button @click="create">添加</el-button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
var myData2 = [{
    "id": 362,
    "label": "text-1",
    "createDate": "2019-04-18T12:50:55.000Z",
    "parentID": 361,
    "cstatus": "normal",
    "useCount": 0,
    "desc": "text-1",
    "code": "text1",
    "level": 2,
    "codePath": "/text/text1/",
    "path": "/361/362/",
    "isRecommand": "no",
    "icon": null,
    "type": null,
    "enLabel": null,
    "browserCount": 0,
    "mobileIcon": null,
    "zgProjectId": 203,
    "children": [{
        "id": 3621,
        "label": 'text-1-1',
        "code": 'text-1-1',
        "desc": 'text-1-1',
        "createDate": "2019-04-18T12:50:37.000Z"
    }]
}, {
    "id": 371,
    "label": "text-2",
    "createDate": "2019-04-22T11:41:37.000Z",
    "parentID": 361,
    "cstatus": "normal",
    "useCount": 0,
    "desc": "text-2text-2text-2text-2text-2text-2text-2",
    "code": "text2",
    "level": 2,
    "codePath": "/text/text2/",
    "path": "/361/371/",
    "isRecommand": "no",
    "icon": null,
    "type": null,
    "enLabel": null,
    "browserCount": 0,
    "mobileIcon": null,
    "zgProjectId": 203
}, {
    "id": 383,
    "label": "text-3",
    "createDate": "2019-04-23T12:07:54.000Z",
    "parentID": 361,
    "cstatus": "normal",
    "useCount": 0,
    "desc": "text-3",
    "code": "text-3",
    "level": 2,
    "codePath": "/text/text-3/",
    "path": "/361/383/",
    "isRecommand": "no",
    "icon": null,
    "type": null,
    "enLabel": null,
    "browserCount": 0,
    "mobileIcon": null,
    "zgProjectId": 203
}]
var myData1 = [{
    "id": 361,
    "label": "text",
    "createDate": "2019-04-18T12:50:37.000Z",
    "parentID": 0,
    "cstatus": "normal",
    "useCount": 0,
    "desc": "text",
    "code": "text",
    "level": 1,
    "codePath": "/text/",
    "path": "/361/",
    "isRecommand": "no",
    "icon": null,
    "type": null,
    "enLabel": null,
    "browserCount": 0,
    "mobileIcon": null,
    "zgProjectId": 203,
    "children": myData2
}]
import { formatDate } from '../filter/date.js'
import treeChildren from './treeChildren.vue'
export default {
    components: {
        treeChildren
    },
    data() {
        return {
            treeData: myData1,
            currentData: {},
            isShow:false
        }
    },
    mounted() {
    	// this.handItem()
    },
    methods: {
        handItem(item) {
            // console.log(item.label, item.id)
            // console.log(item)
            this.currentData = item,
            this.isShow=true
        },
        create(){
        	console.log(this.currentData)
        }
    },
    filters: {
        formatDate(time) {
            let date = new Date(time)
            return formatDate(date, 'yyyy-MM-dd hh:mm')
        },


    }
}
</script>