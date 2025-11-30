<template>
  <div class="overflow-x-hidden">
    <router-view />.
    <NavBar></NavBar>

    <img
      src="./assets/images/house_main.png"
      class="sm:w-[100%] md:w-[50%] absolute right-0 top-0 z-[-1] lg:flex hidden lg:h-[auto] "
      alt
    />
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

