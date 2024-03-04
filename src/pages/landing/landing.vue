<template>

<!--
  <div style="height: 50px;">
    <h1 style="padding-top: 20px;">{{$t("iin")}}</h1>
  </div>
-->

  <eco-system/>
  <invest-section/>
  <achievement-page/>
  <trust-contract-page/>
  <cases-section/>
  <capital-section/>
  <plans-section/>
  <part-of-section/>
  <contact-section/>
</template>

<script>
import EcoSystem from "@/pages/landing/sections/EcoSystem.vue";
import InvestSection from "@/pages/landing/sections/Invest.vue";
import AchievementPage from "@/pages/landing/sections/Achievements.vue";
import TrustContractPage from "@/pages/landing/sections/TrustContract.vue";
import CasesSection from "@/pages/landing/sections/Cases.vue";
import CapitalSection from "@/pages/landing/sections/Capital.vue";
import PlansSection from "@/pages/landing/sections/Plans.vue";
import ContactSection from "@/pages/landing/sections/Contact.vue";
import PartOfSection from "@/pages/landing/sections/Partof.vue";

export default {
  name: "landingPage",
  components: {
    ContactSection,
    PartOfSection,
    PlansSection,
    CapitalSection,
    CasesSection,
    TrustContractPage,
    AchievementPage,
    InvestSection,
    EcoSystem
  },
}
</script>

<style scoped>

</style>