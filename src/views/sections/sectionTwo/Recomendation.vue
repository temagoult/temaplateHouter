<template>
  <div class="myContainer pt-9">
    <!-- Section Header -->
    <div class="titreSection flex items-center sm:flex-row flex-col">
      <div class="beforTag"></div>
      <div     class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] text-[10px]">
        Our Recommendation
      </div>
    </div>

    <!-- Main Section -->
    <div class="sectionTwo containerSection">
      <!-- Title and Controls Row -->
      <div class="flex sm:flex-row flex-col justify-between items-center w-full gap-4 mb-6">
        <h5 class="titleSection m-0 md:py-7 sm:py-5 py-4 md:text-[32px] sm:text-[28px] xs:text-[20px] text-[18px] font-bold">
          Featured House
        </h5>

        <!-- Category Filters -->
        <div class="categorieRec flex gap-3 py-5">
          <button
            class="category-btn"
            :class="{ active: houseDialog }"
            @click="setHouseDialog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              :fill="houseDialog ? 'currentColor' : '#888B97'"
            >
              <path d="M21 10.8319V19.5C20.9998 19.7719 20.9262 20.0386 20.7868 20.272C20.6475 20.5054 20.4476 20.6968 20.2084 20.8259C19.9916 20.9432 19.7485 21.0031 19.5021 20.9999H14.9967C14.7978 20.9999 14.607 20.9209 14.4664 20.7803C14.3257 20.6396 14.2467 20.4488 14.2467 20.2499V15.7493C14.2467 15.5504 14.1677 15.3596 14.0271 15.2189C13.8864 15.0783 13.6956 14.9993 13.4967 14.9993H10.4967C10.2978 14.9993 10.107 15.0783 9.9664 15.2189C9.82574 15.3596 9.74673 15.5504 9.74673 15.7493V20.2499C9.74673 20.4488 9.66771 20.6396 9.52706 20.7803C9.3864 20.9209 9.19564 20.9999 8.99673 20.9999H4.5002C4.28754 21.0005 4.07723 20.9556 3.88335 20.8682C3.68948 20.7808 3.51651 20.653 3.37604 20.4934C3.12946 20.2082 2.99571 19.8427 3.00001 19.4657V10.8318C3.00017 10.6228 3.04392 10.4162 3.12846 10.225C3.21299 10.0339 3.33646 9.86251 3.49098 9.7218L10.9903 2.90308C11.2658 2.65075 11.6258 2.51078 11.9994 2.51074C12.3729 2.51071 12.733 2.65062 13.0085 2.90289L20.5091 9.72189C20.6636 9.86263 20.787 10.034 20.8716 10.2252C20.9561 10.4163 20.9998 10.6229 21 10.8319Z" />
            </svg>
            <span>House</span>
          </button>

          <button
            class="category-btn"
            :class="{ active: villaDialog }"
            @click="setVillaeDialog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              :fill="villaDialog ? 'currentColor' : '#888B97'"
            >
              <path d="M7 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V8.68994C3 8.26994 3.25 7.89994 3.64 7.74994L14.64 3.51994C14.7921 3.46126 14.9561 3.44064 15.118 3.45986C15.2798 3.47909 15.4345 3.53758 15.5686 3.63025C15.7027 3.72292 15.8121 3.84696 15.8873 3.99156C15.9624 4.13617 16.0012 4.29696 16 4.45994V9.99994H8C7.45 9.99994 7 10.4499 7 10.9999V20.9999ZM17 11.9999H10C9.45 11.9999 9 12.4499 9 12.9999V19.9999C9 20.5499 9.45 20.9999 10 20.9999H14V16.9999C14 16.4499 14.45 15.9999 15 15.9999C15.55 15.9999 16 16.4499 16 16.9999V20.9999H20C20.55 20.9999 21 20.5499 21 19.9999V11.9999C21 10.8999 20.1 9.99994 19 9.99994C17.9 9.99994 17 10.8999 17 11.9999Z" />
            </svg>
            <span>Villa</span>
          </button>

          <button
            class="category-btn"
            :class="{ active: appartementDialog }"
            @click="setAppartementDialog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              :fill="appartementDialog ? 'currentColor' : '#888B97'"
            >
              <path d="M17 11V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H11V17H13V21H19C20.1 21 21 20.1 21 19V13C21 11.9 20.1 11 19 11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z" />
            </svg>
            <span>Apartment</span>
          </button>
        </div>

        <!-- Navigation Buttons (Desktop) -->
        <div class="nextPrev sm:flex hidden gap-3">
          <button
            class="nav-btn"
            :class="{ actif: prevActif }"
            @click="onPrevious"
            aria-label="Previous"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button
            class="nav-btn"
            :class="{ actif: nextActif }"
            @click="onNext"
            aria-label="Next"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- Swiper Carousel -->
      <Swiper
        class="property-swiper"
        @swiper="getRef"
        ref="mySwiper"
        :slidesPerView="'auto'"
        :spaceBetween="20"
        :mousewheel="true"
        :freeMode="true"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
      >
        <!-- House Cards -->
        <template v-if="houseDialog">
          <swiper-slide
            v-for="(house, index) in houses"
            :key="`house-${index}`"
            class="property-slide"
          >
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

        <!-- Villa Cards -->
        <template v-if="villaDialog">
          <swiper-slide
            v-for="(villa, index) in villas"
            :key="`villa-${index}`"
            class="property-slide"
          >
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

        <!-- Apartment Cards -->
        <template v-if="appartementDialog">
          <swiper-slide
            v-for="(appartement, index) in appartements"
            :key="`appartement-${index}`"
            class="property-slide"
          >
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

      <!-- Navigation Buttons (Mobile) -->
      <div class="nextPrev sm:hidden flex justify-center gap-3 mt-6">
        <button
          class="nav-btn"
          :class="{ actif: prevActif }"
          @click="onPrevious"
          aria-label="Previous"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          class="nav-btn"
          :class="{ actif: nextActif }"
          @click="onNext"
          aria-label="Next"
        >
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
  components: {
    Swiper,
    SwiperSlide,
    House,
    Villa,
    Appartement
  },
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
        },
        {
          houseimage: require("../../../assets/images/house1.png"),
          title: "Cosmo's House",
          prix: "$ 22.000.000",
          profileiamge: require("../../../assets/images/profile4.svg"),
          fullname: "Jenny Wilson",
          country: "Preston Rd. Inglewood, Maine 98380"
        }
      ],
      villas: [
        {
          villaimage: require("../../../assets/images/house3.png"),
          title: "Cosmo's House",
          prix: "$ 22.000.000",
          profileiamge: require("../../../assets/images/profile4.svg"),
          fullname: "Jenny Wilson",
          country: "Preston Rd. Inglewood, Maine 98380"
        },
        {
          villaimage: require("../../../assets/images/house2.png"),
          title: "Woodlandside",
          prix: "$ 20.000.000",
          profileiamge: require("../../../assets/images/profile2.svg"),
          fullname: "Robert Fox",
          country: "Dr. San Jose, South Dakota"
        },
        {
          villaimage: require("../../../assets/images/house1.png"),
          title: "The Old Lighthouse",
          prix: "$ 44.000.000",
          profileiamge: require("../../../assets/images/profile3.svg"),
          fullname: "Ronald Richards",
          country: "Santa Ana, Illinois"
        }
      ],
      appartements: [
        {
          appartementimage: require("../../../assets/images/house2.png"),
          title: "Woodlandside",
          prix: "$ 20.000.000",
          profileiamge: require("../../../assets/images/profile2.svg"),
          fullname: "Robert Fox",
          country: "Dr. San Jose, South Dakota"
        },
        {
          appartementimage: require("../../../assets/images/house3.png"),
          title: "Cosmo's House",
          prix: "$ 22.000.000",
          profileiamge: require("../../../assets/images/profile4.svg"),
          fullname: "Jenny Wilson",
          country: "Preston Rd. Inglewood, Maine 98380"
        },
        {
          appartementimage: require("../../../assets/images/house1.png"),
          title: "Roselands House",
          prix: "$ 35.000.000",
          profileiamge: require("../../../assets/images/profile1.svg"),
          fullname: "Dianne Russell",
          country: "Manchester, Kentucky"
        }
      ]
    };
  },
  methods: {
    setHouseDialog() {
      this.villaDialog = false;
      this.appartementDialog = false;
      this.houseDialog = true;
    },
    setVillaeDialog() {
      this.villaDialog = true;
      this.appartementDialog = false;
      this.houseDialog = false;
    },
    setAppartementDialog() {
      this.villaDialog = false;
      this.houseDialog = false;
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
        this.nextActif = false;
        this.prevActif = true;
      }
    }
  }
};
</script>

<style scoped>
/* Container Styles */
.myContainer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Header */
.titreSection {
  margin-bottom: 1rem;
}



.ouRecomendationTag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

/* Title */
.titleSection {
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

/* Category Buttons */
.categorieRec {
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  color: #6b7280;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.category-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-btn.active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-color: #10b981;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.category-btn.active svg {
  fill: #ffffff !important;
}

.category-btn svg {
  transition: all 0.3s ease;
}

/* Navigation Buttons */
.nav-btn {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 50%;
  color: #6b7280;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.nav-btn:hover {
  background: #f9fafb;
  border-color: #10b981;
  color: #10b981;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.nav-btn.actif {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-color: #10b981;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
}

.nav-btn i {
  transition: transform 0.3s ease;
}

.nav-btn:hover i {
  transform: translateX(-2px);
}

.nav-btn:last-child:hover i {
  transform: translateX(2px);
}

/* Swiper Container */
.property-swiper {
  width: 100%;
  padding: 2rem 0;
  overflow: visible;
}

.property-slide {
  width: 340px;
  height: auto;
  display: flex;
  justify-content: center;
}

/* Responsive Styles */
@media (max-width: 640px) {
  .category-btn {
    padding: 0.5rem 1rem;
    font-size: 12px;
    gap: 0.35rem;
  }

  .category-btn svg {
    width: 16px;
    height: 16px;
  }

  .nav-btn {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }

  .property-slide {
    width: 280px;
  }
}

@media (min-width: 768px) {
  .property-slide {
    width: 360px;
  }
}

@media (min-width: 1024px) {
  .property-slide {
    width: 380px;
  }
}

/* Animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.containerSection {
  animation: slideIn 0.6s ease-out;
}

/* Swiper Custom Scrollbar */
.swiper-scrollbar {
  background: #f3f4f6;
  border-radius: 10px;
  height: 4px;
}

.swiper-scrollbar-drag {
  background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
  border-radius: 10px;
}
</style>