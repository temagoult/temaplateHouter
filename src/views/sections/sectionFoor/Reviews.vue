<template>
  <div class="lg:py-7 py-4 flex flex-col justify-center text-center items-center">
    <div class="titreSection flex flex-col justify-center text-center items-center">
      <div class="beforTag"></div>
      <div
        class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] text-[10px]"
      >See Our Review</div>
      <div
        class="titleSection m-0 pt-5 pb-5 md:text-[32px] sm:text-[28px] text-[20px]"
      >What Our User Say About Us</div>
    </div>
    <Swiper
      class="md:w-[120%] p-3"
      @swiper="Ref"
      ref="mySwiper"
      slidesPerView="auto"
      mousewheel
      freeMode
      loop
      autoplay
      pagination="{ clickable: true }"
    >
      <Swiper-slide
        v-for="(review,index) in Reviews "
        :key="index"
        class="cursor-pointer md:w-[550px] w-[100%] lg:h-[450px] md:h-[4OOpx] sm:h-[300px] xs:h-[250px] h-[200px]"
      >
        <div class="relative">
          <img
            :src="review.houseimage"
            alt
            class="md:w-[500px] md:h-[250px] sm:h-[200px] xs:h-[150px] h-[100px] w-[90%]"
          />
          <div
            class="absolute w-[80%] bg-white p-2 mx-auto left-[10%] top-[60%] flex flex-col item-center"
          >
            <h5
              class="md:text-[16px] sm:text-[14px] xs:text-[12px] text-[10px]"
              style="color: #1B1C57;font-weight: 600;text-transorm: capitalize;"
            >{{ review.review }}</h5>
            <p
              style="color:#626687;font-style: normal;font-weight: 400;"
              class="md:text-[10px] sm:text-[8px] xs:text-[6px] text-[6px] md:leading-6 sm:leading-4 leading-3"
            >{{ review.detailReview }}</p>
            <div class="flex justify-between items-center">
              <div class="flex">
                <img :src="review.photoProfile" class="px-3" alt />
                <div class="cordoonée flex flex-col text-start">
                  <h6
                    class="m-0"
                    style="color: #0E1735;font-size: 10px;font-style: normal;font-weight: 500;line-height: 22px;"
                  >{{ review.fullName }}</h6>
                  <p
                    class="m-0"
                    style="color: #888B97;font-size: 10px; font-style: normal;font-weight: 500;line-height: 22px;"
                  >{{ review.post }}</p>
                </div>
              </div>
              <div class="flex">
                <i class="fa-solid fa-star px-1 text-yellow-300"></i>
                <div class="px-1">{{ review.mark }}</div>
              </div>
            </div>
          </div>
        </div>
      </Swiper-slide>
    </Swiper>
    <div class="slideTO md:flex hidden gap-2">
      <span class="w-[10px] h-[10px] bg-[#E0E3EB] rounded-[50%]" @click="onNext"></span>
      <span class="w-[10px] h-[10px] bg-[#E0E3EB] rounded-[50%]" @click="onNext"></span>
      <span class="w-[10px] h-[10px] bg-[#E0E3EB] rounded-[50%]" @click="onNext"></span>
    </div>
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
      Reviews: [
        {
          houseimage: require("../../../assets/images/imageRev1.jpeg"),
          review: "Best! I got the house I wanted through Hounter",
          detailReview:
            "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on thehouse we want.",
          photoProfile: require("../../../assets/images/Ellipse 6.svg"),
          fullName: "Dianne Russell",
          post: "Manager Director",
          mark: "4,6"
        },
        {
          houseimage: require("../../../assets/images/imageRev2.jpeg"),
          review: "My house sold out fast!",
          detailReview:
            "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
          photoProfile: require("../../../assets/images/profile2.svg"),
          fullName: "Robert Fox",
          post: "CEO Andarafish",
          mark: "4,3"
        },
        {
          houseimage: require("../../../assets/images/imageRev3.jpeg"),
          review: "Through the Hounter, I can get a house for my self",
          detailReview:
            "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
          photoProfile: require("../../../assets/images/profile3.svg"),
          fullName: "Esther Howard",
          post: "Head of Marketing",
          mark: "4,1"
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
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    Ref(swiper) {
      this.swiper = swiper;
    },
    onNext() {
      this.swiper.slideTo(3);
    }
  }
};
</script>
<style scoped>
</style>
