<template>
    <div>
        <div class="kj-go-top">
            <span >意见反馈</span>
            <span>分享到</span>
            <span  v-show="goTopShow" @click="goTop">返回顶部</span>
        </div>
        <div style="height: 1200px;"></div>
    </div>
</template>
<script>
export default {
    name: "goTop",
    data() {
        return {
            scrollTop: "",
            goTopShow: false
        };
    },
    watch: {
        scrollTop(val) {
            if (this.scrollTop > 100) {
                this.goTopShow = true;
            } else {
                this.goTopShow = false;
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            }
        },
        goTop() {
            let timer = null,
                _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop =
                        _that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow = false;
                }
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    // destroyed() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }
};
</script>
<style scoped>
.kj-go-top {
    position: fixed;
    padding: 0 16px;
    top: 50%;
    z-index: 999;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgba(7, 17, 27, .1);
}


.kj-go-top span {
    display: block;
    width: 26px;
    padding: 16px 0;
    font-size: 12px;
    line-height: 20px;
    color: #b5b9bc;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #edf1f2;
    transition: all .2s linear .5s;
}
</style>