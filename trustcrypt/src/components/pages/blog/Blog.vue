<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios, {AxiosResponse} from "axios";
import {BlogsItem} from "../../../interface/Product";

const categories = [
  {id: 1, name: 'Все продукты', categories: "/", active:false},
  {id: 2, name: 'Советы', categories: "/?categories=adviсe", active:false},
  {id: 3, name: 'Разработка', categories: "/?categories=development", active:false},
]

const blogs = ref<BlogsItem[]>([])
const isLoading = ref(false)
const axiosItems = async (categoryId = '') => {
  try {
    isLoading.value = true
    const {data}: AxiosResponse<BlogsItem[]> = await axios.get(`https://0f63305226082b32.mokky.dev/blogs${categoryId}`)
    blogs.value = data
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

onMounted(axiosItems)
</script>

<template>
  <main class="main blog">
    <h1>
      Последние события в мире киберпространства
    </h1>
    <div class="main-subtitle">
      Ознакомьтесь с информацией, чтобы быть в курсе новейших киберугроз и получить советы экспертов по безопасности.
    </div>
    <div class="main-categories">
      <button type="button" v-for="category in categories" :key="category.id"
              @click="axiosItems(category.categories)">
        {{ category.name }}
      </button>
    </div>
    <div class="main-wrapper">
      <div v-if="isLoading">
        <h1>Загрузка данных</h1>
      </div>
      <router-link v-else v-for="blog in blogs" :key="blog.id" :to="`/blog/${blog.id}`">
        <div class="main-wrapper__item">
          <div class="main-wrapper__item-image">
          <span class="main-wrapper__item-categories">
            {{ blog.categories }}
          </span>
            <div class="main-wrapper__item-publication">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                      d="M9 3C5.25 3 2.0475 5.3325 0.75 8.625C2.0475 11.9175 5.25 14.25 9 14.25C12.75 14.25 15.9525 11.9175 17.25 8.625C15.9525 5.3325 12.75 3 9 3ZM9 12.375C6.93 12.375 5.25 10.695 5.25 8.625C5.25 6.555 6.93 4.875 9 4.875C11.07 4.875 12.75 6.555 12.75 8.625C12.75 10.695 11.07 12.375 9 12.375ZM9 6.375C7.755 6.375 6.75 7.38 6.75 8.625C6.75 9.87 7.755 10.875 9 10.875C10.245 10.875 11.25 9.87 11.25 8.625C11.25 7.38 10.245 6.375 9 6.375Z"
                      fill="#ECF1F0"/>
                </svg>
                {{ blog.views }}К
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                      d="M6.75 8.25H5.25V9.75H6.75V8.25ZM9.75 8.25H8.25V9.75H9.75V8.25ZM12.75 8.25H11.25V9.75H12.75V8.25ZM14.25 3H13.5V1.5H12V3H6V1.5H4.5V3H3.75C2.9175 3 2.2575 3.675 2.2575 4.5L2.25 15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM14.25 15H3.75V6.75H14.25V15Z"
                      fill="#ECF1F0"/>
                </svg>
                {{ blog.date }}
              </div>
            </div>
            <img :src="blog.img" alt="img"/>
          </div>
          <h4>{{ blog.name }}</h4>
          <p>
            {{ blog.description }}
          </p>
        </div>
      </router-link>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>