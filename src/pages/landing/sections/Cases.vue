<template>
  <section class="wrapper-block-five">
    <div class="container m-auto">

      <div class="inner_long_card text-center">
        <h1>Кейсы TrustContract</h1>
        <p class="pt-3">Отзывы наших клиентов</p>
      </div>

      <swiper
          :slidesPerView="3"
          :spaceBetween="60"
          :loop="true"
          :modules="modules"
          class="mySwiper"
          navigation
      >




        <swiper-slide>
          <div class="card">
            <h2 class="pt-4">Bramf</h2>
            <h5 class="pt-1">Мебельный цех</h5>
            <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h2 class="pt-4">Программа «Болашак»</h2>
            <h5 class="pt-1">Онлайн прием заявок и сопутствующих документов от стипендиатов</h5>
            <p class="pt-4">С января 2024 г. стипендианты могут заключать договора на стажировки онлайн, без посещения офиса для предоставления документов. Процесс упрощен за счет использования ЭЦП, что исключает необходимость в доверенности
              от гарантов.</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h2 class="pt-4">Metry.kz</h2>
            <h5 class="pt-1">Агентство недвижимости</h5>
            <p class="pt-4">TrustContract упрощает заключение договоров удаленно, что открывает новые рынки для риелторов. Например, Metry.kz теперь может успешно работать с клиентами из разных городов Казахстана</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card">
            <h2 class="pt-4">Bramf</h2>
            <h5 class="pt-1">Мебельный цех</h5>
            <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
          </div>
        </swiper-slide>
      </swiper>

      <div class="clients text-white text-center">
        <h1 class="">Наши клиенты</h1>
        <div class="scroll">
          <div v-for="(logo, index) in logos" :key="index" class="scroll-slide">
            <img v-for="(face, logoIndex) in logo" :key="logoIndex" :src="require(`@/assets/img/company${logoIndex + 1}.png`)" :alt="'Face ' + faceIndex">
          </div>
        </div>
        <div class="scroll">
          <div v-for="(logo, index) in logos" :key="index" class="scroll-slide2">
            <img v-for="(face, logoIndex) in logo" :key="logoIndex" :src="require(`@/assets/img/company${logoIndex + 1}.png`)" :alt="'Face ' + faceIndex">
          </div>
        </div>
      </div>

      <div class="smi text-white text-center mt-5">
        <h1 class="">О нас говорят в СМИ</h1>
        <div class="d-flex justify-content-between align-items-center mt-5">
          <div class="inner_card">
            <img src="~@/assets/img/smi1.png" alt="">
            <button>Прочитать</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi2.png" alt="">
            <button>Прочитать</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi3.png" alt="">
            <button>Прочитать</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi4.png" alt="">
            <button>Прочитать</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi5.png" alt="">
            <button>Прочитать</button>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <div class="inner_long_card_two">
            <img src="~@/assets/img/smi6.png" alt="">
            <button>Прочитать</button>
          </div>
          <div class="inner_long_card_two">
            <img src="~@/assets/img/smi7.png" alt="">
            <button>Прочитать</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation } from 'swiper/modules';
export default {
  name: "CasesSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      logos: [
        [
          "~@/assets/img/company1.png",
          "~@/assets/img/company2.png",
          "~@/assets/img/company3.png",
          "~@/assets/img/company4.png",
          "~@/assets/img/company5.png",
          "~@/assets/img/company6.png",
          "~@/assets/img/company7.png",
          "~@/assets/img/company8.png",
          "~@/assets/img/company9.png",
        ],
        [
          "~@/assets/img/company1.png",
          "~@/assets/img/company2.png",
          "~@/assets/img/company3.png",
          "~@/assets/img/company4.png",
          "~@/assets/img/company5.png",
          "~@/assets/img/company6.png",
          "~@/assets/img/company7.png",
          "~@/assets/img/company8.png",
          "~@/assets/img/company9.png",
        ]
      ]
    };
  }
}
</script>

<style lang="scss">
.wrapper-block-five {
  padding-top: 40px;
  width: 100%;
  position: relative;
  height: auto;
  background-color: #020F22;

  &::before {
    content: '';
    position: absolute;
    top: -3%;
    left: 5%;
    width: 0.5px;
    height: 0.5px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.3);
  }

  /* Cases starts */

  .swiper {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
  }
  .swiper-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-android .swiper-slide,
  .swiper-ios .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-horizontal {
    touch-action: pan-y;
  }
  .swiper-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  .swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  /* 3D Effects */
  .swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px;
  }
  .swiper-3d .swiper-wrapper {
    transform-style: preserve-3d;
  }
  .swiper-3d {
    perspective: 1200px;
  }
  .swiper-3d .swiper-slide,
  .swiper-3d .swiper-cube-shadow {
    transform-style: preserve-3d;
  }
  /* CSS Mode */
  .swiper-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-css-mode.swiper-horizontal > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-css-mode.swiper-vertical > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  .swiper-css-mode.swiper-free-mode > .swiper-wrapper {
    scroll-snap-type: none;
  }
  .swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: none;
  }
  .swiper-css-mode.swiper-centered > .swiper-wrapper::before {
    content: '';
    flex-shrink: 0;
    order: 9999;
  }
  .swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: center center;
    scroll-snap-stop: always;
  }
  .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
    margin-inline-start: var(--swiper-centered-offset-before);
  }
  .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
    height: 100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after);
  }
  .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
    margin-block-start: var(--swiper-centered-offset-before);
  }
  .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
    width: 100%;
    min-width: 1px;
    height: var(--swiper-centered-offset-after);
  }
  /* Slide styles start */
  /* 3D Shadows */
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top,
  .swiper-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .swiper-3d .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.15);
  }
  .swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    box-sizing: border-box;
    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
    border-radius: 50%;
    border-top-color: transparent;
  }
  .swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
  .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
    animation: swiper-preloader-spin 1s infinite linear;
  }
  .swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff;
  }
  .swiper-lazy-preloader-black {
    --swiper-preloader-color: #000;
  }
  @keyframes swiper-preloader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 35px !important;
    height: 35px !important;
    z-index: 1;
    cursor: pointer;
    display: flex;
    background-color: #717174;
    border-radius: 30px;
    color: #FDFDFD;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    top: 22%;
    left: 220px;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    top: 22%;
    right: 220px;
    content: '';
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .card{
    width: 410px;
    height: 538px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px solid;
    padding: 0 32px;

    h2 {
      font-size: 42px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(14, 182, 182, 1);;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      color:rgba(181, 189, 190, 1);
    }

    p{
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(253, 253, 253, 1);
    }
  }

  /* Cases ends */


/* logos start */
  @keyframes  slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%)
    }
  }
  @keyframes  slide2 {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0)
    }
  }

  .clients {
    padding: 100px 0 100px 0;

    h1 {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
    }

    .scroll {
      position: relative;
      overflow: hidden;
      padding: 40px 0;
      white-space: nowrap;
      -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);

      .scroll-slide {
        display: inline-block;
        animation: 15s slide infinite linear;

          img {
            height: 80px;
            margin: 0 40px;
          }
      }
      .scroll-slide2 {
        display: inline-block;
        animation: 20s slide2 infinite linear;

        img {
          height: 80px;
          margin: 0 40px;
        }
      }
    }
  }

/* logos end*/

  .bg {
    opacity: 0.3;
    position: absolute;
    left: 50%;
    top: -2%;
    transform: translate(-50%);
  }

  .inner_long_card {
    padding: 32px;
    gap: 24px;
    z-index: 100;
    width: 100%;
    height: 166px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    h1 {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: 0px;
      color: #fff;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      color: #B5BDBE;
    }
  }

  .slide-container{
    min-height: auto;
    position: relative;
    width: 100%;
    padding: 40px 0;
  }
  .slide-content{
    overflow: hidden;
    border-radius: 25px;
  }
  .card{
    width: 389px;
    height: 538px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px solid;
    padding: 0 32px;

    h2 {
      font-size: 42px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(14, 182, 182, 1);;
    }

    h5 {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: center;
      color:rgba(181, 189, 190, 1);
    }

    p{
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(253, 253, 253, 1);
    }
  }
  .swiper-navBtn{
    width: 40px;
    height: 40px;
    top: 517px;
    padding: 10px;
    border-radius: 30px;
    background-color: rgba(113, 113, 116, 1);;
    color: rgba(113, 113, 116, 0.6);
  }

  .swiper-button-nextt{
    position: absolute;
    top: 20%;
    right: 12%;
  }
  .swiper-button-prevv{
    position: absolute;
    top: 20%;
    left: 12%;
  }

  .smi {
    width: 100%;
    height: auto;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      right: -15%;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.3);
    }

    &::before {
      content: '';
      position: absolute;
      top: 45%;
      left: -25%;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.3);
    }

    button {
      width: 161px;
      height: 49px;
      padding: 0 32px 0 32px;
      border-radius: 32px;
      gap: 10px;
      background: none;
      border: 1px solid #159F9F;
      color: #159F9F;
    }

    .inner_card {
      padding: 20px 20px;
      width: 245px;
      height: 225px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }

    .inner_long_card_two {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
      width: 49%;
      height: 225px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      img {
        width: 20%;
      }
    }
  }
}
</style>