<template>
    <div class="total_title">
        <span v-for="(item, index) in millimeter(selfTotal)" :key="index">
            {{ item }}
        </span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            total: 3000,
            selfTotal: 0,
            number: 9
        };
    },
    mounted() {
        this.start(this.total, 0)
    },
    methods: {
        millimeter(total) {
            total = total.toString().padStart(this.number, "0");
            const reg = /\d{1,3}(?=(\d{3})+$)/g;
            return total.replace(reg, "$&,");
        },
        start(maxNum, startNum, duration = 1) {

            startNum = startNum * 1;
            maxNum = maxNum * 1;
            let numText = startNum;
            let diff = maxNum - startNum;
            if (diff < 0) {
                diff = maxNum;
                startNum = 0;
            }
            let step = parseInt(diff / (duration * 60)) || 1;

            let golb;

            const numSlideFun = () => {
                numText += step;
                if (numText >= maxNum) {
                    numText = maxNum;
                    window.cancelAnimationFrame(golb);

                } else {
                    golb = window.requestAnimationFrame(numSlideFun);
                }

                this.selfTotal = numText;
            };
            numSlideFun();
        }
    }
};
</script>
<style lang="less" scoped>
.total_title {
    padding: 10px;

    span {
        display: inline-block;
        height: 60px;
        width: 40px;
        line-height: 60px;
        font-weight: 800;
        font-size: 50px;
        color: #fff;
        text-align: center;
        background: #ccc;
        background-size: 100% 100%;
        border-radius: 2px;
        margin-right: 4px;
    }
}
</style>