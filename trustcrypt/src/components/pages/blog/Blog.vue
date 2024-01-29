<script setup>

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
      <div class="main-wrapper__item" v-for="item in items" :key="item.id">
        <img src="/src/assets/img/product.png"/>
        <h4>{{ item.name }}</h4>
        <p>
          {{ item.description }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>