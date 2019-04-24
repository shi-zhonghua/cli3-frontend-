<template>
    <div >
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name" @click="toggle(item)">
                <span>{{item.label}}</span>
            </div>
            <div v-show="open" v-if="item.children" class="children-item">
                <tree-children :list="item.children" :handlVal="handlVal"></tree-children>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'treeChildren',
    props: {
        list: {
            type: Array,
        },
        handlVal: {
            type: Function,
        }
    },
    data() {
        return {
            open: true,
            isFolder: true
        }

    },
    methods: {
        toggle(item) {
            this.handlVal(item)
            if (this.isFolder) {
                this.open = !this.open

            }
        },
    }
}
</script>
<style lang="less" scoped>
.children-item{
		padding-left: 36px;
	}
	
</style>