<template>
  <section class="wrapper-block-eight">
    <img class="bg" src="~@/assets/img/partofBG.png" alt="">
    <div class="light-container_back"></div>
    <div class="container">
      <div class="light-container"></div>
      <h1 class="h1">{{$t("landing.become_part_of_trustme")}}</h1>
      <p class="py-3 text">{{$t("landing.investors_we_invite")}}</p>
      <div class="d-flex justify-content-center align-items-center gap-70 mt-5">
        <div class="inner_card">
          <h3>{{$t("landing.three_business_angels")}}</h3>
          <h1 v-html="$t('landing.$100')"></h1>
          <p>{{$t("landing.estimated_at_20_millions")}}</p>
        </div>
        <div class="inner_card">
          <h3>{{$t("landing.venture_fund")}}</h3>
          <h1 v-html="$t('landing.$400')"></h1>
          <p>{{$t("landing.estimated_at_15_millions")}}</p>
        </div>
      </div>
    </div>
    <button class="d-flex justify-content-center align-items-center">
      {{$t("landing.be_an_investor")}}
      <span>
          <svg width="19" height="29" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6023 4.88253C10.8219 4.66286 11.1781 4.66286 11.3977 4.88253L15.8977 9.38253C16.1174 9.6022 16.1174 9.95835 15.8977 10.178L11.3977 14.678C11.1781 14.8977 10.8219 14.8977 10.6023 14.678C10.3826 14.4584 10.3826 14.1022 10.6023 13.8825L14.142 10.3428H3.5C3.18934 10.3428 2.9375 10.0909 2.9375 9.78027C2.9375 9.46961 3.18934 9.21777 3.5 9.21777H14.142L10.6023 5.67802C10.3826 5.45835 10.3826 5.1022 10.6023 4.88253Z" fill="#FDFDFD"/>
          </svg>
          </span>
    </button>
  </section>
</template>

<script>
export default {
  name: "PartOfSection",
}
</script>

<style scoped lang="scss">
.gap-70 {
  gap: 70px;
}
.wrapper-block-eight {
  width: 100%;
  height: 1000px;
  position: relative;
  background-color: #020F22;

  &::before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 3em;
    width: 0.5px;
    height: 0.5px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.3);
  }
  button {
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    bottom: 10%;
    border-radius: 32px;
    width: 340px;
    height: 59px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    background-color: #159F9F;
  }

  .bg {
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translate(-50%);
  }

  .light-container_back::before{
    width: 100%;
    top: 15px;
    left: 0;
    position: absolute;
    content: "";
    z-index: 1;
    box-shadow: 0 0 70px 10px rgba(7, 149, 132, 0.9);
  }

  .light-container {
    width: 100%;
    height: 14px;
    background: linear-gradient(111.34deg, #079584 4.32%, #00A6B7 94.32%);
  }

  .inner_card:first-child {
    &::before {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 100%;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.2);
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 460px;
    height: 330px;
    padding: 44px;
    gap: 24px;
    border-radius: 20px;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform: perspective(1000px) rotateY(-3deg) rotateX(2deg) skewY(8deg);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
  .inner_card:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 460px;
    height: 330px;
    padding: 44px;
    gap: 24px;
    border-radius: 20px;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform: perspective(1000px) rotateY(3deg) rotateX(2deg) skewY(-8deg);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
  .inner_card {
    h3 {
      font-family: Manrope sans-serif;
      font-size: 28px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: center;
      color: #0EB6B6;
    }
    h1 {
      font-family: Manrope sans-serif;
      font-size: 56px;
      font-weight: 700;
      line-height: 90px;
      letter-spacing: 0em;
      text-align: center;
      color: #FDFDFD;
    }
    p {
      font-family: Manrope sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      color: #B5BDBE;
    }
  }

  .h1 {
    margin-top: 120px;
    font-family: Manrope sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
    color: #FDFDFD;
    opacity: 1;
  }

  .text{
    font-family: Manrope sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #B5BDBE;
  }
}
@media only screen and (max-width: 992px) {
  .wrapper-block-eight {
    .bg{
      width: 100%;
    }
  }
}
</style>