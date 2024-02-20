<template>
  <section class="wrapper-block-three">
    <div class="container m-auto">
      <div class="inner-content align-items-center">
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h1 class="text-start text-white py-5">Экосистема доверия <span>TrustMe</span></h1>
          <button>Узнать больше о TrustMe</button>
        </div>
        <div class="w-100 d-flex justify-content-between align-items-center">
          <div class="inner_card">
            <img src="~@/assets/img/icon1.svg" alt="">
            <h3 class="pt-3">Миссия</h3>
            <p class="pt-3">Сделать этот мир лучше при помощи технологий и инноваций</p>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon2.svg" alt="">
            <h3 class="pt-3">Цель</h3>
            <p class="pt-3">Cтать первым единорогом из Центральной Азии</p>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon3.svg" alt="">
            <h3 class="pt-3">Технологии</h3>
            <p class="pt-3">SmartContract, Blockchain, AI и другие технологии</p>
          </div>
        </div>
        <div class="w-100 d-flex justify-content-between align-items-center pt-4">
          <div class="inner_long_card d-flex">
            <div style="width: 60%;">
              <img src="~@/assets/img/icon4.svg" alt="">
              <h3 class="pt-3">Продукт</h3>
              <p class="pt-3"><a href="#">TrustContract</a> - сервис электронного подписания договоров и создания SmartContracts на технологии Blockchain</p>
            </div>
            <div class="img mx-4 py-2">
              <img src="~@/assets/img/group1.svg" alt="">
            </div>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon5.svg" alt="">
            <h3 class="pt-3">Остались вопросы?</h3>
            <p class="pt-3">Оставьте заявку и мы свяжемся с вами, чтобы рассказать о возможностях инвестирования</p>
            <button class="text-center">Узнать больше</button>
          </div>
        </div>
      </div>

      <div class="achievements w-100 py-5 mt-5">
        <h1 class="py-5">Наши достижения</h1>
        <div class="d-flex w-100 justify-content-between align-items-center">
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach1.png" alt="">
            <h5 class="py-3">Вошли <span>в TОП-10 стартапов</span> в Кремниевой долине, США</h5>
            <p>По завершению Hero Training, TrustMe была признана наиболее инновационным и инвестиционно привлекательным решением, войдя в десятку лучших среди более чем 100 стартапов из 35 стран мира.</p>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach2.png" alt="">
            <h5 class="py-3">Вошли <span>в ТОП-3 лучших стартапа</span> по версии MasterCard а Astana Finance Days</h5>
            <div class="d-flex gap-20">
              <img width="100px" src="~@/assets/img/mastercard.png" alt="">
              <img width="160px" src="~@/assets/img/astanafinancedays.png" alt="">
            </div>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach3.png" alt="">
            <h5 class="py-3"><span>Среди 6 лучших стартапов</span> в программе Азиатского банка развития</h5>
            <div class="d-flex gap-20">
              <img width="64px" src="~@/assets/img/kazakhstan.png" alt="">
              <img width="64px" src="~@/assets/img/azerbaijan.png" alt="">
              <img width="64px" src="~@/assets/img/uzbekistan.png" alt="">
            </div>
          </div>
        </div>
        <div class="d-flex w-100 justify-content-between align-items-center flex-wrap py-4">
          <div class="achievements_inner_card_two">
            <h5 class="py-3">Прошли <span>в 15 лучших</span> из Центральной Азии в 2023 году</h5>
            <img class="pt-4" src="~@/assets/img/silkway.png" alt="">
            <img class="py-4" src="~@/assets/img/google.png" alt="">
            <img src="~@/assets/img/astana-hub.png" alt="">
          </div>
          <div class="achievements_inner_card_two">
            <img src="~@/assets/img/ach4.png" alt="">
            <h5 class="py-3"><span>Лучший blockchain проект</span> Казахстана</h5>
          </div>
          <div class="achievements_inner_card_two">
            <img src="~@/assets/img/ach5.png" alt="">
            <h5 class="py-3">Открыли зарубежный офис в Узбекистане</h5>
          </div>
        </div>

        <div class="achievements_inner_card_three">
          <h5><span>В ТОП-10 стартапов</span> Центральной Азии на Digital Bridge 2023</h5>
          <div class="d-flex justify-content-between align-items-center pt-3">
            <img src="~@/assets/img/ach6png.png" alt="">
            <img src="~@/assets/img/ach7.png" alt="">
            <img src="~@/assets/img/ach8.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AchievementPage",
}
</script>

<style scoped lang="scss">
.wrapper-block-three {
  background-color: #020F22;
  width: 100%;
  height: 2564px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 3%;
    right: 8em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 5em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
  }
  h1 {
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;

    span {
      color: #159F9F;
    }
  }
  button {
    border-radius: 32px;
    width: 288px;
    height: 61px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    background-color: #159F9F;
  }

  .inner_card {
    text-align: start;
    padding: 40px 40px;
    width: 410px;
    height: 354px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h3 {
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;

    }

    button {
      width: 198px;
      height: 61px;
      padding: 0 32px 0 32px;
      border-radius: 32px;
      gap: 10px;
      background: none;
      border: 1px solid #159F9F;
      color: #159F9F;
    }
  }

  .achievements {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 55%;
      left: -20em;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }
    &::after {
      content: '';
      position: absolute;
      top: 5%;
      right: -15em;
      width: 0.5px;
      height: 0.5px;
      border-radius: 50%;
      box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.25);
    }


    h1 {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: 0px;
      text-align: center;
      color: #fff;
    }
  }

  .achievements_inner_card{
    padding: 40px 40px;
    width: 410px;
    height: 584px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h5 {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;

      span {
        color: #0EB6B6;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      color: #B5BDBE;
    }
  }

  .achievements_inner_card_two {
    padding: 40px 40px;
    width: 410px;
    height: 444px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h5 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: left;

      span {
        color: #0EB6B6;
      }
    }
  }

  .achievements_inner_card_three{
    padding: 40px 40px;
    width: 100%;
    height: 282px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h5 {
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;

      span {
        color: #0EB6B6;
      }
    }
  }

  .inner_long_card {
    text-align: start;
    padding: 40px 40px;
    width: 854px;
    height: 354px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h3 {
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;

      a {
        color: #0EB6B6;
        text-transform: none;
        text-decoration: none;
      }
    }

    img:last-child {
      opacity: 0.5;
    }
  }
}
.gap-20 {
 gap: 20px;
}

</style>