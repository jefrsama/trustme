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
  name: 'indexPage',
  components: {LandingPage, FooterComponent, Header},
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
