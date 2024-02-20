<template>
  <Header/>
  <landing-page/>
  <FooterComponent/>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
import LandingPage from "@/pages/landing/landing.vue";

export default {
  name: "indexPage",
  components: {LandingPage, FooterComponent, Header},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
