<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <div class="home">
    <div class="home-item">
      <div class="home-item__text">
        <h3>
          Передовая кибербезопасность для любой компании
        </h3>
        <div class="trustcrypt-text">
          Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса.
        </div>
        <router-link to="products" class="trustcrypt-button__green">Посмотреть продукты</router-link>
      </div>
      <img src="/src/assets/img/home.png" alt="img"/>
    </div>
    <div class="home-item">
      <swiper
          :pagination="{
      dynamicBullets: true,
    }"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <img src="/src/assets/img/swiper-1.png" alt="img"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/img/swiper-2.png" alt="img"/>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/img/swiper-3.png" alt="img"/>
        </swiper-slide>
      </swiper>
      <div class="home-item__text _bottom">
        <h3>
          Кибербезопасность нового поколения
        </h3>
        <div class="trustcrypt-text">
          Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.
        </div>
      </div>
    </div>
    <div class="home-tools">
      <h3> Инструменты</h3>
      <div class="trustcrypt-text">Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым
        умыслом может вмешаться в вашу
        сеть.
      </div>
      <div class="home-tools__wrapper">
        <img src="/src/assets/img/tools.png" alt="img"/>
        <img src="/src/assets/img/tools.png" alt="img"/>
        <img src="/src/assets/img/tools.png" alt="img"/>
        <img src="/src/assets/img/tools.png" alt="img"/>
      </div>
    </div>
    <div class="home-safety">
      <h3>
        Наши продукты направлены на вашу безопасность.
      </h3>
      <div class="trustcrypt-text">
        Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.
      </div>
      <div class="home-safety__wrapper">
        <div class="home-safety__wrapper-item">
          <div class="home-safety__wrapper-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
              <g clip-path="url(#clip0_3334_56)">
                <path
                    d="M46 26.9C46 32.6287 43.6821 38.1227 39.5563 42.1735C35.4305 46.2243 29.8348 48.5 24 48.5C18.1652 48.5 12.5695 46.2243 8.44365 42.1735C4.31785 38.1227 2 32.6287 2 26.9L2.07333 6.332C8.55111 2.612 16.08 0.5 24.1222 0.5C32.0667 0.5 39.5467 2.588 46 6.212V26.9ZM26.4444 43.532C34.7311 42.356 41.1111 35.3 41.1111 26.9V9.116C35.9778 6.668 30.2089 5.3 24.1222 5.3C17.8889 5.3 11.9733 6.74 6.74222 9.284L6.88889 26.9C6.88889 35.3 13.3178 42.356 21.5556 43.532V38.9H26.4444V43.532ZM21.5556 34.1H14.2222L9.33333 26.9L16.6667 29.3H19.1111L21.5556 26.9H26.4444L28.8889 29.3H31.3333L38.6667 26.9L33.7778 34.1H26.4444L24 31.7L21.5556 34.1ZM9.33333 17.372C10.8978 15.86 13 15.02 15.4444 15.02C17.7667 15.02 19.9422 15.86 21.5556 17.372C19.9422 18.86 17.7667 19.7 15.4444 19.7C13 19.7 10.8978 18.86 9.33333 17.372ZM26.4444 17.372C28.0089 15.86 30.1111 15.02 32.5556 15.02C34.8778 15.02 37.0533 15.86 38.6667 17.372C37.0533 18.86 34.8778 19.7 32.5556 19.7C30.1111 19.7 28.0089 18.86 26.4444 17.372Z"
                    fill="#ECF1F0"/>
              </g>
              <defs>
                <clipPath id="clip0_3334_56">
                  <rect width="48" height="48" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="home-safety__wrapper-text">
            Анонимность
          </div>
        </div>
        <div class="home-safety__wrapper-item">
          <div class="home-safety__wrapper-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <g clip-path="url(#clip0_3334_25)">
                <path
                    d="M1.44 16H4.8C5.064 16 5.28 15.775 5.28 15.5V4.5H15.84C16.104 4.5 16.32 4.275 16.32 4V0.5C16.32 0.225 16.104 0 15.84 0H5.04C2.784 0 0.96 1.9 0.96 4.25V15.5C0.96 15.775 1.176 16 1.44 16ZM32.16 4.5H42.72V15.5C42.72 15.775 42.936 16 43.2 16H46.56C46.824 16 47.04 15.775 47.04 15.5V4.25C47.04 1.9 45.216 0 42.96 0H32.16C31.896 0 31.68 0.225 31.68 0.5V4C31.68 4.275 31.896 4.5 32.16 4.5ZM15.84 43.5H5.28V32.5C5.28 32.225 5.064 32 4.8 32H1.44C1.176 32 0.96 32.225 0.96 32.5V43.75C0.96 46.1 2.784 48 5.04 48H15.84C16.104 48 16.32 47.775 16.32 47.5V44C16.32 43.725 16.104 43.5 15.84 43.5ZM46.56 32H43.2C42.936 32 42.72 32.225 42.72 32.5V43.5H32.16C31.896 43.5 31.68 43.725 31.68 44V47.5C31.68 47.775 31.896 48 32.16 48H42.96C45.216 48 47.04 46.1 47.04 43.75V32.5C47.04 32.225 46.824 32 46.56 32ZM47.52 21.75H0.48C0.216 21.75 0 21.975 0 22.25V25.75C0 26.025 0.216 26.25 0.48 26.25H47.52C47.784 26.25 48 26.025 48 25.75V22.25C48 21.975 47.784 21.75 47.52 21.75Z"
                    fill="#ECF1F0"/>
              </g>
              <defs>
                <clipPath id="clip0_3334_25">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="home-safety__wrapper-text">
            Проверка на наличие угроз
          </div>
        </div>
        <div class="home-safety__wrapper-item">
          <div class="home-safety__wrapper-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                  d="M19.3333 12.2182L17.5556 13.9636L20.2222 16.5818C19.1111 17.2364 18.2222 18.3273 17.7778 19.6364H12.8889V21.8182H17.3333V24H12.8889V26.1818H17.3333V28.3636H12.8889V30.5455H17.7778C18.6667 33.1636 21.1111 34.9091 24 34.9091C26.8889 34.9091 29.3333 33.1636 30.2222 30.5455H35.1111V28.3636H30.6667V26.1818H35.1111V24H30.6667V21.8182H35.1111V19.6364H30.2222C29.7778 18.3273 28.8889 17.2364 27.7778 16.3636L30.4444 13.7455L28.8889 12.2182L25.7778 15.2727H24C23.5556 15.2727 22.8889 15.2727 22.4444 15.4909L19.3333 12.2182ZM21.7778 21.8182H26.2222V24H21.7778V21.8182ZM21.7778 26.1818H26.2222V28.3636H21.7778V26.1818ZM44 21.8182C44 33.8182 35.5556 45.1636 24 48C12.4444 45.1636 4 33.8182 4 21.8182V8.72727L24 0L44 8.72727V21.8182ZM24 43.6364C32.4444 41.4545 39.5556 31.6364 39.5556 22.2545V11.5636L24 4.8L8.44444 11.5636V22.2545C8.44444 31.6364 15.5556 41.4545 24 43.6364Z"
                  fill="#ECF1F0"/>
            </svg>
          </div>
          <div class="home-safety__wrapper-text">
            Обнаружение и предотвращение аттак
          </div>
        </div>
      </div>
    </div>
    <div class="home-connection">
      <h3>
        Вы можете связаться с нами удобным для Вас способом
      </h3>
      <div class="home-connection__wrapper">
        <form class="home-connection__wrapper-form">
          <input type="text" placeholder="Как к Вам обращаться?">
          <input type="text" placeholder="Какую компанию Вы представляете?">
          <input type="email" placeholder="Адрес электронной почты">
          <input type="email" placeholder="Введите ваше сообщение">
          <textarea placeholder="Введите ваше сообщение"></textarea>
          <button class="trustcrypt-button__green" type="submit">
            Отправить данные
          </button>
        </form>
        <div class="home-connection__wrapper-text">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                  d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99997C4.99931 8.61493 5.40951 7.26082 6.17869 6.109C6.94788 4.95718 8.04147 4.05943 9.32107 3.52937C10.6007 2.99931 12.0087 2.86076 13.3671 3.13126C14.7255 3.40176 15.9731 4.06915 16.952 5.04897C17.6038 5.69783 18.1203 6.46951 18.4719 7.31934C18.8234 8.16918 19.0029 9.0803 19 9.99997C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99997C11.2044 6.99997 10.4413 7.31604 9.87868 7.87865C9.31607 8.44126 9 9.20432 9 9.99997C9 10.7956 9.31607 11.5587 9.87868 12.1213C10.4413 12.6839 11.2044 13 12 13C12.7957 13 13.5587 12.6839 14.1213 12.1213C14.6839 11.5587 15 10.7956 15 9.99997C15 9.20432 14.6839 8.44126 14.1213 7.87865C13.5587 7.31604 12.7957 6.99997 12 6.99997Z"
                  fill="#D4D4D4"/>
            </svg>
            Ленинградский пр-т., 27, к2
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#D4D4D4"/>
              <path
                  d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2299 13.2683 15.9774 13.1752 15.7178 13.1832C15.4583 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71204 14.287C8.52004 13.094 8.15904 11.933 8.05204 11.361L10.511 8.96699C10.6975 8.78612 10.8062 8.53982 10.8142 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85904 3.51299C6.68408 3.32035 6.44092 3.2035 6.18119 3.18725C5.92146 3.17101 5.66564 3.25665 5.46804 3.42599L3.29804 5.28699C3.12515 5.46051 3.02196 5.69145 3.00804 5.93599C2.99304 6.18599 2.70704 12.108 7.29904 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3086 20.9783 18.5394 20.8747 18.712 20.701L20.572 18.53C20.7415 18.3325 20.8273 18.0768 20.8113 17.817C20.7952 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                  fill="#D4D4D4"/>
            </svg>
            +7 (495) 000 - 00 - 00
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                  d="M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.5732 12.9297 12.7837 12.9998 13 12.9998C13.2163 12.9998 13.4268 12.9297 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z"
                  fill="#D4D4D4"/>
              <path d="M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z" fill="#D4D4D4"/>
            </svg>
            admin@trustcrypt.com
          </div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.534022133104!2d37.564488790245505!3d55.783964489478016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5498c8450b7db%3A0xc0a339db224961fe!2z0JvQtdC90LjQvdCz0YDQsNC00YHQutC40Lkg0L_RgC3Rgi4sIDI3LCDQnNC-0YHQutCy0LAsIDEyNTI4NA!5e0!3m2!1sru!2sru!4v1706167992945!5m2!1sru!2sru"
              width="384" height="348" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.home {
  padding-top: 125px;
  @media(max-width: 1220px){
    padding-top: 80px;
  }
  @media(max-width: 991px){
    padding-top: 28px;
  }
  &-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 67px;
    padding-bottom: 160px;
    @media(max-width: 1220px){
      grid-gap: 25px;
      padding-bottom: 120px;
    }
    @media(max-width: 991px){
      font-size: 21px;
      grid-template-columns: 1fr;
      padding-bottom: 90px;
    }
    &__text {
      @media(max-width: 991px){
        &._bottom{
          text-align: center;
        }
      }
      div {
        padding: 32px 0;
        @media(max-width: 991px){
          padding: 16px 0;
        }
      }

      a {
        width: 236px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  &-tools {
    padding-bottom: 160px;
    text-align: center;
    @media(max-width: 1220px){
      padding-bottom: 120px;
    }
    @media(max-width: 991px){
      padding-bottom: 90px;
    }

    .trustcrypt-text {
      width: 762px;
      margin: 0 auto;
      padding: 32px 0 64px;
      @media(max-width: 1220px){
        padding: 24px 0 40px;
      }
      @media(max-width: 991px){
        padding: 16px 0 32px;
        width: 100%;
      }
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 64px;
      @media(max-width: 1220px){
        grid-gap: 32px;
      }
      @media(max-width: 991px){
        grid-gap: 16px;
      }
      img {
        display: block;
        width: 100%;
        object-fit: contain;
      }
    }
  }

  &-safety {
    padding-bottom: 160px;
    text-align: center;
    @media(max-width: 1220px){
      padding-bottom: 120px;
    }
    @media(max-width: 991px){
      padding-bottom: 90px;
    }

    .trustcrypt-text {
      padding: 32px 0 64px;
      width: 689px;
      margin: 0 auto;
      @media(max-width: 1220px){
        padding: 24px 0 40px;
      }
      @media(max-width: 991px){
        padding: 16px 0 32px;
        width: 100%;
      }
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 32px;
      @media(max-width: 991px){
        grid-template-columns: repeat(1, 1fr);
      }
      &-item {
        text-align: center;
        padding: 32px 16px;
        border-radius: 18px;
        border: 0.5px solid var(--BORDER, rgba(255, 255, 255, 0.05));
        background: rgba(255, 255, 255, 0.02);
        @media(max-width: 991px){
          display: flex;
          align-items: center;
          gap: 16px;
        }
      }

      &-circle {
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.10);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        @media(max-width: 991px){
          margin: 0;
          width: 60px;
          height: 60px;
        }
        svg{
          width: 50%;
        }
      }

      &-text {
        color: #ECF1F0;
        font-size: 24px;
        padding-top: 16px;
        @media(max-width: 991px){
          text-align: left;
          padding-top: 0;
          font-size: 17px;
        }
      }
    }
  }

  &-connection {
    h3 {
      width: 660px;
      margin: 0 auto;
      padding-bottom: 48px;
      text-align: center;
      @media(max-width: 991px){
        width: 100%;
        padding-bottom: 32px;
      }
    }

    &__wrapper {
      border-radius: 8px;
      border: 0.5px solid var(--BORDER, rgba(255, 255, 255, 0.05));
      background: rgba(255, 255, 255, 0.02);
      width: 855px;
      margin: 0 auto;
      padding: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      @media(max-width: 991px){
        padding: 24px 16px;
        display: block;
        width: 100%;
      }

      &-form {
        input {
          height: 50px;
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          padding: 0 14px;
          color: #ECF1F0;
          font-size: 17px;
          margin-bottom: 16px;
          border: 0;
          @media(max-width: 991px){
            font-size: 14px;
            padding: 0 12px;
            height: 41px;
          }
        }

        textarea {
          height: 136px;
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          padding: 12px 14px;
          color: #ECF1F0;
          font-size: 17px;
          margin-bottom: 16px;
          resize: none;
        }

        button {
          width: 100%;
        }
      }

      &-text {
        @media(max-width: 991px){
          padding-top: 24px;
        }
        div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #D4D4D4;
          font-size: 17px;
          margin-bottom: 16px;
        }
        iframe{
          @media(max-width: 991px){
            width: 100%;
          }
        }
      }
    }
  }
}
</style>