import Vue from 'vue'
import App from './App'
// request
import request from '@/utils/request'
Vue.prototype.$request = request

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
