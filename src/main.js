import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  render: h => h(App)
}).$mount('#app')
