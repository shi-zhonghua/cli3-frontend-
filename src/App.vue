<template>
    <div id="app">
        <!-- {{isLoading}} -->
        <keep-alive>
            <router-view />
        </keep-alive>
        <loading v-show="LOADING"></loading>
    </div>
</template>
<script>
import { mapState } from "vuex";
import loading from "./components/loading.vue";
export default {
    data() {
        return {};
    },
    components: {
        loading
    },

    computed: {
        ...mapState({
            LOADING: state => state.LOADING
        })
    }
};
</script>
<style lang="less">
body {
    padding: 0;
    margin: 0;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>