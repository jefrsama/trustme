<template>
  <HomePage/>
</template>

<script>

import {defineComponent} from "vue";
import HomePage from "@/pages/index.vue";
export default defineComponent({
  components: {HomePage}
})
</script>

<style>
#app {
  font-family: Monrope, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
