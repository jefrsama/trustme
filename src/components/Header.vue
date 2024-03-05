<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../assets/img/Лого.svg" width="120%" alt="">
      </div>
        <ul class="nav">
          <li class="nav-item"><a href="#" class="nav-link text-white">О компании</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Сервисы</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Инвестиции</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Карьера</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Новости</a></li>
        </ul>
      <div>
<!--        <Dropdown v-model="selectedCityValue" :options="selectedCity" optionValue="value" optionLabel="label" @change="changeLanguage()" class="w-full md:w-14rem"></Dropdown>-->
      </div>
    </div>
  </header>
</template>

<script>
import { locale } from "@/stores/i18nStore";

export default {
  name: "HeaderComponent",
  props: {
    msg: String
  },
  components: {
  },
  data() {
    return {
      selectedCityValue: locale,
      selectedCity: [{ label: "ru", value: "ru" },
      { label: "kz", value: "kz" }]
    }
  },
  methods: {
    changeLanguage() {
      localStorage.setItem("lang", this.selectedCityValue);
      // this.$root.$emit("languageChanged");
      window.location.reload();
    }
  }
  }
</script>

<style lang="scss">
header {
  font-family: Monrope, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020F22;
  height: 61px;
}

@media only screen and (max-width: 992px) {
  li {
    font-size: 14px;
  }
}

@media only screen and (max-width: 768px) {
  li {
    font-size: 8px;
    visibility: hidden;
  }
}

.gap-15 {
  gap: 15px;
}
</style>
