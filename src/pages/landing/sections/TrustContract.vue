<template>
  <section class="wrapper-block-four py-5">
    <img class="graph" src="~@/assets/img/bg4.png" alt="">
    <img class="mockup" src="~@/assets/img/Mockup.png" alt="">
    <div class="container" style="position: relative;">
      <div class="inner_content w-100">
        <h1>Trust<span>Contract</span></h1>
        <p>Это самое быстрое и легкое E-Sign решение</p>
        <div class="d-flex gap-25 align-items-center flex-wrap pt-3 inner_wrap">
          <div class="inner_card">
            <img src="~@/assets/img/trust-icon1.png" alt="">
            <h3 class="pt-3">5 способов подписания</h3>
            <ul>
              <li>Мессенджер</li>
              <li>SMS код</li>
              <li>ЭЦП</li>
              <li>Биометрия</li>
              <li>Egov mobile</li>
            </ul>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/trust-icon2.png" alt="">
            <h3 class="pt-3">Используем технологии</h3>
            <ul>
              <li>Smart Contract</li>
              <li>Blockchain</li>
              <li>Egov mobile</li>
              <li>QR подписания</li>
            </ul>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/trust-icon3.png" alt="">
            <h3 class="pt-3">Мы подходим для</h3>
            <ul>
              <li>B2B</li>
              <li>B2C</li>
              <li>B2G</li>
            </ul>
          </div>
          <div class="inner_card">
            <img src="~@/assets/img/trust-icon4.png" alt="">
            <h3 class="pt-3">Законность</h3>
            <p>Электронное подписание документов является законным в более чем 100 странах мира</p>
          </div>
        </div>
        <button class="mt-5">Узнать больше о TrustContract</button>
      </div>

      <div class="w-100 d-flex flex-wrap justify-content-between align-items-center">
        <div class="inner_long_card text-center">
          <h1>1030</h1>
          <p>Количество клиентов</p>
        </div>
        <div class="inner_long_card text-center">
          <h1>180 700</h1>
          <p>Подписанных договоров</p>
        </div>
        <div class="inner_long_card text-center">
          <div>
            <h1>147 млн ₸</h1>
            <p>Доходы за все время</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrustContractSection",
}
</script>

<style scoped lang="scss">
.wrapper-block-four {
  width: 100%;
  position: relative;
  height: 1472px;
  background-color: #020F22;

  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.3);
  }
  &::after {
    content: '';
    position: absolute;
    top: -20%;
    right: 0em;
    width: 0.5px;
    height: 0.5px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.3);
  }

  button {
    font-family: Manrope;
    border-radius: 32px;
    width: 341px;
    height: 61px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    background-color: #159F9F;
  }

  .graph {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .mockup {
    position: absolute;
    right: 0;
    top: 79px;
  }

  .inner_content {
    text-align: start;
    
    .inner_wrap {
      width: 60%;
    }
    h1 {
      font-family: Manrope;
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: 0px;
      text-align: left;

      color: #fff;

      span {
        color: #0EB6B6;
      }
    }

    p {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: #B5BDBE;
    }
  }

  .inner_card {
    padding: 30px 30px;
    width: 48%;
    height: 306px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    h3 {
      font-family: Manrope;
      font-size: 23px;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      color: #FDFDFD;
    }

    li, p {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: #B5BDBE;
    }
  }

  .inner_long_card {
    z-index: 100;
    margin-top: 250px;
    padding: 30px 30px;
    width: 400px;
    height: 190px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    h1 {
      font-family: Manrope;
      font-size: 70px;
      font-weight: 600;
      line-height: 84px;
      letter-spacing: 0em;
      color: #fff;
    }
    p {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      color: #0EB6B6;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .wrapper-block-four {
    .inner_card {
      padding: 30px 30px;
      width: 47%;
      height: 306px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
    .mockup{
      top: 5%;
      width: 35%;
    }
    .inner_long_card {
      z-index: 100;
      margin-top: 250px;
      padding: 30px 30px;
      width: 32%;
      height: 190px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      h1 {
        font-size: 60px;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .wrapper-block-four {
    .inner_card {
      padding: 30px 30px;
      width: 47%;
      height: 306px;
      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 29px;
      }

      li, p {
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
      }
    }
    .mockup{
      top: 5%;
      width: 35%;
    }
    .inner_long_card {
      z-index: 100;
      margin-top: 250px;
      padding: 30px 30px;
      width: 32%;
      height: 190px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      h1 {
        font-size: 50px;
      }
      p {
        font-size: 18px;

      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-four {
    height: 1972px;

    .inner_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1, p {
        text-align: center;
      }

      .inner_wrap {
        margin-top: 680px;
        width: 100%;
      }
    }
    .inner_card {
      padding: 30px 30px;
      width: 47%;
      height: 306px;

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 29px;
      }

      li, p {
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #B5BDBE;
        text-align: start;
      }
    }
    .mockup {
      left: 50%;
      top: 10%;
      width: 100%;
      transform: translate(-50%);
    }
    .inner_long_card {
      z-index: 100;
      margin-top: 100px;
      padding: 20px;
      width: 32%;
      height: 190px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      h1 {
        font-size: 38px;
      }
      p {
        font-size: 17px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-block-four {
    height: 2072px;

    .inner_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1, p {
        text-align: center;
      }

      .inner_wrap {
        margin-top: 620px;
        width: 100%;
      }
    }
    .inner_card {
      padding: 30px;
      width: 47%;
      height: 306px;

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 29px;
      }

      li, p {
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        color: #B5BDBE;
        text-align: start;
      }
    }
    .mockup {
      left: 50%;
      top: 10%;
      width: 100%;
      transform: translate(-50%);
    }
    .inner_long_card {
      z-index: 100;
      margin-top: 100px;
      padding: 15px;
      width: 48%;
      height: 184px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      h1 {
        margin-top: 30px;
        font-size: 38px;
        line-height: 44px;
      }
      p {
        font-size: 18px;
      }
    }
    .inner_long_card:nth-child(3) {
      z-index: 100;
      margin-top: 20px;
      padding: 15px;
      width: 100%;
      height: 184px;
      border: 1px solid #17B2B233;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
    .graph {
      position: absolute;
      width: 100%;
      bottom: 300px;
      left: 0;
    }
  }
}

.gap-25 {
  gap: 25px;
}
</style>