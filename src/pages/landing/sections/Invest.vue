<template>
  <section class="wrapper-block-two d-flex justify-content-center">
    <div class="container m-auto">
      <div class="inner_card">
          <h2 class="text-center text-white mt-3">{{$t("landing.invest_into_with_big_future")}}</h2>
        <div class="d-flex justify-content-between mt-4 gap-45">
          <img src="~@/assets/img/IMG.png" alt="" class="">
          <div>
            <p class="text-white" v-html="$t('landing.invest_into_description')"></p>
            <p class="text-white mt-2" v-html="$t('landing.founder_and_ceo')"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InvestSection",
}
</script>

<style lang="scss">
.wrapper-block-two {
  width: 100%;
  height: 583px;
  background-color: #020F22;
  z-index: -1;

  h2 {
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    text-align: center;
  }

  .inner_card{
    padding: 48px;
    width: 100%;
    height: 453px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    img {
      width: 45%;
    }
  }

  div {
    p:first-child {
      font-size: 20px;
      font-weight: 500;
      line-height: 36px;

      a {
        color: #0EB6B6;
        text-transform: none;
        text-decoration: none;
      }
    }
    p:last-child {
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;

      span {
        color: #B5BDBE;
      }
    }
  }
}
@media only screen and (max-width: 1400px) {
  .wrapper-block-two {
    
    .inner_card {
      padding: 48px;
      width: 100%;
      height: 523px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
  }
}

@media only screen and (max-width: 1200px) {
  .wrapper-block-two {
    width: 100%;
    height: 583px;
    background-color: #020F22;
    z-index: -1;

    h2 {
      font-size: 36px;
      font-weight: 700;
      line-height: 50px;
      text-align: center;
    }

    .inner_card{
      padding: 22px;
      width: 100%;
      height: 423px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      
      img {
        width: 40%;
      }
    }
    
    div {
      p:first-child {
        font-size: 16px;
        font-weight: 500;
        line-height: 36px;

        a {
          color: #0EB6B6;
          text-transform: none;
          text-decoration: none;
        }
      }
      p:last-child {
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;

        span {
          color: #B5BDBE;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-two {
    width: 100%;
    height: 783px;
    background-color: #020F22;
    z-index: -1;

    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 50px;
      text-align: center;
    }
    .inner_card {
      padding: 22px;
      width: 100%;
      height: 693px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      img {
        width: 100%;
        height: 320px;
      }

      div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
      }
    }
    div {
      p:first-child {
        font-size: 16px;
        font-weight: 500;
        line-height: 36px;

        a {
          color: #0EB6B6;
          text-transform: none;
          text-decoration: none;
        }
      }
      p:last-child {
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;

        span {
          color: #B5BDBE;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-block-two {
    width: 100%;
    height: 783px ;
    background-color: #020F22;
    z-index: -1;

    h2 {
      font-size: 29px;
      font-weight: 700;
      line-height: 40px;
      text-align: center;
    }
    .inner_card {
      padding: 22px;
      width: 100%;
      height: 693px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      img {
        width: 100%;
        height: 240px;
      }

      div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
      }
    }
    div {
      p:first-child {
        font-size: 15px;
        font-weight: 500;
        line-height: 36px;

        a {
          color: #0EB6B6;
          text-transform: none;
          text-decoration: none;
        }
      }
      p:last-child {
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;

        span {
          color: #B5BDBE;
        }
      }
    }
  }
}

.gap-45 {
  gap: 45px;
}
</style>