<template>
  <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :loop="true"
      :modules="modules"
      class="mySwiper"
      navigation
  >
    <swiper-slide>
      <div class="card">
      <h2 class="pt-4">Bramf</h2>
      <h5 class="pt-1">Мебельный цех</h5>
      <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <h2 class="pt-4">Bramf</h2>
        <h5 class="pt-1">Мебельный цех</h5>
        <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <h2 class="pt-4">Bramf</h2>
        <h5 class="pt-1">Мебельный цех</h5>
        <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
      </div>
    </swiper-slide>
    <swiper-slide><div class="card">
      <h2 class="pt-4">Bramf</h2>
      <h5 class="pt-1">Мебельный цех</h5>
      <p class="pt-4">TrustContract упрощает заключение договоров, сокращая время на сделки и способствуя увеличению продаж. Например, мебельный цех Bramf с TrustContract увеличил доходы на 15%</p>
    </div>
    </swiper-slide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

.card{
  width: 410px;
  height: 538px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 2px 1px rgba(120, 214, 214, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid;
  padding: 0 32px;

  h2 {
    font-size: 42px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(14, 182, 182, 1);;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color:rgba(181, 189, 190, 1);
  }

  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(253, 253, 253, 1);
  }
}

</style>