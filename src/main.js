import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
// const element = require('@/utils/globComponents') //按需引入element组件
Vue.config.productionTip = false
Vue.use(element)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')