@<template>
    <div>
        <CustomerForm/>
        <ul>
            <li v-for="(customer, index) in customers" :key="index">
                 {{ customer.fullName }} - {{ customer.email }}
                <button class="btn-outline-primary btn" @click="customerDelete(index)">Delete</button>
                <router-link class="btn-light btn" :to="`/customer/${index}`">Latest Purchases</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import CustomerForm from './CustomerForm'
import { customerService } from '../services/customers'

export default {
    components: {
    CustomerForm
  },
    data() {
        return {
            customers: customerService.list()
        }
    },

    methods: {
        customerDelete(index) {
            this.customers.splice(index, 1)
            this.$router.push('/customers')
        }
    }
}
</script>

