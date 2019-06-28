<template>
    <div>
        <ul>
            <li>Full name: {{ customer.fullName }}</li>
            <li>Email: {{ customer.email }}</li>
            <h6>Products:</h6>
            <ul>
                <li v-for="(product, index) in customer.products" :key="index">
                    {{ product }}
                </li>
            </ul>
        </ul>
        <router-link class="btn-primary btn" to="/customers">All customers</router-link>        
    </div>
</template>

<script>
import { customerService } from '../services/customers'


export default {
    computed: {        
            customer() {
                return customerService.find(this.$route.params.id)
            } 
    }
}
</script>

<style>

</style>
