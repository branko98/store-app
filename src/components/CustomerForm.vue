<template>
<form @submit.prevent="handleAdd" class="form-group">
    <div>
      <label for="fullName">Full Name</label>
      <input class="form-control" type="text" id="fullName" v-model="newCustomer.fullName" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input class="form-control" type="email" id="email" v-model="newCustomer.email" required />
    </div>

    <div>
      <button class="btn-primary btn" type="submit">Add customer</button>
    </div>
</form>
</template>

<script>
import { customerService } from '../services/customers'
export default {

    data() {
        return {
            newCustomer: this.getDefaults()
        }
    },

    methods: {
        getDefaults() {
            return {
                email: '',
                fullName: '',
            }
        },

        handleAdd () {
            customerService.add(this.newCustomer)
            this.newCustomer = this.getDefaults()
        }
    }
}
</script>

