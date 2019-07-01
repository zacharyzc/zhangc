import Vue from 'vue'
import App from './App.vue'
import store from '@/store'           //Vuex配置
import router from '@/router'         //路由配置

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
