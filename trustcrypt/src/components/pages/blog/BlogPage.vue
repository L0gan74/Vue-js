<script setup lang="ts">

import {useRoute} from "vue-router";
import {onBeforeMount, ref,} from "vue";
import axios, {AxiosResponse} from "axios";
import {BlogsItem} from "../../../interface/Product";

const route = useRoute()

const item = ref<BlogsItem | null>(null)
const isLoading = ref(false)

const getBlogs = async () => {
  try {
    isLoading.value = true
    const {data}: AxiosResponse<BlogsItem> = await axios.get(`https://0f63305226082b32.mokky.dev/blogs/${route.params.id}`)
    item.value = data
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(getBlogs)

const blogs = ref<BlogsItem[]>([])

const getBlogsLimit = async () => {
  try {
    isLoading.value = true
    const {data}: AxiosResponse<BlogsItem[]> = await axios.get(`https://0f63305226082b32.mokky.dev/blogs?limit=3`)
    blogs.value = data.items
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(getBlogsLimit)

</script>

<template>
  <main class="main">
    <router-link class="breadcrumb" to="/blog">
      Вернутся на страницу Продуктов
      <img src="/src/assets/img/breadcrumb.png" alt="img"/>
    </router-link>
    <div v-if="isLoading">
      <h1>Загрузка данных</h1>
    </div>
    <div v-else class="blog-wrapper">
      <div class="blog-item">
        <h1>
          {{ item.name }}
        </h1>
        <div class="blog-item__review">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                  d="M9 3C5.25 3 2.0475 5.3325 0.75 8.625C2.0475 11.9175 5.25 14.25 9 14.25C12.75 14.25 15.9525 11.9175 17.25 8.625C15.9525 5.3325 12.75 3 9 3ZM9 12.375C6.93 12.375 5.25 10.695 5.25 8.625C5.25 6.555 6.93 4.875 9 4.875C11.07 4.875 12.75 6.555 12.75 8.625C12.75 10.695 11.07 12.375 9 12.375ZM9 6.375C7.755 6.375 6.75 7.38 6.75 8.625C6.75 9.87 7.755 10.875 9 10.875C10.245 10.875 11.25 9.87 11.25 8.625C11.25 7.38 10.245 6.375 9 6.375Z"
                  fill="#ECF1F0"/>
            </svg>
            {{ item.views }}
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                  d="M6.75 8.25H5.25V9.75H6.75V8.25ZM9.75 8.25H8.25V9.75H9.75V8.25ZM12.75 8.25H11.25V9.75H12.75V8.25ZM14.25 3H13.5V1.5H12V3H6V1.5H4.5V3H3.75C2.9175 3 2.2575 3.675 2.2575 4.5L2.25 15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C15.075 16.5 15.75 15.825 15.75 15V4.5C15.75 3.675 15.075 3 14.25 3ZM14.25 15H3.75V6.75H14.25V15Z"
                  fill="#ECF1F0"/>
            </svg>
            Дата публикации: {{ item.date }}
          </div>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_203_940)">
                <path
                    d="M12.2356 10.6665C11.9362 10.6676 11.6402 10.7292 11.3653 10.8476C11.0903 10.966 10.8421 11.1387 10.6356 11.3553L5.21781 8.64423C5.35108 8.24012 5.35108 7.80389 5.21781 7.39978L10.6445 4.63978C11.0332 5.0494 11.5603 5.29985 12.1234 5.34247C12.6864 5.3851 13.2453 5.21684 13.6912 4.8704C14.1371 4.52397 14.4383 4.0241 14.5362 3.46797C14.6341 2.91184 14.5218 2.33917 14.221 1.86126C13.9202 1.38336 13.4524 1.03437 12.9086 0.882122C12.3649 0.729874 11.7839 0.785247 11.2787 1.03748C10.7735 1.28971 10.3801 1.72078 10.175 2.2469C9.96987 2.77302 9.96771 3.3566 10.1689 3.88423L4.79559 6.61756C4.50539 6.26265 4.11252 6.00618 3.67084 5.88331C3.22916 5.76043 2.76028 5.77718 2.32849 5.93123C1.8967 6.08529 1.52312 6.36913 1.25897 6.74384C0.994821 7.11854 0.853027 7.56578 0.853027 8.02423C0.853027 8.48268 0.994821 8.92991 1.25897 9.30462C1.52312 9.67933 1.8967 9.96316 2.32849 10.1172C2.76028 10.2713 3.22916 10.288 3.67084 10.1652C4.11252 10.0423 4.50539 9.78581 4.79559 9.43089L10.1556 12.1287C10.065 12.3719 10.0184 12.6292 10.0178 12.8887C10.0178 13.3282 10.1481 13.7578 10.3923 14.1233C10.6365 14.4887 10.9836 14.7735 11.3896 14.9417C11.7957 15.1099 12.2425 15.1539 12.6736 15.0682C13.1046 14.9825 13.5006 14.7708 13.8114 14.46C14.1222 14.1492 14.3338 13.7533 14.4196 13.3222C14.5053 12.8911 14.4613 12.4443 14.2931 12.0383C14.1249 11.6322 13.8401 11.2851 13.4746 11.041C13.1092 10.7968 12.6795 10.6665 12.24 10.6665H12.2356Z"
                    fill="#ECF1F0"/>
              </g>
              <defs>
                <clipPath id="clip0_203_940">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <img class="blog-item__img" :src="item.img" alt="img"/>
        <p>
          {{ item.description }}
        </p>
      </div>
      <div class="blog-aside">
        <h2>
          Популярные статьи
        </h2>
        <div class="blog-aside__categories">
          <button class="_active" type="button">
            За день
          </button>
          <button type="button">
            За неделю
          </button>
          <button type="button">
            За месяц
          </button>
        </div>
        <div class="blog-aside__item" v-for="blog in blogs" :key="blog.id">
          <div class="blog-aside__item-left">
            <img class="blog-aside__item-img" :src="blog.img" alt="img"/>
            <div class="blog-aside__item-categories">
              {{ blog.categories }}
            </div>
            <div class="blog-aside__item-review">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                    d="M9 3C5.25 3 2.0475 5.3325 0.75 8.625C2.0475 11.9175 5.25 14.25 9 14.25C12.75 14.25 15.9525 11.9175 17.25 8.625C15.9525 5.3325 12.75 3 9 3ZM9 12.375C6.93 12.375 5.25 10.695 5.25 8.625C5.25 6.555 6.93 4.875 9 4.875C11.07 4.875 12.75 6.555 12.75 8.625C12.75 10.695 11.07 12.375 9 12.375ZM9 6.375C7.755 6.375 6.75 7.38 6.75 8.625C6.75 9.87 7.755 10.875 9 10.875C10.245 10.875 11.25 9.87 11.25 8.625C11.25 7.38 10.245 6.375 9 6.375Z"
                    fill="#F9F9F9"/>
              </svg>
              24К
            </div>
          </div>
          <div class="blog-aside__item-text">
            <h4>{{ blog.name }}</h4>
            <p>{{ blog.description }}</p>
            <router-link :key="blog.id" :to="`/blog/${blog.id}`">
              Просмотреть
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.blog {

  &-wrapper {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 27px;
    @media(max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  &-item {
    h1 {
      padding-bottom: 32px;
      @media(max-width: 991px) {
        padding-bottom: 16px;
      }
    }

    &__review {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 32px;

      div {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #ECF1F0;
        font-size: 12px;
        font-weight: 600;
        border-radius: 1000px;
        border: 0.5px solid rgba(255, 255, 255, 0.10);
        background: #000000b5;
        padding: 7px 12px;
        @media(max-width: 991px) {
          font-size: 10px;
          padding: 5px 10px;
        }
      }

      a {
        border-radius: 100px;
        background: #0FAE96;
        display: flex;
        width: 34px;
        height: 34px;
        justify-content: center;
        align-items: center;
        @media(max-width: 991px) {
          width: 28px;
          height: 28px;
        }
      }
    }

    &__img {
      border-radius: 8px;
      margin-bottom: 32px;
      display: block;
      width: 100%;
      max-height: 460px;
      object-fit: cover;
      @media(max-width: 991px) {
        margin-bottom: 20px;
      }
    }

    p {
      color: #D4D4D4;
      font-size: 17px;
      padding-bottom: 32px;
      @media(max-width: 991px) {
        padding-bottom: 20px;
        font-size: 14px;
        line-height: 150%;
      }
    }
  }

  &-aside {
    h2 {
      padding-bottom: 64px;
      @media(max-width: 991px) {
        padding-bottom: 16px;
      }
    }

    &__categories {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;

      button {
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        background: rgba(255, 255, 255, 0.03);
        padding: 12px 16px;
        color: #D4D4D4;
        font-size: 17px;
        transition: 0.5s;

        &:hover {
          box-shadow: 0 0 9px white;
        }

        @media(max-width: 991px) {
          font-size: 14px;
        }

        &._active {
          border: 1px solid #ECF1F0;
          background: #ECF1F0;
          color: #11011E;
        }
      }
    }

    &__item {
      margin-bottom: 32px;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-gap: 34px;

      @media(max-width: 767px) {
        display: block;
      }

      &-left {
        position: relative;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          @media(max-width: 767px) {
            height: 150px;
            margin-bottom: 10px;
          }
        }
      }

      &-categories {
        padding: 8px 12px;
        border-radius: 60px;
        background: #0FAE96;
        color: #ECF1F0;
        font-size: 14px;
        font-weight: 600;
        position: absolute;
        left: 10px;
        top: 10px;
      }

      &-review {
        position: absolute;
        left: 10px;
        bottom: 10px;
        display: flex;
        align-items: center;
        gap: 4px;
        color: #ECF1F0;
        font-size: 12px;
        font-weight: 600;
        border-radius: 1000px;
        border: 0.5px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.7098039216);
        padding: 7px 12px;
      }

      &-text {
        h4 {
          color: #ECF1F0;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        p {
          color: #D4D4D4;
          font-size: 17px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }

        a {
          border-radius: 4px;
          border: 1px solid #0FAE96;
          padding: 12px;
          color: #0FAE96;
          font-size: 17px;
          margin-top: 10px;
          display: inline-block;
        }
      }
    }
  }
}
</style>