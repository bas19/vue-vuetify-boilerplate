import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/vue-router'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
