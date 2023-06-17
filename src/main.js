import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// 全局配置 axios的请求跟路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.$http = axios

// 今后， 在每个.vue 组件中要发起请求， 直接调用 this.$http.xxx
// 但是，把axios 挂载到 Vue 原型上， 有一个缺点： 不利于api接口的服用
new Vue({
  render: h => h(App)
}).$mount('#app')
