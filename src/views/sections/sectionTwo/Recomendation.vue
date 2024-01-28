<template>
  <div class="myContainer pt-9">
    <div class="titreSection flex items-center sm:flex-row flex-col">
      <div class="beforTag"></div>
      <div
        class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] text-[10px]"
      >Our Recommendation</div>
    </div>
    <div class="sectionTwo containerSection">
      <div class="flex sm:flex-row flex-col justify-between items-center w-[105%]">
        <h5
          class="titleSection m-0 md:py-7 sm:py-5 py-4 md:text-[32px] sm:text-[28px] xs:text-[20px] text-[14px]"
        >Featured House</h5>
        <div class="categorieRec flex gap-3 py-5">
          <div
            class="house cursor-pointer"
            @click="setHouseDialog"
            :class="this.houseDialog?'active house md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] cursor-pointer md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px] '
            :'house md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] cursor-pointer md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px] '"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="this.houseDialog?'active ':''"
                fill="#888B97"
              >
                <path
                  d="M21 10.8319V19.5C20.9998 19.7719 20.9262 20.0386 20.7868 20.272C20.6475 20.5054 20.4476 20.6968 20.2084 20.8259C19.9916 20.9432 19.7485 21.0031 19.5021 20.9999H14.9967C14.7978 20.9999 14.607 20.9209 14.4664 20.7803C14.3257 20.6396 14.2467 20.4488 14.2467 20.2499V15.7493C14.2467 15.5504 14.1677 15.3596 14.0271 15.2189C13.8864 15.0783 13.6956 14.9993 13.4967 14.9993H10.4967C10.2978 14.9993 10.107 15.0783 9.9664 15.2189C9.82574 15.3596 9.74673 15.5504 9.74673 15.7493V20.2499C9.74673 20.4488 9.66771 20.6396 9.52706 20.7803C9.3864 20.9209 9.19564 20.9999 8.99673 20.9999H4.5002C4.28754 21.0005 4.07723 20.9556 3.88335 20.8682C3.68948 20.7808 3.51651 20.653 3.37604 20.4934C3.12946 20.2082 2.99571 19.8427 3.00001 19.4657V10.8318C3.00017 10.6228 3.04392 10.4162 3.12846 10.225C3.21299 10.0339 3.33646 9.86251 3.49098 9.7218L10.9903 2.90308C11.2658 2.65075 11.6258 2.51078 11.9994 2.51074C12.3729 2.51071 12.733 2.65062 13.0085 2.90289L20.5091 9.72189C20.6636 9.86263 20.787 10.034 20.8716 10.2252C20.9561 10.4163 20.9998 10.6229 21 10.8319Z"
                />
              </svg>
            </div>
            <div>House</div>
          </div>
          <div
            :class="this.villaDialog?'active villa md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] cursor-pointer md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px]':'villa cursor-pointer md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px]  md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px]'"
            @click="setVillaeDialog"
          >
            <div class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#888B97"
                :class="this.villaDialog?'active ':''"
              >
                <path
                  d="M7 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V8.68994C3 8.26994 3.25 7.89994 3.64 7.74994L14.64 3.51994C14.7921 3.46126 14.9561 3.44064 15.118 3.45986C15.2798 3.47909 15.4345 3.53758 15.5686 3.63025C15.7027 3.72292 15.8121 3.84696 15.8873 3.99156C15.9624 4.13617 16.0012 4.29696 16 4.45994V9.99994H8C7.45 9.99994 7 10.4499 7 10.9999V20.9999ZM17 11.9999H10C9.45 11.9999 9 12.4499 9 12.9999V19.9999C9 20.5499 9.45 20.9999 10 20.9999H14V16.9999C14 16.4499 14.45 15.9999 15 15.9999C15.55 15.9999 16 16.4499 16 16.9999V20.9999H20C20.55 20.9999 21 20.5499 21 19.9999V11.9999C21 10.8999 20.1 9.99994 19 9.99994C17.9 9.99994 17 10.8999 17 11.9999Z"
                />
              </svg>
            </div>
            <div>Villa</div>
          </div>
          <div
            :class="this.appartementDialog?'active md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px] appartement cursor-pointer md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px] ':
            'appartement cursor-pointer p-2 md:w-[165px] md:h-[54px] sm:w-[120px] sm:h-[32px] xs:w-[120px] xs:h-[32px] w-[100px] h-[22px] md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px]'"
            @click="setAppartementDialog"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="this.appartementDialog?'active ':''"
                fill="#888B97"
              >
                <path
                  d="M17 11V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H11V17H13V21H19C20.1 21 21 20.1 21 19V13C21 11.9 20.1 11 19 11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
                />
              </svg>
            </div>
            <div>Apartment</div>
          </div>
        </div>
        <div class="nextPrev sm:flex hidden gap-3">
          <div
            :class=" this.prevActif?'actif nextButt flex items-center justify-center text-[25px] cursor-pointer':'nextButt flex items-center justify-center text-[25px] cursor-pointer'"
            @click="onPrevious"
          >  <i
            class="fa-solid fa-arrow-left lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] "
          ></i></div>
          <div
            :class="this.nextActif?'actif previousButt flex items-center justify-center text-[25px] cursor-pointer':'previousButt flex items-center justify-center text-[25px] cursor-pointer'"
            @click="onNext"
          >  <i
            class="fa-solid fa-arrow-right lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] "
          ></i></div>
        </div>
      </div>
      <Swiper
        class="md:w-[120%]"
        @swiper="getRef"
        ref="mySwiper"
        slidesPerView="auto"
        mousewheel
        freeMode
        loop
        autoplay
      >
        <div class slot="scrollbar"></div>

        <div class="swiper-button-next" slot="button-next" @click="onNext"></div>
        <template v-if="houseDialog">
          <swiper-slide
            v-for="(house,index) in houses "
            :key="index"
            class="z-1 cursor-pointer] xs:w-[50%] w-[100%]"
          >
            <House
              class="xs:w-[100%] w-[70%]"
              :image="house.houseimage"
              :title="house.title"
              :prix="house.prix"
              :profileIamge="house.profileiamge"
              :profileName="house.fullname"
              :country="house.country"
            />
          </swiper-slide>
        </template>
        <template v-if="villaDialog">
          <swiper-slide
            v-for="(villa,index) in villas "
            :key="'A'+index"
            class="z-1 cursor-pointer md:w-[360px] sm:w-[260px] xs:w-[50%] w-[100%]"
          >
            <Villa
              class="md:w-[370px] sm:w-[260px] xs:w-[100] w-[70%]"
              :image="villa.villaimage"
              :title="villa.title"
              :prix="villa.prix"
              :profileIamge="villa.profileiamge"
              :profileName="villa.fullname"
              :country="villa.country"
            />
          </swiper-slide>
        </template>
        <template v-if="appartementDialog">
          <swiper-slide
            v-for="(appartement,index) in appartements "
            :key="'B'+index"
            class="z-1 cursor-pointer md:w-[360px] sm:w-[260px] xs:w-[50%] w-[100%]"
          >
            <Appartement
              class="md:w-[370px] sm:w-[260px] xs:w-[100%] w-[70%]"
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
      <div class="nextPrev sm:hidden flex justify-center gap-3">
        <div
          :class=" this.prevActif?'actif  lg:w-[60px] lg:h-[52px] md:w-[55px] md:h-[45px] sm:w-[25px] sm:h-[20px] nextButt flex items-center justify-center cursor-pointer  lg:text-[25px] md:text-[22px] sm:text-[18px] text-[15px]':'nextButt flex items-center justify-center lg:text-[25px] md:text-[22px] sm:text-[18px] text-[15px] cursor-pointer'"
          @click="onPrevious"
        >  <i
            class="fa-solid fa-arrow-left lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] "
          ></i></div>
        <div
          :class="this.nextActif?'actif previousButt flex items-center justify-center  lg:text-[25px] md:text-[22px] sm:text-[18px] text-[15px]cursor-pointer':'previousButt flex items-center justify-center lg:text-[25px] md:text-[22px] sm:text-[18px] text-[15px] cursor-pointer'"
          @click="onNext"
        >  <i
            class="fa-solid fa-arrow-right lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]"
          ></i></div>
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
  name: "HomePage",
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
      sup: "<",
      inf: ">",
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
      ],
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        scrollbar: true,
        mousewheel: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
            pagination: {
              el: ".swiper-pagination",
              type: "bullets"
            },
            navigation: {}
          }
        }
      }
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
      this.swiper.slideNext();
      this.nextActif = true;
      this.prevActif = false;
    },
    onPrevious() {
      this.swiper.slidePrev();
      this.nextActif = false;
      this.prevActif = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 360px;
}
</style>
