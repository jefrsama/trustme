<template>
  <section class="wrapper-block-five">
    <div class="container m-auto">

      <div class="inner_long_card text-center">
        <h1>Кейсы TrustContract</h1>
        <p class="pt-3">Отзывы наших клиентов</p>
      </div>

      <div style="z-index: 100;" class="py-5">
        <CardSlider/>
      </div>

      <div class="clients text-white text-center">
        <h1 class="">Наши клиенты</h1>
        <div class="scroll imgBox pt-5" style="--time:4s">
          <div>
            <img src="~@/assets/img/uber.png" alt="">
            <img src="~@/assets/img/metry.png" alt="">
            <img src="~@/assets/img/Казхром.png" alt="">
            <img src="~@/assets/img/Болашак.png" alt="">
            <img src="~@/assets/img/ЖЕНПУ.png" alt="">
            <img src="~@/assets/img/Аль%20фараби%20университет.png" alt="">
            <img src="~@/assets/img/Жана%20пост.png" alt="">
            <img src="~@/assets/img/Андеграунд%20жим.png" alt="">
            <img src="~@/assets/img/Квантум%20скул.png" alt="">
          </div>
        </div>
        <div class="scroll2 imgBox" style="--time:4s">
          <div>
            <img src="~@/assets/img/uber.png" alt="">
            <img src="~@/assets/img/metry.png" alt="">
            <img src="~@/assets/img/Казхром.png" alt="">
            <img src="~@/assets/img/Болашак.png" alt="">
            <img src="~@/assets/img/ЖЕНПУ.png" alt="">
            <img src="~@/assets/img/Аль%20фараби%20университет.png" alt="">
            <img src="~@/assets/img/Жана%20пост.png" alt="">
            <img src="~@/assets/img/Андеграунд%20жим.png" alt="">
            <img src="~@/assets/img/Квантум%20скул.png" alt="">
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
import CardSlider from './../components/CardSlider.vue'
export default {
  name: "CasesSection",
  components: {
    CardSlider
  },
}
</script>

<style scoped lang="scss">
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

  .clients {
    margin-top: 150px;
    margin-bottom: 150px;

    h1 {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
    }

    .scroll, .scroll2 {
      position: relative;
      display: flex;
      width: 100%;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
    }

    .scroll div {
      white-space: nowrap;
      animation: scroll var(--time) linear infinite;
      animation-delay: calc(var(--time)/3);
    }

    .scroll2 div {
      white-space: nowrap;
      animation: scroll2 var(--time) linear infinite;
      animation-delay: calc(var(--time)/3);
    }

    @keyframes scroll {
      from {transform: translateX(10%)}
      to {transform: translateX(-10%)}
    }

    @keyframes scroll2 {
      from {transform: translateX(-10%)}
      to {transform: translateX(10%)}
    }

    .imgBox div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .imgBox img {
      width: 140px;
      padding: 20px;
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