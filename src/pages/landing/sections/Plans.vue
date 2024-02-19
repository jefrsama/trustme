<template>
  <div class="wrapper-block-seven d-flex flex-column justify-content-between">
    <div class="container">
      <h1 class="title">Планы на 2024 год</h1>
      <img class="img" src="./../../../../public/img/bg16.png" alt="">
      <img class="img" src="./../../../../public/img/map.png" alt="">
      <div class="x-sixteen">
        <div>
          <h1>x16</h1>
          <svg width="142" height="191" viewBox="0 0 142 191" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.0293 0C72.855 0 74.6063 0.856029 75.7241 2.30756L140.223 85.0446C141.639 86.8683 141.9 89.2875 140.894 91.3345C139.888 93.3816 137.801 94.6842 135.528 94.6842H93.0505V184.604C93.0505 187.88 90.3677 190.559 87.0887 190.559H54.8952C51.6163 190.559 48.9335 187.88 48.9335 184.604V94.7214H6.45594C4.18302 94.7214 2.05914 93.4188 1.09035 91.3717C0.121569 89.3247 0.345133 86.8683 1.76105 85.0818L66.3344 2.30756C67.4522 0.856029 69.2035 0 71.0293 0Z" fill="url(#paint0_linear_7122_9839)"/>
            <defs>
              <linearGradient id="paint0_linear_7122_9839" x1="7.42144" y1="5.39315" x2="170.271" y2="52.4624" gradientUnits="userSpaceOnUse">
                <stop stop-color="#079584"/>
                <stop offset="1" stop-color="#00A6B7"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-between pb-5">
      <div class="inner_card">
        <img src="./../../../../public/img/iconn1.png" alt="">
        <h2 class="">Новые рынки</h2>
        <p class="">Турция, Саудовская Аравия, США и другие страны</p>
      </div>
      <div class="inner_card">
        <img src="./../../../../public/img/iconn2.png" alt="">
        <h2 class="">Новые продукты</h2>
        <p class="">TrustMe AI, Big Data и Data Science</p>
      </div>
      <div class="inner_card">
        <img src="./../../../../public/img/iconn3.png" alt="">
        <h2 class="">Высокий спрос</h2>
        <p class="">несмотря на конкуренцию (DocuSign, AdobeSign)</p>
      </div>
      <div class="inner_card">
        <img src="./../../../../public/img/iconn4.png" alt="">
        <h2>Задача</h2>
        <p>Масштабироваться по миру, став лидером по подписанию договоров</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlansSection',
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .x-sixteen {
    position: absolute;
    top: 50%;
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
  }

  .title {
    padding-top: 150px;
    font-size: 42px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: center;
    color: #fff;
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
      line-height: 38px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
    }
    p {
      font-family: Manrope;
      font-size: 19px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(181, 189, 190, 1);
    }
  }
}
</style>