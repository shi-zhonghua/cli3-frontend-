<template>
    <div>
        <!-- <h3>树形结构</h3> -->
        <li>
            <span @click="toggle(model.id)">
         <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
         <i v-if="!isFolder" class="icon file-text"></i>
         {{ model.menuName }}
     </span>
            <ul style="padding-left: 16px" :class="{slideDown:!open,slideUp:open}" v-show="open" v-if="isFolder">
                <free-tree-list @selectCaputure="onselect" v-for="item in model.children" :model="item" :key="item.id"></free-tree-list>
            </ul>
        </li>
    </div>
</template>
<script>
export default {
    name: 'free-tree-list',
    props: ['model'],
    data() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function(id) {
            this.$emit('selectCaputure', id)
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        onselect(id) {
            this.$emit('selectCaputure', id);
        }
    }
}
</script>
<style>
ul {
    list-style: none;
}

i.icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: cover;
}

.icon.folder {
    background-image: url(../assets/folder.png);
}

.icon.folder-open {
    background-image: url(../assets/folder-open.png);
}

.icon.file-text {
    background-image: url(../assets/file-text.png);
}

.tree-menu li {
    line-height: 1.5;
}

.tree-menu li span {
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
}

.slideDown {
    /* overflow-y: hidden;
     max-height: 500px; !* approximate max height *!
     transition-property: all;
     transition-duration: 2s;
     transition-timing-function: cubic-bezier(0, 1, 0.5, 1);*/
    max-height: 0px;
    overflow-y: hidden;
    -webkit-transition: max-height 0.8s ease-in-out;
    -moz-transition: max-height 0.8s ease-in-out;
    -o-transition: max-height 0.8s ease-in-out;
    transition: max-height 0.8s ease-in-out;
}

.slideUp {
    max-height: 300px;
}
</style>