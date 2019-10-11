import Vue from 'vue'
import App from './App.vue'
const VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 200
}
new Vue({
  render: h => h(App),
}).$mount('#app')
