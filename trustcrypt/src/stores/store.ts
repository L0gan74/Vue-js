import {defineStore} from 'pinia'
import axios from 'axios'
import {ProductItemStore, ProductItem, BlogsItem} from "../interface/Product";


export const productsStore = defineStore('products', {
    state: (): ProductItemStore => ({
        items: [],
        blogs: []
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
        async fetchBlogs() {
            try {
                const response = await axios.get<BlogsItem[]>('https://0f63305226082b32.mokky.dev/blogs')
                this.blogs = response.data
            } catch (err) {
                console.log(err)
            }
        },
        async fetchBlogsLimit() {
            try {
                const response = await axios.get<BlogsItem[]>("https://0f63305226082b32.mokky.dev/blogs?limit=3")
                this.blogs = response.data
            } catch (err) {
                console.log(err)
            }
        }
    },
})