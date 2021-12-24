import Vue from 'vue'
import VeLine from 'v-charts/lib/line.common'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://opendata.resas-portal.go.jp'
axios.defaults.headers = {
  "X-API-KEY": "YsMpIaaMich4VZKlleAq8PrG64h6M8BwVpVLGpkS",
}

new Vue({
  render: h => h(App),
}).$mount('#app')
