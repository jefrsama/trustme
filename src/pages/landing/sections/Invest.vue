<template>
  <div class="wrapper-block-two d-flex justify-content-center">
    <div class="container m-auto">
      <div class="inner_card">
        <h2 class="text-center text-white">Инвестируйте в стартап с большим будущим!</h2>
        <div class="d-flex justify-content-between mt-5 gap-45">
          <img src="./../../../../public/img/IMG.png" alt="" class="">
          <div>
            <p class="text-white">“Начав свой путь в 2020 году как платформа для отзывов и рекомендаций, <a href="#">TrustMe</a> на сегодняшний день стала популярной площадкой, используемой как юридическими, так и физическими лицами в Казахстане. В декабре 2021 года мы запустили онлайн-сервис подписания договоров —
              <a href="#">TrustContract</a>”.</p>
            <p class="text-white mt-5">Чингиз Даулетбаев <span>— основатель и CEO Экосистемы Доверия TrustMe.</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestSection',
}
</script>

<style scoped lang="scss">
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
    height: 423px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
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
.gap-45 {
  gap: 45px;
}
</style>