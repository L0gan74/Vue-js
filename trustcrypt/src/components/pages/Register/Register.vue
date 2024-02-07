<script setup lang="ts">
import {onMounted, ref} from "vue";
import {FormUsers} from "../../../interface/Product.js";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()

const loginForm = ref<FormUsers>({
  fullName: "",
  email: "",
  password: ""
})
const submitForm = () => {

  axios.post<FormUsers>(`https://0f63305226082b32.mokky.dev/register`, loginForm.value)

      .then(response => {
        console.log(response.data)
        router.push('/login')
      })

      .catch(err => {
        console.log(err)
      })

}

onMounted(() => {
  submitForm
})
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <h1>Регистрация</h1>
    <input v-model="loginForm.fullName" type="text" placeholder="Введите Имя">
    <input v-model="loginForm.email" type="email" placeholder="Введите почту">
    <input v-model="loginForm.password" type="text" placeholder="Введите пароль">
    <button type="submit" class="trustcrypt-button__green">Зарегистрироваться</button>
    <router-link to="/login">
      У вас уже есть аккаунт?
    </router-link>
  </form>
</template>

<style scoped lang="scss">

</style>