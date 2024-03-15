<template>
  <section class="wrapper-block-nine">
    <div class="container py-5">
      <div class="w-100">
        <div class="inner_long_card">
          <div>
            <h1>{{$t("landing.get_up_to_invest")}}</h1>
            <p class="mt-4">{{$t("landing.ceo_personally_contact_you")}}</p>
          </div>
          <button>{{$t("landing.submit_your_application")}}</button>
        </div>
      </div>
      <div class="inner_title mt-5">
        <h3 class="pt-5">{{$t("landing.contact_info_of_head")}}</h3>
        <p class="pt-3">{{$t("landing.take_an_opportunity_to_share")}}</p>
      </div>
      <div class="inner_content mt-5">
        <div class="inner_card" v-for="(card, index) in cardsWithResolvedImages" :key="`investent-card-${index}`">
          <img :src=card.imgResolved alt="">
          <p v-html="card.header"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data () {
    return {
      cards: [
        {
          img: "contact-icon1.svg",
          header: this.$t('landing.contact_headers.1')
        },
        {
          img: "contact-icon2.svg",
          header: this.$t('landing.contact_headers.2')
        },
        {
          img: "contact-icon3.svg",
          header: this.$t('landing.contact_headers.3')
        },
        {
          img: "contact-icon4.svg",
          header: this.$t('landing.contact_headers.4')
        },
        {
          img: "contact-icon5.svg",
          header: this.$t('landing.contact_headers.5')
        },
        {
          img: "contact-icon5.svg",
          header: this.$t('landing.contact_headers.6')
        },
        {
          img: "contact-icon6.svg",
          header: this.$t('landing.contact_headers.7')
        },
        {
          img: "contact-icon7.svg",
          header: this.$t('landing.contact_headers.8')
        }
      ]
    }
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

<style scoped lang="scss">
.wrapper-block-nine {
  width: 100%;
  height: 1100px;
  background-color: #020F22;
  position: relative;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 45%;
    right: 0em;
    width: 0.5px;
    height: 0.5px;
    border-radius: 50%;
    box-shadow: -5em 10em 30em 15em rgba(120, 214, 214, 0.3);
  }
  .inner_long_card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 198px;
    top: 80px;
    left: 116px;
    padding: 48px;
    border-radius: 12px;
    border: 1px solid #159F9F;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    button {
      font-family: Monrope, sans-serif;
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

    h1 {
      font-family: Monrope, sans-serif;
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
      letter-spacing: 0px;
      text-align: left;
      color: #FFF;
    }
    p{
      font-family: Monrope, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }
  }

  .inner_title {
    h3 {
      font-family: Monrope, sans-serif;
      font-size: 28px;
      font-weight: 600;
      line-height: 42px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }
    p {
      font-family: Monrope, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(181, 189, 190, 1);

    }
  }

  .inner_content {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;

    .inner_card {
      border-radius: 12px;
      padding: 24px;
      width: 24%;
      height: 254px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      border: 1px solid #17B2B233;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

      p {
        font-family: Monrope, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .wrapper-block-nine {

    .inner_content {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;

      .inner_card {
        border-radius: 12px;
        padding: 24px;
        width: 23.5%;
      
        p {
          font-size: 16px;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrapper-block-nine {
    height: 1700px;
    
    .inner_long_card{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 238px;
      top: 80px;
      left: 116px;
      padding: 35px;
      border-color: #0EB6B6;

      button {
        font-family: Monrope, sans-serif;
        border-radius: 32px;
        width: 200px;
        height: 61px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        color: #fff;
        background-color: #159F9F;
      }

      h1 {
        font-family: Monrope, sans-serif;
        font-size: 32px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0px;
        text-align: left;
        color: #FFF;
      }
      p{
        font-family: Monrope, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #fff;
      }
    }
    .inner_content {
      display: flex;
      flex-wrap: wrap;

      .inner_card {
        border-radius: 12px;
        padding: 24px;
        width: 48.5%;

        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>