<template>
  <section class="wrapper-block-five">
    <div class="container m-auto">
      <div class="inner_long_card text-center">
        <h1>{{$t("landing.cases_trust_contract")}}</h1>
        <p class="pt-3">{{$t("landing.review_our_clients")}}</p>
      </div>
      <img class="bg" src="~@/assets/img/BG-cases.png" alt="">
      <swiper
          :slidesPerView="3"
          :spaceBetween="30"
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
        <h1 class="">{{$t("landing.our_clients")}}</h1>
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
        <h1 class="">О нас говорят в СМИ{{$t("landing.smi_talks_about_us")}}</h1>
        <div class="d-flex gap-15 flex-wrap justify-content-between align-items-center mt-5">
          <div class="inner_card">
            <img src="~@/assets/img/smi1.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi2.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi3.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi4.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/smi5.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_long_card_two">
            <img src="~@/assets/img/smi6.png" alt="">
            <button>{{$t("landing.read")}}</button>
          </div>
          <div class="inner_long_card_two">
            <img src="~@/assets/img/smi7.png" alt="">
            <button>{{$t("landing.read")}}</button>
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
  height: 2000px;
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

  /* CSS Mode */

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
    border-radius: 50px;
    background-color: #2c3e50;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev::before,
  .swiper-button-next::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    border-top: 2px solid #FDFDFD;
    border-left: 2px solid #FDFDFD;
    position: absolute;
  }

  .swiper-button-prev::before {
    transform: rotate(-45deg);
    left: 15px;
  }

  .swiper-button-next::before {
    transform: rotate(135deg);
    right: 15px;
  }

  .swiper-button-prev,
  .swiper-button-next::after {
    font-size: 30px;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }

  .swiper-button-prev::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-button-next::after {
    content: '';
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  .swiper-rtl .swiper-button-next::before {
    transform: rotate(-95deg);
  }

  .swiper-rtl .swiper-button-prev::before {
    transform: rotate(45deg);
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    top: 22%;
    left: 85%;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next{
    top: 22%;
    right: 85%;
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

  .smi {
    width: 100%;
    height: auto;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      right: 0;
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
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 20px 20px;
      width: 19%;
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

@media only screen and (max-width: 1400px) {

  .wrapper-block-five {

    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      top: 22%;
      left: 5%;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: 5%;
    }
    .smi {

      .inner_card {
        padding: 20px 20px;
        width: 18%;
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
        width: 48.5%;
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
}

@media only screen and (max-width: 1200px) {
  .wrapper-block-five {
    .smi {
      button {
        width: 121px;
        height: 39px;
        padding: 0 22px 0 22px;
        border-radius: 32px;
        background: none;
        border: 1px solid #159F9F;
        color: #159F9F;
      }
      .inner_card {
        padding: 20px 20px;
        width: 18%;
        height: 185px;
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
        width: 48.5%;
        height: 185px;
        border: 1px solid #17B2B233;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
      }
    }
  }
}
@media only screen and (max-width: 992px) {

  .wrapper-block-five {
    height: 1950px;
    .smi {
      button {
        font-size: 13px;
        width: 100px;
        height: 39px;
        padding: 0 5px;
      }
      .inner_card {
        padding: 20px 20px;
        width: 18%;
        height: 185px;
      }

      .inner_long_card_two {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        width: 48.5%;
        height: 165px;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .wrapper-block-five {
    height: 2350px;
    .bg {
      width: 90%;
    }
    .smi {
      button {
        font-size: 13px;
        width: 100px;
        height: 39px;
        padding: 0 5px;
      }
      .inner_card {
        padding: 20px 20px;
        width: 48.5%;
        height: 185px;
      }
      .inner_long_card_two {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        width: 48.5%;
        height: 185px;
        border: 1px solid #17B2B233;
        border-radius: 12px;
        img {
          width: 100px;
          height: 100px;
        }
      }

      .inner_long_card_two:last-child {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 100%;
        height: 185px;
      }
    }
  }
}

</style>