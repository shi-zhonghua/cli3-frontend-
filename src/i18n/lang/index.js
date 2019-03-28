
import Vue from 'vue'
import langENUS from './en'
import langZHCN from './zh'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const i18n = new VueI18n({
  'locale': 'zh',
  'messages': {
    'zh': {
      ...langZHCN
    },
    'en': {
      ...langENUS
    }
  }
})

locale.i18n((key, value) => i18n.t(key, value))

export default i18n