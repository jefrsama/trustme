<template>
  <section class="wrapper-block-six">
    <div class="container text-center">
      <h1 class="py-5">{{$t("landing.capital_and_investors")}}</h1>
      <div class="d-flex flex-wrap gap-15 justify-content-between align-items-center">
        <div class="inner_long_card">
          <img src="~@/assets/img/capital-icon1.png" class="mt-4" alt="">
          <h1>{{$t("landing.six_thousand_invest")}}</h1>
          <p>{{$t("landing.get_right_now")}}</p>
        </div>
        <div class="inner_long_card">
          <img src="~@/assets/img/capital-icon2.png" class="mt-4" alt="">
          <h1 v-html="$t('landing.from_2_to_15')"></h1>
          <p>{{$t("landing.grow_up_from_21_to_23")}}</p>
        </div>
      </div>
      <button class="my-5">{{$t("landing.be_an_investor")}}</button>

      <h1 class="mt-5">{{$t("landing.we_are_in_believe_to_20_investors")}}</h1>
      <div class="d-flex flex-wrap gap-15 justify-content-between align-items-center my-5">
        <div class="inner_card" v-for="(card, index) in cardsWithResolvedImages" :key="`investent-card-${index}`">
          <div>
            <img class="gap-25" :src="card.imgResolved" alt="">
            <h1 class="" v-html="card.name"></h1>
            <span v-html="card.country"></span>
            <h5 class="py-1" v-html="card.major"></h5>
            <p v-html="card.description"></p>
          </div>
          <div class="" v-html="card.place"></div>
        </div>
      </div>
    </div>

    <div class="clients text-white text-center">
      <div class="scroll">
        <div v-for="(faceGroup, index) in faceGroups" :key="index" class="scroll-slide">
          <img v-for="(face, faceIndex) in faceGroup" :key="faceIndex" :src="require(`@/assets/img/face${faceIndex + 6}.png`)" :alt="'Face ' + faceIndex">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "CapitalSection",
  data() {
    return {
      faceGroups: [
        [
          "~@/assets/img/face6.png",
          "~@/assets/img/face7.png",
          "~@/assets/img/face8.png",
          "~@/assets/img/face9.png",
          "~@/assets/img/face10.png",
          "~@/assets/img/face11.png",
          "~@/assets/img/face12.png"
        ],
        [
          "~@/assets/img/face6.png",
          "~@/assets/img/face7.png",
          "~@/assets/img/face8.png",
          "~@/assets/img/face9.png",
          "~@/assets/img/face10.png",
          "~@/assets/img/face11.png",
          "~@/assets/img/face12.png"
        ]
      ],
      cards: [
        {
          img: "face1.png",
          name: this.$t('landing.investors_card_name.1'),
          country: this.$t('landing.investors_card_country.1'),
          major: this.$t('landing.investors_card_major.1'),
          description: this.$t('landing.investors_card_description.1'),
          place: this.$t('landing.investors_card_place.1'),
        },
        {
          img: "face2.png",
          name: this.$t('landing.investors_card_name.2'),
          country: this.$t('landing.investors_card_country.2'),
          major: this.$t('landing.investors_card_major.2'),
          description: this.$t('landing.investors_card_description.2'),
          place: this.$t('landing.investors_card_place.2'),
        },
        {
          img: "face3.png",
          name: this.$t('landing.investors_card_name.3'),
          country: this.$t('landing.investors_card_country.3'),
          major: this.$t('landing.investors_card_major.3'),
          description: this.$t('landing.investors_card_description.3'),
          place: this.$t('landing.investors_card_place.3'),
        },
        {
          img: "face4.png",
          name: this.$t('landing.investors_card_name.4'),
          country: this.$t('landing.investors_card_country.4'),
          major: this.$t('landing.investors_card_major.4'),
          description: this.$t('landing.investors_card_description.4'),
          place: this.$t('landing.investors_card_place.4'),
        }
      ]
    };
  },
  computed: {
    cardsWithResolvedImages() {
      return this.cards.map(card => ({
        ...card,
        imgResolved: require(`@/assets/img/${card.img}`),
      }));
    },
  }
}
</script>

<style lang="scss">

.wrapper-block-six {
  padding-top: 150px;
  position: relative;
  width: 100%;
  height: 1650px;
  background-color: #020F22;

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
    padding: 20px;

    h1 {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
    }

    .scroll {
      position: relative;
      overflow: hidden;
      padding: 20px 0;
      white-space: nowrap;
      -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);

      .scroll-slide {
        display: inline-block;
        animation: 12s slide infinite linear;

        img {
          height: 150px;
          margin: 0 40px;
        }
      }
    }
  }

  /* logos end*/

  h1 {
    color: #fff;
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
  }
  &::before {
    content: '';
    position: absolute;
    top: 55%;
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
    right: 0em;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.3);
  }
  .inner_long_card {
    text-align: center;
    width: 49%;
    height: 245px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    padding: 20px 72px;
    font-size: 2em;

    h1 {
      padding-top: 25px;
      font-size: 42px;
      font-weight: 600;
      line-height: 50px;
      letter-spacing: 0em;
      text-align: center;

      span{
        color: rgba(14, 182, 182, 1);
      }
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(181, 189, 190, 1);
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

  .inner_card {
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: 24%;
    height: 440px;
    border: 1px solid #17B2B233;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    text-align: center;
    font-size: 2em;

    div {
      h1 {
        font-size: 24px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(14, 182, 182, 1);
      }
      h5 {
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(231, 231, 231, 1);
      }
    }
    div:last-child {
      bottom: 15px;
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      width: 250px;
      height: 28px;
      padding: 4px 12px;
      border-radius: 8px;
      gap: 10px;
      background-color: rgba(22, 45, 69, 1);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(231, 231, 231, 1);
    }
  }

  .scroll{
    position: absolute;
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

  @keyframes scroll {
    from {transform: translateX(10%)}
    to {transform: translateX(-10%)}
  }
  .imgBox div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .imgBox img {
    width: 80%;
    padding: 10px;
  }
}

@media only screen and (min-width: 1200px) {

  .wrapper-block-six {
    .inner_card {
      width: 23%;
      }

    .inner_long_card {
      text-align: center;
      width: 49%;
      height: 305px;
    }
  }
}

@media only screen and (max-width: 1200px) {

  .wrapper-block-six {
    height: 1700px;

    .inner_long_card {
      height: 270px;
      h1 {
        font-size: 26px;
        line-height: 30px;
      }
      p {
        font-size: 16px;
      }
    }

    .inner_card {
      position: relative;
      padding: 20px;
      display: flex;
      flex-direction: column;
      width: 23%;
      height: 470px;
      text-align: center;
      font-size: 1em;

      div:last-child {
        bottom: 15px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        width: 200px;
        height: 38px;
        padding: 10px;
        border-radius: 8px;
        gap: 10px;
        font-size: 11px;
      }
    }
  }
}
@media only screen and (max-width: 992px) {
  .wrapper-block-six {
    height: 3150px;

    .inner_long_card {
      text-align: center;
      width: 100%;
      height: 255px;
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 20px;
      }
    }
    .inner_card {
      position: relative;
      padding: 24px;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 400px;
      text-align: center;
      font-size: 1em;

      div {
        h1 {
          font-size: 24px;
          font-weight: 600;
          line-height: 33px;
          letter-spacing: 0em;
          text-align: center;
          color: #fff;
        }
        span {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          color: rgba(14, 182, 182, 1);
        }
        h5 {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: center;
          color: #fff;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: center;
          color: rgba(231, 231, 231, 1);
        }
      }
      div:last-child {
        bottom: 15px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        width: 200px;
        height: 38px;
        padding: 10px;
        border-radius: 8px;
        gap: 10px;
        background-color: rgba(22, 45, 69, 1);
        font-size: 11px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(231, 231, 231, 1);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .wrapper-block-six {

    .inner_long_card{
      h1 {
        font-size: 25px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
</style>