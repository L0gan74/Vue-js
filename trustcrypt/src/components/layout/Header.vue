<script setup>

import {ref} from "vue";
import axios from "axios";

const burger = ref(false)

const users = async () => {
  try {
    const response = await axios.get(`https://0f63305226082b32.mokky.dev/users`,{
      headers:{
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    })
  } catch (err) {

  }
}


</script>

<template>
  <header class="header">
    <img class="header-logo" src="/src/assets/img/logo.svg" alt="logo"/>
    <ul class="header-nav">
      <li>
        <router-link to="/" class="header-nav__link" href="#">Главная</router-link>
      </li>
      <li>
        <router-link to="/products" class="header-nav__link">Продукты</router-link>
      </li>
      <li>
        <router-link to="/blog" class="header-nav__link">Блог</router-link>
      </li>
      <li>
        <router-link to="/contacts" class="header-nav__link">Контакты</router-link>
      </li>
      <li>
        <router-link to="/login" class="header-nav__link">Войти</router-link>
      </li>
      <li>
        <router-link to="/register" class="header-nav__link">Зарегестрироваьтся</router-link>
      </li>
    </ul>
    <div class="header-social">
      <h4>
        {{}}
      </h4>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3307_252)">
            <path
                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 15.996 10.824 15.324C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.4083 10.1498 14.4072 10.1102 14.3968 10.0726C14.3863 10.0349 14.3668 10.0004 14.34 9.972C14.268 9.912 14.172 9.936 14.088 9.948C13.98 9.972 12.3 11.088 9.024 13.296C8.544 13.62 8.112 13.788 7.728 13.776C7.296 13.764 6.48 13.536 5.868 13.332C5.112 13.092 4.524 12.96 4.572 12.54C4.596 12.324 4.896 12.108 5.46 11.88C8.964 10.356 11.292 9.348 12.456 8.868C15.792 7.476 16.476 7.236 16.932 7.236C17.028 7.236 17.256 7.26 17.4 7.38C17.52 7.476 17.556 7.608 17.568 7.704C17.556 7.776 17.58 7.992 17.568 8.16Z"
                fill="#ECF1F0"/>
          </g>
          <defs>
            <clipPath id="clip0_3307_252">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3307_255)">
            <path
                d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM16.8813 9.83C16.8862 9.9325 16.8875 10.035 16.8875 10.135C16.8875 13.26 14.5113 16.8612 10.1638 16.8612C8.87912 16.8634 7.62121 16.4944 6.54125 15.7987C6.725 15.8212 6.91375 15.83 7.105 15.83C8.2125 15.83 9.23125 15.4538 10.04 14.8188C9.54715 14.8091 9.06959 14.6459 8.67389 14.3519C8.27819 14.0579 7.98406 13.6478 7.8325 13.1788C8.18644 13.2461 8.55106 13.2319 8.89875 13.1375C8.36381 13.0293 7.88275 12.7395 7.53714 12.3171C7.19152 11.8947 7.00263 11.3658 7.0025 10.82V10.7913C7.32125 10.9675 7.68625 11.075 8.07375 11.0875C7.57225 10.7537 7.21723 10.2408 7.08131 9.65392C6.94538 9.06699 7.03881 8.45032 7.3425 7.93C7.93619 8.66 8.67658 9.25718 9.51571 9.68289C10.3548 10.1086 11.274 10.3533 12.2137 10.4012C12.0943 9.89414 12.1457 9.36176 12.36 8.88688C12.5743 8.412 12.9395 8.02124 13.3988 7.77533C13.8582 7.52942 14.3858 7.44215 14.8999 7.52709C15.4139 7.61203 15.8855 7.86441 16.2412 8.245C16.7702 8.14034 17.2775 7.94632 17.7413 7.67125C17.565 8.21892 17.1958 8.68397 16.7025 8.98C17.1711 8.92356 17.6286 8.7976 18.06 8.60625C17.7431 9.08112 17.3439 9.49555 16.8813 9.83Z"
                fill="#ECF1F0"/>
          </g>
          <defs>
            <clipPath id="clip0_3307_255">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3307_258)">
            <path
                d="M14.0037 11.7913L11.1963 10.4813C10.9513 10.3675 10.75 10.495 10.75 10.7662V13.2338C10.75 13.505 10.9513 13.6325 11.1963 13.5188L14.0025 12.2087C14.2488 12.0938 14.2487 11.9063 14.0037 11.7913ZM12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM12 16.875C5.8575 16.875 5.75 16.3213 5.75 12C5.75 7.67875 5.8575 7.125 12 7.125C18.1425 7.125 18.25 7.67875 18.25 12C18.25 16.3213 18.1425 16.875 12 16.875Z"
                fill="#ECF1F0"/>
          </g>
          <defs>
            <clipPath id="clip0_3307_258">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_3307_262)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.96998 9.862 9.84598 9.961 9.64698C10.061 9.44898 10.011 9.27598 9.936 9.12698C9.862 8.97798 9.268 7.51498 9.02 6.91998C8.779 6.34098 8.534 6.41998 8.352 6.40998C8.178 6.40198 7.98 6.39998 7.782 6.39998C7.584 6.39998 7.262 6.47398 6.99 6.77198C6.717 7.06898 5.95 7.78798 5.95 9.25098C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7853 8.48037 21.3093 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5773 2.10529 13.7538 2.108 11.893C2.11 6.44298 6.544 2.00898 11.997 2.00898C14.637 2.00898 17.119 3.03898 18.985 4.90698C19.9054 5.82356 20.6349 6.91355 21.1313 8.11388C21.6277 9.31421 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785ZM20.405 3.48798C19.3032 2.3789 17.9922 1.49952 16.5481 0.90078C15.1039 0.302044 13.5553 -0.00413728 11.992 -2.00576e-05C5.438 -2.00576e-05 0.102 5.33498 0.1 11.892C0.096963 13.9787 0.644374 16.0294 1.687 17.837L0 24L6.304 22.346C8.04787 23.2961 10.0021 23.7939 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79008 22.9874 7.34601C22.3901 5.90195 21.5124 4.59065 20.405 3.48798Z"
                  fill="#ECF1F0"/>
          </g>
          <defs>
            <clipPath id="clip0_3307_262">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
    <button @click="burger = !burger" class="header-burger" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4.66675 21H23.3334M4.66675 7H23.3334H4.66675ZM4.66675 14H23.3334H4.66675Z" stroke="#ECF1F0"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div v-if="burger" class="header-menu">
      <button type="button">X</button>
      <ul>
        <li>
          <router-link to="/" class="header-nav__link" href="#">Главная</router-link>
        </li>
        <li>
          <router-link to="/products" class="header-nav__link">Продукты</router-link>
        </li>
        <li>
          <router-link to="/blog" class="header-nav__link">Блог</router-link>
        </li>
        <li>
          <router-link to="/contacts" class="header-nav__link">Контакты</router-link>
        </li>
        <li>
          <router-link to="/login" class="header-nav__link">Войти</router-link>
        </li>
        <li>
          <router-link to="/register" class="header-nav__link">Зарегестрироваьтся</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  padding: 20px 0;
  display: flex;
  align-items: center;
  @media(max-width: 991px) {
    justify-content: space-between;
  }

  &-logo {
    @media(max-width: 991px) {
      width: 150px;
    }
  }

  &-nav {
    width: 570px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    @media(max-width: 991px) {
      display: none;
    }

    &__link {
      color: #ECF1F0;
      font-size: 17px;
    }
  }

  &-social {
    display: flex;
    gap: 20px;
    margin-left: 5%;
    @media(max-width: 991px) {
      display: none;
    }
  }

  &-burger {
    z-index: 3;
    @media(min-width: 992px) {
      display: none;
    }
  }

  &-menu {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
    background: #000000e3;


    li {
      padding-bottom: 15px;
    }
  }
}

</style>