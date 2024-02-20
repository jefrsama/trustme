<template>
  <footer class="wrapper-footer d-flex flex-column justify-content-between">
    <div class="container m-auto">
      <div class="d-flex justify-content-between align-items-top">
        <div class="footer_logo_container">
          <div class="d-flex justify-content-between">
            <img src="~@/assets/img/footer-logo.svg" width="200px" alt="">
          </div>
          <p class="pt-3">Сделаем этот мир лучше!</p>
        </div>
        <div class="footer_second_container">
          <h3>Сервисы</h3>
          <p class="mt-3">TrustContract</p>
        </div>
        <div class="footer_third_container">
          <h3>Контакты</h3>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon1.svg" alt="">
            <p class="pt-3">г. Астана. просп. Кабанбай Батыра 49</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon2.svg" alt="">
            <p class="pt-3">ceo.trustme@gmail.com</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon3.svg" alt="">
            <p class="pt-3">Отдел продаж: +7 (707)-111-09-50</p>
          </div>
          <div class="d-flex gap-15 align-items-center">
            <img src="~@/assets/img/footer-icon4.svg" alt="">
            <p class="pt-3">Техподдержка: +7 (707)-412-84-12</p>
          </div>
        </div>
        <div class="footer_four_container">
          <p>Политика конфидециальности</p>
          <p>Пользовательское соглашение</p>
          <p>Публичная оферта</p>
        </div>
      </div>
    </div>
    <div class="container m-auto">
      <div class="d-flex justify-content-between align-items-center">
        <p class="pt-3">© 2023 TrustMe Limited. Все права защищены.</p>
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

.gap-15 {
  gap: 15px;
}
</style>
