<template>
  <div
    class="myContainer md:pt-8 sm:pt-6 xs:pt-4 pt-3 grid sm:grid-cols-2 grid-cols-1 md:gap-5 sm:gap-4 gap-3 text-center overflow-hidden"
  >
    <div class="selInformation">
      <div class="titreSection flex items-center md:flex-row flex-col">
        <div class="beforTag"></div>
        <div
          class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] text-[10px]"
        >Ready to Sell!</div>
      </div>
      <div
        class="sectionThree containerSection text-start flex flex-col md:gap-5 sm:gap-4 xs:gap-3 gap-2"
      >
        <h5
          class="titleSection m-0 py-1 md:text-[32px] sm:text-[28px] xs:text-[20px] text-[14px] sm:text-start text-center"
        >Let’s tour and see our house!</h5>
        <p
          class="md:text-[16px] sm:text-[14px] xs:text-[12px] text-[10px] md:leading-7 sm:leading-6 xs:leading-5 leading-4 sm:text-start text-center"
          style="color:#626687;font-weight: 400;"
        >Houses recommended by our partners that have been curated to become the home of your dreams!</p>
        <div class="relative">
          <img
            src="../../../assets/images/imageSection3.png"
            alt="nature"
            class="xs:h-[300px] h-[200px] w-[100%] sm:hidden flex"
          />

          <img
            class="absolute top-[50%] left-[50%] translate-x-[-50%] traslate-y-[-50%] sm:hidden flex"
            src="../../../assets/images/circle.png"
            alt
            @click="onNext"
          />
        </div>
        <div
          style="color: #1B1C57;font-weight: 600;"
          class="md:text-[16px] sm:text-[14px] xs:text-[12px] text-[12px] sm:text-start text-center"
        >House Detail</div>
        <div
          class="houseDetails flex md:justify-between justify-center items-center m-[auto] flex-wrap md:text-[16px] sm:w-[100%] w-[86%]"
          style="color:  #1B1C57;font-weight: 600;line-height: 28px;"
        >
          <div class="detail md:text-[16px] sm:text-[14px] xs:text-[12px] text-[7px]">
            <img src="../../../assets/images/bed.svg" alt />
            <div>4 Bedrooms</div>
          </div>
          <div class="detail md:text-[16px] sm:text-[14px] xs:text-[12px] text-[7px]">
            <img src="../../../assets/images/bath.svg" alt />
            <div>2 Bathrooms</div>
          </div>
          <div class="detail md:text-[16px] sm:text-[14px] xs:text-[12px] text-[7px]">
            <img src="../../../assets/images/garage.svg" alt />
            <div>1 Carport</div>
          </div>
          <div class="detail md:text-[16px] sm:text-[14px] xs:text-[12px] text-[7px]">
            <img src="../../../assets/images/stairs.svg" alt />
            <div>2 Floors</div>
          </div>
        </div>
        <div
          class="contactUs flex xs:flex-row flex-col md:py-3 sm:py-2 py-1 sm:justify-start justify-center md:gap-12 gap-3 items-center"
        >
          <div class="flex">
            <img src="../../../assets/images/Ellipse 6.svg" class="md:px-3 sm:px-2 px-1" alt />
            <div class="cordoonée flex flex-col text-start">
              <h6
                class="m-0 md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px]"
                style="color: #0E1735;font-weight: 500;"
              >Dianne Russell</h6>
              <p
                class="m-0 md:text-[16px] sm:text-[14px] xs:text-[12px] text-[12px]"
                style="color:#888B97;font-weight: 500;"
              >Manager Director</p>
            </div>
          </div>
          <div
            class="contactNow cursor-pointer md:self-end flex bg-[#10B981] md:w-[163px] md:h-[48px] sm:w-[140px] sm:h-[38px] w-[120px] h-[28px] md:px-3 md:py-4 sm:px-2 sm:py-3 px-1 py-2 rounded-[32px] justify-evenly items-center"
          >
            <i class="fa-solid fa-phone text-white"></i>
            <div
              style="color: #FFF;font-weight: 600;"
              class="md:text-[14px] sm:text-[12px] xs:text-[11px] text-[10px]"
            >Contact Now</div>
          </div>
        </div>
      </div>
    </div>
    <Swiper
      class="md:w-[120%] p-3 sm:flex hidden"
      @swiper="Ref"
      ref="mySwiper"
      slidesPerView="auto"
      mousewheel
      freeMode
      loop
    >
      <Swiper-slide v-for="(house,index) in housesForSel " :key="index" class="cursor-pointer">
        <div class="imageSection relative">
          <img
            src="../../../assets/images/imageSection3.png"
            alt="nature"
            class="sm:h-[450px] md:h-[400px] lg:h-[auto] w-[90%]"
          />

          <div
            class="aditionnalPhoto absolute items-end gap-2 bottom-[-8%] left-[2%] md:flex hidden"
          >
            <img src="../../../assets/images/image1SousSection3.png" alt />
            <img src="../../../assets/images/image2SousSection3.png" alt />
            <img src="../../../assets/images/image3SousSection3.png" alt />
          </div>
          <img
            class="absolute top-[50%] left-[50%] translate-x-[-50%] traslate-y-[-50%]"
            src="../../../assets/images/circle.png"
            alt
            @click="onNext"
          />
        </div>
      </Swiper-slide>
    </Swiper>
  </div>
</template>
<script>
import { Scrollbar, Mousewheel, Navigation, Autoplay } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
SwiperCore.use([Scrollbar, Mousewheel, Navigation, Autoplay]);
export default {
  data() {
    return {
      swiper: null,
      housesForSel: [
        {
          Bedroom: "4 Bedrooms",
          bathrooms: "2 Bathrooms",
          floors: "2 Floors",
          carPort: "1 Carport"
        },
        {
          Bedroom: " 3 Bedrooms",
          bathrooms: "1 Bathrooms",
          floors: " 1 Floors",
          carPort: "0 Carport"
        },
        {
          Bedroom: "6 Bedrooms",
          bathrooms: "3 Bathrooms",
          floors: "3 Floors",
          carPort: "1 Carport"
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

  name: "selSection",
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    Ref(swiper) {
      this.swiper = swiper;
    },
    onNext() {
      this.swiper.slideNext();
    }
  }
};
</script>