import Vue from 'vue';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'
import relative from 'dayjs/plugin/relativeTime'
dayjs.extend(relative)
dayjs.locale('zh-cn')
console.log(dayjs().from(dayjs('2022-4-7')))
Vue.filter('relativeTime',(value)=>dayjs().to(dayjs(value)))