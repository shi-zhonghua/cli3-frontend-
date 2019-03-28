<template>
    <div>
        过滤器
        获取本地当前时间：{{a|formatDate}}
        {{price|formatMoney}}
    </div>
</template>
<script>
import { formatDate } from '../filter/date.js'
import { formatMoney } from '../filter/format.js'

export default {
    data() {
        return {
            a: new Date(),
            price: 345.23,
        }

    },
    mounted() {
        // this.getDate()
    },
    methods: {

    },
    filters: {
        formatDate(time) {
            let date = new Date(time)
            return formatDate(date, 'yyyy-MM-dd hh:mm')
        },
        formatMoney(val) {
            return formatMoney(val)
        },

    }
}
</script>