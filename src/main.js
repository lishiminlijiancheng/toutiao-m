import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import './styles/fonts/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';
// import './mock/index'
import './utils/dayjs'
Vue.use(Vant);

Vue.config.productionTip = false
window._AMapSecurityConfig = {
  serviceHost:'http://43.143.225.200:80/_AMapService',  
  // 例如 ：serviceHost:'http://1.1.1.1:80/_AMapService',
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
