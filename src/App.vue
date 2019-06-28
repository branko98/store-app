<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Store-app</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/products">Products</router-link>
            <router-link class="nav-item nav-link"  to="/customers">Customers</router-link>
          </div>
        </div>
      </nav>
      <router-view/>
    </div> 
  </div>
</template>

<script>
import AppCustomers from './components/AppCustomers.vue'

export default {
  name: 'app',
  components: {
    AppCustomers
  },

  methods:{
    addCustomer (customer) {
      this.customers.push({ ...customer })
      this.$router.push('/customers')
    }
  },
}
</script>


