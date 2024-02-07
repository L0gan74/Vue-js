<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {productsStore} from "../../../stores/store.ts";

const store = productsStore()

const router = useRouter()
const goToProductId = (id) => {
  router.push(({name: "ProductPage", params: {id}}))
}

onMounted(async () => {
  await store.fetchProducts()
})



/* const items = ref([])

const axiosItems = async () => {
  try {
    const {data} = await axios.get("https://0f63305226082b32.mokky.dev/products")
    items.value = data
  } catch (err) {
    console.log(err)
  }
}

 onMounted(axiosItems)*/


</script>

<template>
  <main class="main products">
    <h1>
      Наши продукты
    </h1>
    <div class="main-subtitle">
      Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.
    </div>
    <div class="main-categories">
      <button class="_active" type="button">
        Все продукты
      </button>
      <button type="button">
        1 категория
      </button>
      <button type="button">
        2 категория
      </button>
      <button type="button">
        3 категория
      </button>
    </div>
    <div class="main-wrapper">
      <div class="main-wrapper__item"
           v-for="item in store.items" :key="item.id"
           @click="goToProductId(item.id)">
        <div class="main-wrapper__item-image">
          <img :src="item.img" alt="img"/>
        </div>
        <h4>{{ item.name }}</h4>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  h1 {
    color: #ECF1F0;
    font-size: 34px;
    font-weight: 700;
    padding-bottom: 32px;
    @media(max-width: 1220px) {
      font-size: 26px;
    }
    @media(max-width: 991px) {
      font-size: 21px;
      padding-bottom: 16px;
    }
  }

  &-subtitle {
    width: 611px;
    padding-bottom: 32px;
    color: #D4D4D4;
    font-size: 17px;
    @media(max-width: 991px) {
      padding-bottom: 16px;
      width: 100%;
    }
  }

  &-categories {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
    @media(max-width: 991px) {
      gap: 16px;
    }

    button {
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.03);
      width: 170px;
      height: 48px;
      color: #D4D4D4;
      font-size: 17px;
      transition: 0.5s;

      &:hover {
        box-shadow: 0 0 9px white;
      }

      @media(max-width: 991px) {
        font-size: 14px;
        width: 100px;
        padding: 12px 0;
        height: auto;
      }

      &._active {
        border: 1px solid #ECF1F0;
        background: #ECF1F0;
        color: #11011E;
      }
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    @media(max-width: 1220px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 767px) {
      grid-template-columns: 1fr;
    }

    &__item {
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.02);
      padding: 16px;
      position: relative;
      bottom: -6px;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        bottom: 0;
        box-shadow: 0 0 9px white;
      }

      &-image {
        position: relative;

        img {
          display: block;
          width: 100%;
          height: 215px;
          object-fit: cover;
          border-radius: 16px 16px 0px 0px;
        }
      }

      &-categories {
        position: absolute;
        top: 16px;
        left: 16px;
        padding: 12px;
        border-radius: 60px;
        background: #0FAE96;
        color: #ECF1F0;
        font-size: 14px;
        font-weight: 600;
      }

      &-publication {
        position: absolute;
        bottom: 16px;
        left: 16px;
        display: flex;
        align-items: center;
        gap: 8px;

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
        }
      }

      h4 {
        color: #ECF1F0;
        font-size: 24px;
        font-weight: 700;
        padding: 16px 0;
        height: 91px;
        @media(max-width: 991px) {
          font-size: 21px;
          height: auto;
        }
      }

      p {
        color: #D4D4D4;
        font-size: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>