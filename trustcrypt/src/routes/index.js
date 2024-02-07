import {createRouter, createWebHistory} from 'vue-router'

import Home from "../components/pages/home/Home.vue";
import Products from "../components/pages/products/Products.vue";
import Blog from "../components/pages/blog/Blog.vue";
import Contacts from "../components/pages/contacts/Contacts.vue";
import ProductPage from "../components/pages/products/ProductPage.vue";
import BlogPage from "../components/pages/blog/BlogPage.vue";
import Login from "../components/pages/login/Login.vue";
import Register from "../components/pages/Register/Register.vue";
import Profile from "../components/pages/profile/Profile.vue";

const routes = [
    {path: '/', name: 'Home', component: Home,  exact: true},
    {path: '/products', name: 'Products', component: Products,  exact: true},
    {path: '/products/:id', name: 'ProductPage', component: ProductPage,  exact: true},
    {path: '/blog', name: 'Blog', component: Blog,  exact: true},
    {path: '/blog/:id', name: 'BlogPage', component: BlogPage,  exact: true},
    {path: '/contacts', name: 'Contacts', component: Contacts,  exact: true},
    {path: '/login', name: 'Login', component: Login,  exact: true},
    {path: '/register', name: 'Register', component: Register,  exact: true},
    {path: '/profile/:id', name: 'Profile', component: Profile,  exact: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router