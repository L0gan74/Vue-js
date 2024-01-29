import {defineStore} from 'pinia'
import axios from 'axios'
import {ProductItemStore, ProductItem} from "../interface/Product";


export const productsStore = defineStore('products', {
    state: ():ProductItemStore => ({
        items: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await axios.get<ProductItem[]>(`https://0f63305226082b32.mokky.dev/products`)
                this.items = response.data
            } catch (err) {
                console.log(err)
            }
        },
    },
})