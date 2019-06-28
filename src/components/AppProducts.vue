<template>
    <div>
        <label for="fullName">Search</label>
        <input  type="text" id="search" />
        <ul>
            <li v-for="(product, index) in products" :key="index">
                 {{ product.name }} = {{ product.quantity }}
                <button @click="increment(product)">+</button>                 
                <button @click="decrement(product)">-</button>     
            </li>
        </ul>
    </div>
</template>

<script>
import { productService } from "../services/products"
export default {
    data() {
        return {
            products: productService.list()
        }
    },

    methods: {
        increment(product) {
            return productService.increment(product)
        },

        decrement(product) {
            if(product.quantity !== 0){
                return productService.decrement(product)
            } else {
                return alert('Nema vise proizvoda');
            }
        }
    }
}
</script>

<style>

</style>
