import Vue from 'vue'
import App from './App.vue'
const VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 200
}
import imagePreloader from 'vue-image-preloader'
Vue.use(imagePreloader)
new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.directive('img', function(url) {
	const img = new Image();
	img.src = url;
	img.onload = function() {
		this.el.src = url;
	}.bind(this)

});
