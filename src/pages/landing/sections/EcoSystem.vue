<template>
  <section class="wrapper-block-one pt-5">
    <div class="container m-auto text-center">
      <div class="logo">
        <img src="~@/assets/img/Лого.svg" width="198px" height="41.25px" alt="">
      </div>
      <div class="mt-5">
        <h1 class="text-white">{{$t("landing.eco_system")}}</h1>
        <p class="mt-3">Инвестируйте <span>в самый быстрорастущий</span> стартап Центральной Азии</p>
        <button class="mt-2">{{$t("landing.be_an_investor")}}</button>
      </div>
    </div>
      <img class="mockup" src="~@/assets/img/Browser.png" alt="">
    <div class="rectangle"></div>
  </section>
</template>

<script>
export default {
  name: "EcoSystem",
}
</script>

<style lang="scss">

.wrapper-block-one {
  position: relative;
  width: 100%;
  height: 972px;
  background-image: url("../../../assets/img/BG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #020F22;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 30%;
    right: 8em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 75%;
    left: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
  }

  .mockup {
    z-index: 2;
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translate(-50%);
  }

  .rectangle {
    z-index: 1;
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 242px;
    background-color: #0EB6B6;
  }
  div {
    h1 {
      font-size: 64px;
  }
    p {
      font-size: 36px;
      color: #B5BDBE;
      span {
        color:#0EB6B6;
    }
  }
    button {
      border-radius: 32px;
      width: 230px;
      height: 61px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #fff;
      background-color: #159F9F;
    }
  }
}

@media only screen and (max-width: 1200px) {

  .wrapper-block-one {
    position: relative;
    width: 100%;
    height: 902px;
    background-image: url("../../../assets/img/BG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #020F22;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 30%;
      right: 12em;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }

    &::before {
      content: '';
      position: absolute;
      top: 75%;
      left: 0em;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }
    .mockup {
      z-index: 2;
      width: 80%;
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);
    }
    .rectangle {
      z-index: 1;
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
      height: 242px;
      background-color: #0EB6B6;
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-one {
    position: relative;
    width: 100%;
    height: 840px;
    background-image: url("../../../assets/img/BG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #020F22;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 30%;
      right: 50%;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }
    .mockup {
      z-index: 2;
      width: 70%;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%);
    }
    .rectangle {
      z-index: 1;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
      height: 200px;
      background-color: #0EB6B6;
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-block-one {
    position: relative;
    width: 100%;
    height: 700px;
    background-image: url("../../../assets/img/BG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #020F22;
    z-index: -1;

    &::after {
      visibility: hidden;
      content: '';
      position: absolute;
      top: 30%;
      right: 90%;
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
    }
    .mockup {
      z-index: 2;
      width: 80%;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%);
    }
    .rectangle {
      z-index: 1;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%);
      width: 100%;
      height: 150px;
      background-color: #0EB6B6;
    }

    div {
      h1 {
        font-size: 50px;
      }

      p {
        font-size: 22px;
        color: #B5BDBE;

        span {
          color: #0EB6B6;
        }
      }
    }
    button {
      border-radius: 32px;
      width: 100px;
      height: 61px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #fff;
      background-color: #159F9F;
    }
  }

}

</style>