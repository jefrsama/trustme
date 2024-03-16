<template>
  <footer class="wrapper-footer d-flex flex-column justify-content-between">
    <div class="container m-auto">
      <div class="d-flex justify-content-between align-items-top first-container">
        <div class="footer_logo_container">
          <img src="~@/assets/img/footer-logo.svg" width="100px" height="28px" alt="">
          <p class="pt-3">{{$t("landing.make_the_world_better")}}</p>
        </div>
        <div class="footer_second_container">
          <h3>{{$t("landing.services")}}</h3>
          <p class="mt-3">{{$t("landing.TrustContract")}}</p>
        </div>
        <div class="footer_third_container">
          <h3>{{$t("landing.contacts")}}</h3>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon1.svg" alt="">
            <p class="pt-3">{{$t("landing.address")}}</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon2.svg" alt="">
            <p class="pt-3">{{$t("landing.email")}}</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon3.svg" alt="">
            <p class="pt-3">{{$t("landing.sale_department")}}</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon4.svg" alt="">
            <p class="pt-3">{{$t("landing.tech_support")}}</p>
          </div>
        </div>
        <div class="footer_four_container">
          <p>{{$t("landing.politic_of_confidence")}}</p>
          <p>{{$t("landing.terms_of_use")}}</p>
          <p>{{$t("landing.public_offer")}}</p>
        </div>
      </div>
    </div>
    <div class="container m-auto">
      <div class="d-flex justify-content-between align-items-center last-container">
        <p class="pt-3">{{$t("landing.all_supported")}}</p>
        <div class="d-flex gap-15 align-items-center">
          <img src="~@/assets/img/footer-facebook.svg" alt="">
          <img src="~@/assets/img/footer-telegram.svg" alt="">
          <img src="~@/assets/img/footer-instagram.svg" alt="">
          <img src="~@/assets/img/footer-tik-tok.svg" alt="">
          <img src="~@/assets/img/footer-VK.svg" alt="">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped lang="scss">
.wrapper-footer {
  width: 100%;
  height: 450px;
  background-color: #fff;

  p{
    font-family: Inter sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #203939;
  }

  h3{
    font-family: Monrope, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(32, 57, 57, 1);
  }

  .footer_logo_container {
    img {
      width: 100%;
      height: 30px;
    }
    width: 200px;
    height: 70px;
  }
  .footer_second_container {
    width: 100px;
    height: 70px;
  }
  .footer_third_container {
    width: 306px;
    height: 175px;
  }
  .footer_four_container {
    width: 222px;
    height: 100px;
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-footer {
    p{
      font-family: Inter sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #203939;
    }

    h3{
      font-family: Monrope, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(32, 57, 57, 1);
    }

    .footer_logo_container {
      width: 180px;
      height: 70px;
    }
    .footer_second_container {
      width: 60px;
      height: 70px;
    }
    .footer_third_container {
      width: 206px;
      height: 175px;
    }
    .footer_four_container {
      width: 122px;
      height: 100px;
    }
    .last-container {
      margin-top: 80px;
    }
  }
  .gap-15 {
    gap: 5px;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-footer {
    .first-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
    }
    p{
      font-family: Inter sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.02em;
      text-align: center;
      color: #203939;
    }

    h3{
      font-family: Monrope, sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(32, 57, 57, 1);
    }

    .footer_logo_container {

      margin-top: 30px;
      width: 180px;
      height: 70px;
    }
    .footer_second_container {
      border-top: 1px solid dimgray;
      margin-top: 10px;
      padding-top: 10px;
      width: 120px;
      height: 70px;
    }
    .footer_third_container {
      text-align: center;
      margin-top: 20px;
      width: 250px;
      height: 260px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .footer_four_container {
      width: 200px;
      height: 60px;
    }
    .last-container {
      border-top: 1px solid dimgray;
      padding-top: 10px;
      margin-top: 80px;
      gap: 5px;
      display:flex;
      flex-direction: column;
    }
  }
  .gap-15 {
    gap: 5px;
  }
}
.gap-15 {
  gap: 15px;
}
</style>
