<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">


</style>