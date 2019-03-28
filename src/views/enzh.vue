<template>
    <div>
        <div>中英文切换</div>
        <div>
            <button @click="changeLanguage" v-if="isIn">中文</button>
            <button @click="changeLanguage" v-else>英文</button>
        </div>
        <span>{{ $t('navbar.home') }}</span>|
        <span>{{ $t('navbar.introduction') }}</span>|
        <span>{{ $t('navbar.contact') }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isIn: false,
            lang:this.$i18n.locale || 'zh'
        }
    },
    mounted() {
        sessionStorage.setItem('lang', this.lang)
    },
    methods: {
        changeLanguage() {
            this.isIn = !this.isIn

            let lang = this.$i18n.locale === "zh" ? "en" : "zh";
            sessionStorage.setItem('lang',lang)
            this.$i18n.locale = lang;
        },
    }

}
</script>