<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../assets/img/Лого.svg" width="120%" alt="">
      </div>
      <div class="">
        <ul class="nav gap-15">
          <li class="nav-item"><a href="#" class="nav-link text-white">О компании</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Сервисы</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Инвестиции</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Карьера</a></li>
          <li class="nav-item"><a href="#" class="nav-link text-white">Новости</a></li>
        </ul>
      </div>
      <div class="text-white">
        <b>RU</b>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
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

.gap-15 {
  gap: 20px;
}
</style>
