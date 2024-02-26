<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import {FormUsers} from "../../../interface/Product";
import {useRouter} from "vue-router";
import { Form, Field } from 'vee-validate';

const router = useRouter()

const loginForm = ref<FormUsers>({
  fullName: "",
  email: "",
  password: ""
})


const submitForm = () => {

  axios.post<FormUsers>(`https://0f63305226082b32.mokky.dev/auth`, loginForm.value)

      .then(response => {
        localStorage.setItem("token", response.data.token)
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
    <h1>Вход</h1>
    <input v-model="loginForm.fullName" type="text" placeholder="Введите Имя">
    <input v-model="loginForm.email" type="email" placeholder="Введите почту">
    <input v-model="loginForm.password" type="text" placeholder="Введите пароль">
    <button type="submit" class="trustcrypt-button__green">Войти</button>
    <router-link to="/register">
      У вас нету аккаунта?
    </router-link>
  </form>
</template>

<style lang="scss">
.form {
  width: 600px;
  height: auto;
  margin: auto;
  border-radius: 8px;
  border: 1px solid white;
  padding: 15px;
  @media(max-width: 767px){
    width: 100%;
  }

  h1 {
    text-align: center;
    padding-bottom: 15px;
  }

  input {
    width: 100%;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 15px;
    color: black;
    font-size: 16px;
    outline: none;
    border-radius: 8px;

    &::placeholder {
      color: black;
    }
  }

  button {
    width: 200px;
    margin: 0 auto;
  }

  a {
    font-size: 17px;
    color: #0FAE96;
    display: block;
    padding: 15px 0 0 0;
  }

}
</style>