<template>
  <div class="myContainer pt-9">

    <!-- Section Header -->
    <div class="titreSection flex items-center sm:flex-row flex-col">
      <div class="beforTag"></div>
      <div class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] text-[10px]">
        Our Recommendation
      </div>
    </div>

    <!-- Main Section -->
    <div class="sectionTwo containerSection">

      <!-- Title + Category Filters + Navigation -->
      <div class="flex sm:flex-row flex-col justify-between items-center w-full gap-4 mb-6">

        <!-- Title -->
        <h5 class="titleSection text-center sm:text-left m-0 md:py-7 sm:py-5 py-4 
        md:text-[32px] sm:text-[28px] xs:text-[20px] text-[18px] font-bold">
          Featured House
        </h5>

        <!-- Categories -->
        <div class="categorieRec flex gap-3 py-3 flex-wrap justify-center sm:justify-start">
          <button class="category-btn" :class="{ active: houseDialog }" @click="setHouseDialog">
            <svg width="20" height="20" viewBox="0 0 24 24" :fill="houseDialog ? 'currentColor' : '#888B97'">
              <path d="M21 10.8319V19.5..." />
            </svg>
            <span>House</span>
          </button>

          <button class="category-btn" :class="{ active: villaDialog }" @click="setVillaeDialog">
            <svg width="20" height="20" viewBox="0 0 24 24" :fill="villaDialog ? 'currentColor' : '#888B97'">
              <path d="M7 20.9999H4C3.45..." />
            </svg>
            <span>Villa</span>
          </button>

          <button class="category-btn" :class="{ active: appartementDialog }" @click="setAppartementDialog">
            <svg width="20" height="20" viewBox="0 0 24 24" :fill="appartementDialog ? 'currentColor' : '#888B97'">
              <path d="M17 11V5C17 3.9..." />
            </svg>
            <span>Apartment</span>
          </button>
        </div>

        <!-- Desktop Navigation Buttons -->
        <div class="nextPrev sm:flex hidden gap-3">
          <button class="nav-btn" :class="{ actif: prevActif }" @click="onPrevious">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button class="nav-btn" :class="{ actif: nextActif }" @click="onNext">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

      </div>

      <!-- Swiper -->
      <Swiper
        class="property-swiper"
        @swiper="getRef"
        ref="mySwiper"
        :mousewheel="true"
        :freeMode="true"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          320: { slidesPerView: 1.1, spaceBetween: 16 },
          640: { slidesPerView: 1.8, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          1024:{ slidesPerView: 3.2, spaceBetween: 28 }
        }"
      >

        <!-- House -->
        <template v-if="houseDialog">
          <swiper-slide v-for="(house, index) in houses" :key="`house-${index}`" class="property-slide">
            <House
              :image="house.houseimage"
              :title="house.title"
              :prix="house.prix"
              :profileIamge="house.profileiamge"
              :profileName="house.fullname"
              :country="house.country"
            />
          </swiper-slide>
        </template>

        <!-- Villa -->
        <template v-if="villaDialog">
          <swiper-slide v-for="(villa, index) in villas" :key="`villa-${index}`" class="property-slide">
            <Villa
              :image="villa.villaimage"
              :title="villa.title"
              :prix="villa.prix"
              :profileIamge="villa.profileiamge"
              :profileName="villa.fullname"
              :country="villa.country"
            />
          </swiper-slide>
        </template>

        <!-- Apartment -->
        <template v-if="appartementDialog">
          <swiper-slide v-for="(appartement, index) in appartements" :key="`appartement-${index}`" class="property-slide">
            <Appartement
              :image="appartement.appartementimage"
              :title="appartement.title"
              :prix="appartement.prix"
              :profileIamge="appartement.profileiamge"
              :profileName="appartement.fullname"
              :country="appartement.country"
            />
          </swiper-slide>
        </template>

      </Swiper>

      <!-- Mobile Navigation -->
      <div class="nextPrev sm:hidden flex justify-center gap-3 mt-6">
        <button class="nav-btn" :class="{ actif: prevActif }" @click="onPrevious">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="nav-btn" :class="{ actif: nextActif }" @click="onNext">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>

  </div>
</template>


<script>
import { Scrollbar, Mousewheel, Navigation, Autoplay } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";

import House from "@/components/House.vue";
import Villa from "@/components/Villa.vue";
import Appartement from "@/components/Appartement.vue";

SwiperCore.use([Scrollbar, Mousewheel, Navigation, Autoplay]);

export default {
  name: "FeaturedHouse",
  components: { Swiper, SwiperSlide, House, Villa, Appartement },

  data() {
    return {
      nextActif: false,
      prevActif: false,
      swiper: null,

      houseDialog: true,
      villaDialog: false,
      appartementDialog: false,

      houses: [
        {
          houseimage: require("../../../assets/images/house1.png"),
          title: "Roselands House",
          prix: "$ 35.000.000",
          profileiamge: require("../../../assets/images/profile1.svg"),
          fullname: "Dianne Russell",
          country: "Manchester, Kentucky"
        },
        {
          houseimage: require("../../../assets/images/house2.png"),
          title: "Woodlandside",
          prix: "$ 20.000.000",
          profileiamge: require("../../../assets/images/profile2.svg"),
          fullname: "Robert Fox",
          country: "Dr. San Jose, South Dakota"
        },
        {
          houseimage: require("../../../assets/images/house3.png"),
          title: "The Old Lighthouse",
          prix: "$ 44.000.000",
          profileiamge: require("../../../assets/images/profile3.svg"),
          fullname: "Ronald Richards",
          country: "Santa Ana, Illinois"
        }
      ],

      villas: [
        {
          villaimage: require("../../../assets/images/house3.png"),
          title: "Cosmo's House",
          prix: "$ 22.000.000",
          profileiamge: require("../../../assets/images/profile4.svg"),
          fullname: "Jenny Wilson",
          country: "Inglewood, Maine"
        }
      ],

      appartements: [
        {
          appartementimage: require("../../../assets/images/house2.png"),
          title: "Woodlandside",
          prix: "$ 20.000.000",
          profileiamge: require("../../../assets/images/profile2.svg"),
          fullname: "Robert Fox",
          country: "San Jose, South Dakota"
        }
      ]
    };
  },

  methods: {
    setHouseDialog() {
      this.houseDialog = true;
      this.villaDialog = false;
      this.appartementDialog = false;
    },

    setVillaeDialog() {
      this.houseDialog = false;
      this.villaDialog = true;
      this.appartementDialog = false;
    },

    setAppartementDialog() {
      this.houseDialog = false;
      this.villaDialog = false;
      this.appartementDialog = true;
    },

    getRef(swiper) {
      this.swiper = swiper;
    },

    onNext() {
      if (this.swiper) {
        this.swiper.slideNext();
        this.nextActif = true;
        this.prevActif = false;
      }
    },

    onPrevious() {
      if (this.swiper) {
        this.swiper.slidePrev();
        this.prevActif = true;
        this.nextActif = false;
      }
    }
  }
};
</script>

<style scoped>
.myContainer {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Title */
.titleSection {
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Category buttons */
.categorieRec {
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 640px) {
  .categorieRec { justify-content: flex-start; }
}

.category-btn {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .65rem 1.3rem;
  background: #fff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  transition: .3s;
}

.category-btn.active {
  background: linear-gradient(135deg,#10b981 0%,#059669 100%);
  color: #fff;
}

/* Navigation Buttons */
.nav-btn {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e5e7eb;
  transition: .3s;
}

/* Swiper */
.property-swiper {
  width: 100%;
  padding: 2rem 0;
}

.property-slide {
  width: 85vw;
  max-width: 340px;
}

@media (min-width:640px) {
  .property-slide { width: 60vw; }
}
@media (min-width:768px) {
  .property-slide { width: 45vw; }
}
@media (min-width:1024px) {
  .property-slide { width: 360px !important; }
}

.containerSection {
  animation: slideIn .6s ease-out;
}
</style>
