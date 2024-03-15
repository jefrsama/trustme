<template>
  <section class="wrapper-block-three">
    <div class="container m-auto">
      <div class="inner-content">
        <div class="w-100 d-flex justify-content-between align-items-center head py-4">
          <h1 class="py-2" v-html="$t('landing.eco_system_trust')"></h1>
          <button>{{$t("landing.get_more_about_trustme")}}</button>
        </div>
        <div class="w-100 flex-wrap gap-20 d-flex justify-content-between align-items-center">
          <div class="inner_card">
            <img src="~@/assets/img/icon1.svg" alt="">
            <h3 class="pt-3">{{$t("landing.mission")}}</h3>
            <p class="pt-3">{{$t("landing.make_world_better_with_technologies")}}</p>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon2.svg" alt="">
            <h3 class="pt-3">{{$t("landing.aim")}}</h3>
            <p class="pt-3">{{$t("landing.become_the_first_in_central_asia")}}</p>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon3.svg" alt="">
            <h3 class="pt-3">{{$t("landing.technology")}}</h3>
            <p class="pt-3">{{$t("landing.smart_contract_blockchain_ai")}}</p>
          </div>
          <div class="inner_long_card d-flex">
            <div style="width: 60%;">
              <img src="~@/assets/img/icon4.svg" alt="">
              <h3 class="pt-3">{{$t("landing.product")}}</h3>
              <p class="pt-3" v-html="$t('landing.service_online_sign_applications')"></p>
            </div>
            <div class="img mx-4 py-2">
              <img src="~@/assets/img/group1.svg" alt="">
            </div>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/icon5.svg" alt="">
            <h3 class="pt-3">{{$t("landing.have_questions")}}</h3>
            <p class="pt-3">{{$t("landing.leave_a_request")}}</p>
            <button class="text-center">{{$t("landing.read_more")}}</button>
          </div>
        </div>
      </div>

      <div class="achievements w-100 py-5 mt-5">
        <h1 class="py-5">{{$t("landing.our_achievements")}}</h1>
        <div class="d-flex w-100 flex-wrap gap-20 justify-content-between align-items-center">
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach1.png" alt="">
            <h5 class="py-3" v-html="$t('landing.entered_into_top_10_sturtups')"></h5>
            <p>{{$t('landing.after_finish_hero_training')}}</p>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach2.png" alt="">
            <h5 class="py-3" v-html="$t('landing.entered_into_top_3_best_startups')"></h5>
            <div class="d-flex gap-20">
              <img width="100px" src="~@/assets/img/mastercard.png" alt="">
              <img width="160px" src="~@/assets/img/astanafinancedays.png" alt="">
            </div>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach3.png" alt="">
            <h5 class="py-3" v-html="$t('landing.top_6_startups_in_central_asia_bank_program')"></h5>
            <div class="d-flex gap-20">
              <img width="64px" src="~@/assets/img/kazakhstan.png" alt="">
              <img width="64px" src="~@/assets/img/azerbaijan.png" alt="">
              <img width="64px" src="~@/assets/img/uzbekistan.png" alt="">
            </div>
          </div>
          <div class="achievements_inner_card">
            <h5 class="py-3" v-html="$t('landing.entered_into_the_top_15_startups')"></h5>
            <div>
              <img class="pt-4" src="~@/assets/img/silkway.png" alt="">
              <img class="py-4" src="~@/assets/img/google.png" alt="">
              <img src="~@/assets/img/astana-hub.png" alt="">
            </div>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach4.png" alt="">
            <h5 class="py-3" v-html="$t('landing.best_blockchain_project_in_kz')"></h5>
          </div>
          <div class="achievements_inner_card">
            <img src="~@/assets/img/ach5.png" alt="">
            <h5 class="py-3">{{$t('landing.abroad_office_in_uzbekistan')}}</h5>
          </div>
        </div>
        <div class="achievements_inner_card_three mt-4">
          <h5 v-html="$t('landing.top_10_sturtups_in_digital_bridge')"></h5>
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
import landing from "../landing.vue";

export default {
  name: "AchievementPage",
  computed: {
    landing() {
      return landing
    }
  },
}
</script>

<style lang="scss">
.wrapper-block-three {
  background-color: #020F22;
  width: 100%;
  height: 2564px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 3%;
    right: 0em;
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
    font-family: Monrope, sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
    color: #fff;
    span {
      font-family: Monrope, sans-serif;
      color: #159F9F;
    }
  }
  button {
    font-family: Monrope, sans-serif;
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
    width: 32%;
    height: 384px;
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
      font-family: Monrope, sans-serif;

    }

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;
      font-family: Monrope, sans-serif;

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
      font-family: Monrope, sans-serif;

    }
  }

  .inner_long_card {
    text-align: start;
    padding: 40px 40px;
    width: 66%;
    height: 384px;
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
      font-family: Monrope, sans-serif;

    }

    p {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;
      font-family: Monrope, sans-serif;

      a {
        color: #0EB6B6;
        text-transform: none;
        text-decoration: none;
        font-family: Monrope, sans-serif;

      }
    }

    img:last-child {
      opacity: 0.5;
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
      box-shadow: 5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }
    &::after {
      content: '';
      position: absolute;
      top: 5%;
      right: 0em;
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
      font-family: Monrope, sans-serif;

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
      font-family: Monrope, sans-serif;


      span {
        color: #0EB6B6;
        font-family: Monrope, sans-serif;

      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      color: #B5BDBE;
      font-family: Monrope, sans-serif;
    }

  }


  .achievements_inner_card:nth-child(n+4) {
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
      font-family: Monrope, sans-serif;

      span {
        color: #0EB6B6;
        font-family: Monrope, sans-serif;

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
      font-family: Monrope, sans-serif;

      span {
        color: #0EB6B6;
        font-family: Monrope, sans-serif;

      }
    }
  }

}

@media only screen and (min-width: 1200px) {
  .wrapper-block-three {
    background-color: #020F22;
    width: 100%;
    height: 2504px;
    position: relative;

    .inner_card {
      text-align: start;
      padding: 20px;
      width: 31.5%;
      height: 354px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
    }

    .inner_long_card {
      text-align: start;
      padding: 20px;
      width: 66%;
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

    .achievements_inner_card{
      padding: 15px;
      width: 32%;
      height: 584px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      img {
        width: 100%;
      }
      div {
        img {
          width: 100px;
          height: 50px;
        }
      }
    }

    .achievements_inner_card:nth-child(3){
      div {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }

    .achievements_inner_card:nth-child(n + 4) {
      padding: 20px;
      width: 32%;
      height: 444px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

      div {
        display: flex;
        flex-direction: column;
        img {
          width: 50%;
          height: 40%;
        }
      }
    }

    .achievements_inner_card_three{
      padding: 20px;
      width: 100%;
      height: 280px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

      img {
        width: 32%;
      }

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
  }
}

@media only screen and (max-width: 1200px) {
  .wrapper-block-three {
    background-color: #020F22;
    width: 100%;
    height: 2504px;
    position: relative;
    .inner_card {
      text-align: start;
      padding: 20px;
      width: 31.5%;
      height: 354px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

      h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #B5BDBE;
      }
    }
    .inner_long_card {
      text-align: start;
      padding: 20px;
      width: 66%;
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
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #B5BDBE;
      }
    }

    .achievements_inner_card{
      padding: 15px;
      width: 31.5%;
      height: 584px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      img {
        width: 100%;
      }
      div {
        img {
          width: 100px;
          height: 50px;
        }
      }
    }
    .achievements_inner_card:nth-child(n + 4){
      padding: 15px;
      width: 31.5%;
      height: 364px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      img {
        width: 100%;
      }
      div {
        img {
          width: 50%;
          height: 40%;
        }
      }
    }
    .achievements_inner_card_three{
      img {
        width: 32%;
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-three {
    background-color: #020F22;
    width: 100%;
    height: 3054px;
    position: relative;

    .inner-content {
      .head {
        padding: 30px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
    .inner_card {
      text-align: start;
      padding: 20px;
      width: 31%;
      height: 354px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

      h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 26px;
        text-align: left;
        color: #fff;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #B5BDBE;
      }
      button {
        font-size: 13px;
        width: 158px;
        height: 41px;
        padding: 0 32px 0 32px;
        border-radius: 32px;
        gap: 10px;
        background: none;
        border: 1px solid #159F9F;
        color: #159F9F;
      }
    }

    .inner_long_card {
      text-align: start;
      padding: 20px;
      width: 66%;
      height: 354px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      
      div:first-child {
        width: 500px;
      }

      div:last-child {
        img {
          width: 100%;
        }
      }
      
      h3 {
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: #B5BDBE;
      }
    }

    .achievements_inner_card{
      padding: 15px;
      width: 48%;
      height: 584px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      img {
        width: 100%;
      }
      div {
        img {
          width: 100px;
          height: 50px;
        }
      }
    }
    .achievements_inner_card:nth-child(4){
      width: 48%;
      height: 584px;
      div {
        img {
          width: 50%;
          height: 40%;
        }
      }
    }
    .achievements_inner_card:nth-child(n + 5){
      padding: 15px;
      width: 48%;
      height: 364px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);
      img {
        width: 100%;
      }
      div {
        img {
          width: 50%;
          height: 40%;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-block-three {
    height: 3700px;
    .inner-content {
      .head {
        padding: 30px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }

  .inner_card {
    text-align: start;
    padding: 20px;
    width: 100%;
    height: 240px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-image-source: linear-gradient(248.91deg, rgba(14, 182, 182, 0.2) 27.96%, rgba(14, 182, 182, 0) 88.78%);

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 26px;
      text-align: left;
      color: #fff;
    }
    p {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;
    }
    button {
      font-size: 10px;
      width: 118px;
      height: 31px;
      padding: 0 22px 0 22px;
      border-radius: 32px;
      gap: 10px;
      background: none;
      border: 1px solid #159F9F;
      color: #159F9F;
    }
  }

  .inner_long_card {
    padding: 20px;
    width: 100%;
    height: 240px;
    h3 {
      font-size: 28px;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }

    p {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      color: #B5BDBE;
      }
    }
  }
}

.gap-20 {
 gap: 20px;
}

</style>