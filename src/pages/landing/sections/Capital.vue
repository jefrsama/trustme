<template>
  <section class="wrapper-block-six">
    <div class="container text-center">
      <h1 class="py-5">Капитал и Инвесторы</h1>
      <div class="d-flex justify-content-between align-items-center">
        <div class="inner_long_card">
          <img src="~@/assets/img/capital-icon1.png" class="mt-4" alt="">
          <h1>$600 000 инвестиций</h1>
          <p>привлекли на данный момент</p>
        </div>
        <div class="inner_long_card">
          <img src="~@/assets/img/capital-icon2.png" class="mt-4" alt="">
          <h1>с <span>$2,5</span> млн до <span>$15 млн</span></h1>
          <p>рост оценки компании с 2021 по 2023 годы</p>
        </div>
      </div>
      <button class="my-5">Стать инвестором</button>

      <h1 class="mt-5">Нам доверяют более 20 инвесторов из разных стран</h1>
      <div class="d-flex justify-content-between align-items-center my-5">
        <div class="inner_card">
          <div>
            <img class="gap-25" src="~@/assets/img/face1.png" alt="">
            <h1 class="py-2">Марлен Шохитбаев</h1>
            <span>Berlin, Germany</span>
            <h5 class="py-2">Scope Ratings, Director</h5>
            <p>IT, Telecom, Real estate, Oil & Gas</p>
          </div>
          <div class="">Freie Universitat Berlin, MBA</div>
        </div>
        <div class="inner_card">
          <div>
            <img class="gap-25" src="~@/assets/img/face2.png" alt="">
            <h1 class="py-2">Эльдар Толеш</h1>
            <span>Dubai, UAE</span>
            <h5 class="py-2">Real Estate Investor & Angel Investor</h5>
            <p>Associate Director of Sales Unique Property Broker</p>
          </div>
          <div class="">Freie Universitat Berlin, MBA</div>
        </div>

        <div class="inner_card">
          <div>
            <img class="gap-25" src="~@/assets/img/face3.png" alt="">
            <h1 class="py-2">Ерик Шыныбеков</h1>
            <span>Berlin, Germany</span>
            <h5 class="py-2">Stock market and private equity investor</h5>
            <p>Founder of Investment Club</p>
          </div>
          <div class="">SBS Swiss Business School, MBA</div>
        </div>

        <div class="inner_card">
          <div>
            <img class="gap-25" src="~@/assets/img/face4.png" alt="">
            <h1 class="py-2">Габит Кемелов</h1>
            <span>Zurich, Switzerland</span>
            <h5 class="py-2">Blockchain specialist</h5>
            <p>Senior Business Analyst in Six Digital Exchange</p>
          </div>
          <div class="">University of Zurich</div>
        </div>
      </div>

      <div class="faces text-white text-center mt-5">
        <h1 class="">Наши клиенты</h1>
      </div>

    </div>
    <div class="scroll imgBox pt-5" style="--time:5s">
      <div class="d-flex gap-80">
        <img src="~@/assets/img/face5.png" alt="">
        <img src="~@/assets/img/face6.png" alt="">
        <img src="~@/assets/img/face7.png" alt="">
        <img src="~@/assets/img/face8.png" alt="">
        <img src="~@/assets/img/face9.png" alt="">
        <img src="~@/assets/img/face10.png" alt="">
        <img src="~@/assets/img/face11.png" alt="">
        <img src="~@/assets/img/face12.png" alt="">
      </div>
    </div>
  </section>

</template>

<script>

export default {
  name: "CapitalSection",
  components: {

  }
}
</script>

<style scoped lang="scss">

.wrapper-block-six {
  padding-top: 150px;
  position: relative;
  width: 100%;
  height: 1650px;
  background-color: #020F22;

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
</style>