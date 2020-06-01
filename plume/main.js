import Vue from 'vue'
import App from './App'


import abrosia from './pages/abrosia/abrosiahome.vue'
Vue.component('abrosia',abrosia)

import plan from './pages/plan/planhome.vue'
Vue.component('plan',plan)

import learn from './pages/learn/learn.vue'
Vue.component('learn',learn)

import me from './pages/me/mehome.vue'
Vue.component('me',me)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
