<template>
  <div class="overflow-x-hidden">
    <router-view />.
    <NavBar></NavBar>
<div class="background-hero"></div>

    <MainPage></MainPage>
    <!-- <house></house> -->
    <Recomendation></Recomendation>
    <SelSection></SelSection>
    <Reviews></Reviews>
    <SeeMore></SeeMore>
    <subscribeSection></subscribeSection>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from "@/views/sections/sectionOne/NabBar.vue";
import MainPage from "@/views/sections/sectionOne/MainPage.vue";
import Recomendation from "@/views/sections/sectionTwo/Recomendation.vue";
import SelSection from "@/views/sections/sectionThree/SelSection.vue";
import Reviews from "@/views/sections/sectionFoor/Reviews.vue";
import SeeMore from "@/views/sections/sectionFive/SeeMore.vue";
import subscribeSection from "@/views/sections/sectionSix/SubscribeSection.vue";
import Footer from "@/views/sections/sectionSeven/Footer.vue";
// import House from "@/views/sections/sectionTwo/House.vue";
import "@/views/styles/style.css";
import "@/views/styles/normalise.css";
export default {
  name: "app",
  components: {
    NavBar,
    MainPage,
    // House
    Recomendation,
    SelSection,
    Reviews,
    SeeMore,
    subscribeSection,
    Footer
  }
};
</script>

<style scoped>
.background-hero {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 650px;
  background-image: url('./assets/images/house_main.png');
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  z-index: -1;
  pointer-events: none;
}


</style>

