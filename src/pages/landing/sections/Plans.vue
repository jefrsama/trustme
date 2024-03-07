<template>
  <section class="wrapper-block-seven d-flex flex-column justify-content-between">
    <div class="container">
      <h1 class="title">{{$t("landing.plans_into_next_year")}}</h1>
      <img class="img" src="@/assets/img/bg16.png" alt="">
      <img class="img" src="@/assets/img/map.png" alt="">
      <div class="x-sixteen">
        <div class="d-flex flex-column justify-content-center align-items-center text-center">
          <div class="my-5">
            <h1>x16</h1>
            <img src="~@/assets/img/Vector.svg" alt="">
          </div>
          <h3>{{$t("landing.how_many_times_we_need_to_improve")}}</h3>
          <p>увеличив стоимость компании до <span>$150 млн</span></p>
        </div>
      </div>
      <div class="container flex-wrap gap-15 d-flex justify-content-between pb-5 inner_cards">
        <div class="inner_card">
          <img src="~@/assets/img/iconn1.png" alt="">
          <h2 class="">{{$t("landing.new_markets")}}</h2>
          <p class="">{{$t("landing.countries")}}</p>
        </div>
        <div class="inner_card">
          <img src="~@/assets/img/iconn2.png" alt="">
          <h2 class="">{{$t("landing.new_products")}}</h2>
          <p class="">{{$t("landing.description_of_products")}}</p>
        </div>
        <div class="inner_card">
          <img src="~@/assets/img/iconn3.png" alt="">
          <h2 class="">{{$t("landing.high_demand")}}</h2>
          <p class="">{{$t("landing.despite_the_competition")}}</p>
        </div>
        <div class="inner_card">
          <img src="~@/assets/img/iconn4.png" alt="">
          <h2>{{$t("landing.task")}}</h2>
          <p>{{$t("landing.scale_around_the_world")}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlansSection",
}
</script>

<style scoped lang="scss">
.wrapper-block-seven {
  width: 100%;
  height: 1200px;
  position: relative;
  background-color: #020F22;
  &::before {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow:5em -15em 30em 15em rgba(120, 214, 214, 0.25);
  }
  &::after {
    content: '';
    position: absolute;
    top: -5%;
    right: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.25);
  }
  .img {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .x-sixteen {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
      height: 200px;
      display: flex;
      align-items: end;
    }

    h1{
      padding-bottom: 8%;
      font-size: 160px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: 0px;
      text-align: center;
      color: #fff;
    }

    h3 {
      font-family: Manrope, sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
      letter-spacing: 0em;
      color: #FDFDFD;
    }

    p {
      font-family: Manrope, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
      color: #FDFDFD;
    }
    span {
      font-family: Inter, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
      color: #0EB6B6;
    }

  }

  .title {
    padding-top: 50px;
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
  }

  .inner_cards{
    margin-top: 650px;
  }
  .inner_card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24%;
    height: 255px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    gap: 20px;

    h2 {
      font-size: 28px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
    }
    p {
      font-family: Manrope sans-serif;
      font-size: 19px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(181, 189, 190, 1);
    }
  }
}

@media only screen and (max-width: 1400px) {
  .wrapper-block-seven {

    .inner_card {
      width: 23%;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 17px;
      font-weight: 400;
      line-height: 20px;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .wrapper-block-seven {
    .title {
      padding-top: 100px;
    }
    .img{
      top: 45%;
      width: 100%;
    } 
    .x-sixteen {
      top: 45%;
    }
    .inner_cards {
      margin-top: 700px;
    }
    .inner_card {
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-seven {
    height: 1500px;
    .inner_cards {
      margin-top: 700px;
    }

    .img {
      top: 33%;
      width: 100%;
    }

    .x-sixteen {
      top: 33%;
    }
    
    .inner_card {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 48%;
      height: 255px;
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>