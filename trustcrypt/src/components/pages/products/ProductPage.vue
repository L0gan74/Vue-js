<script setup lang="ts">
import {productsStore} from "../../../stores/store.ts";
import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import  {AllProductItem} from "../../../interface/Product";
import SwiperProduct from "./SwiperProduct.vue";
import axios from "axios";


const store = productsStore()
const route = useRoute()

const item = computed<AllProductItem>(() => {
  return store.items.find((item) => item.id === Number(route.params.id))
})


//const item = ref(null)
//
//const getProduct = async () => {
//  try {
//    const {data} = await axios.get(`https://0f63305226082b32.mokky.dev/products/${route.params.id}`)
//    item.value = data
//  }
//  catch (err){
//    console.log(err)
//  }
//}
//
//onMounted(getProduct)
</script>


<template>
  <main class="main">
    <router-link class="breadcrumb" to="/products">
      Вернутся на страницу Продуктов
      <img src="/src/assets/img/breadcrumb.png" alt="img"/>
    </router-link>
    <div class="product">
      <img class="product-img" :src="item.img" alt="img"/>
      <div class="product-description">
        <h1>{{ item.name }}</h1>
        <h2>Описание</h2>
        <p>
          {{ item.description }}
        </p>
        <p>
          {{ item.alldescription }}
        </p>
        <a href="#">
          Подробнее
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

.product {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-gap: 60px;
  @media(max-width: 991px){
    display: block;
  }

  &-img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    @media(max-width: 991px){
      margin-bottom: 32px;
    }
  }

  &-description {
    h1 {
      color: #ECF1F0;
      font-size: 34px;
      font-weight: 700;
      padding-bottom: 32px;
      @media(max-width: 1220px){
        font-size: 26px;
      }
      @media(max-width: 991px){
        font-size: 21px;
        padding-bottom: 16px;
      }
    }

    h2 {
      color: #ECF1F0;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      padding-bottom: 16px;
      @media(max-width: 1220px){
        font-size: 20px;
      }
      @media(max-width: 991px){
        font-size: 17px;
      }
    }
    p{
      color: #D4D4D4;
      font-size: 17px;
      padding-bottom: 16px;
      @media(max-width: 991px){
        font-size: 14px;
      }
    }
    a{
      color: #D4D4D4;
      font-size: 17px;
      text-decoration-line: underline;
    }
  }
}

</style>