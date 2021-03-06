import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCustomers from '@/components/AppCustomers'
import AppProducts from '@/components/AppProducts'
import SingleCustomer from '@/components/SingleCustomer'
 
Vue.use(VueRouter)

const routes = [
  { path: '/customers', component: AppCustomers },
  { path:'/products', component: AppProducts },
  { path:'/customer/:id', component: SingleCustomer },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
