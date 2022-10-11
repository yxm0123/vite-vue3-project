import { mystorage } from '@/utils/storage';
import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import en_US from './en_US';
import zh_CN from './zh_CN';
export const getLocale = () => {
  const cookieLanguage = mystorage.get('current_lang');
  console.log(cookieLanguage, 8989)
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const language = navigator.language.toLowerCase();
  return "zh_CN";
  // return cookieLanguage;

};
const i18n = createI18n({
  locale: getLocale(), //默认显示的语言
  messages: {
    zh_CN: zh_CN,
    en_US: en_US,
  },
});
export default i18n;