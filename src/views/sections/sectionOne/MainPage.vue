<template>
  <div
    class="grid lg:grid-cols-2 grid-cols-1 justify-between myContainer md:gap-[50px] h-[500px] t"
  >
    <div class="boxMainPage flex flex-col gap-5">
      <div
        class="textHeading lg:text-start text-center md:text-[32px] sm:text-[28px] xs:text-[20px] text-[14px]"
      >
        <div style="width: 100%">
          <span>
            find the place to
            <br class="md:block hidden" />live
          </span>
          <span class="text-white">
            your dreams
            <br class="md:block hidden" />
          </span>
          <span>easily here</span>
        </div>
      </div>
      <p
        class="lg:text-start text-center md:text-[12px] sm:text-[11px] xs:text-[10px] text-[8px] md:leading-7 sm:leading-6 xs:leading-4 leading-3"
        style="width: 100%; opacity: 0.75; color: #626687;  font-weight: 400;"
      >
        Everything you need about finding your place to live will be here,
        <br />
        <span>where it will be easier for you</span>
      </p>
      <div
        class="iputfield border-solid border-black border-2 flex gap-1 items-center justify-between w-[80%] lg:mx-0 mx-[auto]"
      >
        <img class="h-[50%]" src="../../../assets/images/Vector.png" alt />
        <input
          type="text"
          class="border-none w-[70%] p-4 placeholder:lg:text-[12px] placeholder:md:text-[11px] placeholder:sm:text-[10px] placeholder:xs:text-[9px] text-[20px]"
          placeholder="Search for the location you want!"
        />
        <div>
          <div
            class="md:py-4 md:px-3 sm:py-3 sm:px-2 py-2 px-1 flex items-center justify-center"
            style=" background: #10B981; border-radius: 32px; align-items: center; gap: 4px; display: flex"
          >
            <div
              class="md:text-[14px] sm:text-[13px] xs:[12px] text-[11px] p-2"
              style="color: white;  font-weight: 600; word-wrap: break-word"
            >Search</div>
        
          </div>
        </div>
      </div>
      <div
        style="color: #888B97; font-weight: 400; line-height: 32px; word-wrap: break-word"
        class="md-text[16px] sm:text-[14px] xs:text-[12px] text-[11] lg:text-start text-center"
      >Our Partnership</div>
      <div class="partners flex lg:justify-start justify-center md:gap-5 sm:gap-4 gap-3">
        <img
          src="../../../assets/images/partner1.svg"
          alt
          class="md:w-[82px] sm:w-[70px] xs:w-[50px] w-[30px]"
        />
        <img
          src="../../../assets/images/partner2.svg"
          alt
          class="md:w-[82px] sm:w-[70px] xs:w-[50px] w-[30px]"
        />
        <img
          src="../../../assets/images/partner3.svg"
          alt
          class="md:w-[82px] sm:w-[70px] xs:w-[50px] w-[30px]"
        />
        <img
          src="../../../assets/images/partner4.svg"
          alt
          class="md:w-[82px] sm:w-[70px] xs:w-[50px] w-[30px]"
        />
      </div>
    </div>

    <div class="imageNavBox lg:self-end self-start items-start text-start pl-5">
      <Swiper
        class="md:w-[120%] p-3"
        @swiper="Ref"
        ref="mySwiper"
        slidesPerView="auto"
        mousewheel
        freeMode
        loop
        autoplay
      >
        <Swiper-slide class="cursor-pointer lg:w-[320px] sm:w-[35%]">
          <div
            style="padding: 20px; background: white; box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06); border-radius: 32px; justify-content: flex-start; align-items: center; gap: 16px; display: flex"
          >
            <div style="width: 112px; height: 56px; position: relative">
              <img
                style="width: 66px; height: 56px; left: 0px; top: 0px; position: absolute; box-shadow: 0px 9px 32px rgba(89.37, 91.53, 218.88, 0.10); border-radius: 9999px; border: 3px white solid"
                src="../../../assets/images/profile4.svg"
              />
              <img
                style="width: 56px; height: 56px; left: 28px; top: 0px; position: absolute; box-shadow: 0px 9px 32px rgba(89.37, 91.53, 218.88, 0.10); border-radius: 9999px; border: 3px white solid"
                src="../../../assets/images/profile2.svg"
              />
              <img
                style="width: 56px; height: 56px; left: 56px; top: 0px; position: absolute; box-shadow: 0px 9px 32px rgba(89.37, 91.53, 218.88, 0.10); border-radius: 9999px; border: 3px white solid"
                src="../../../assets/images/profile1.svg"
              />
            </div>
            <div
              style="text-align:start; width: 120px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: inline-flex"
            >
              <div
                style="align-self: stretch; color: #1B1C57; font-size: 12px; font-family: Lexend; font-weight: 600; line-height: 24px; word-wrap: break-word"
              >1K+ People</div>
              <div
                style="align-self: stretch; color: #68799F; font-size: 9px; font-family: Lexend; font-weight: 400; line-height: 20px; word-wrap: break-word"
              >Successfully Getting Home</div>
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="cursor-pointer lg:w-[200px] sm:w-[30%]">
          <div
            style="padding: 20px; background: white; box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06); border-radius: 32px; justify-content: flex-start; align-items: center; gap: 16px; display: flex"
          >
            <img
              style="width: 56px; height: 56px; border-radius: 24px"
              src="../../../assets/images/Rectangle 12.png"
            />
            <div
              style="flex-direction: column;  align-items: center; gap: 2px; display: inline-flex"
            >
              <div
                style=" width: 90px ;color: #1B1C57; font-size: 16px; font-family: Lexend; font-weight: 600; line-height: 24px; word-wrap: break-word"
              >56 Houses</div>
              <div
                style="color: #68799F; font-size: 9px; font-family: Lexend; font-weight: 400; line-height: 20px; word-wrap: break-word"
              >Sold Monthly</div>
            </div>
          </div>
        </Swiper-slide>
        <Swiper-slide class="cursor-pointer lg:w-[320px] sm:w-[35%]">
          <div
            style="padding: 20px; background: white; box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06); border-radius: 32px; justify-content: flex-start; align-items: center; gap: 16px; display: flex"
          >
            <img
              style="width: 56px; height: 56px; box-shadow: 0px 9px 32px rgba(89.37, 91.53, 218.88, 0.10); border-radius: 9999px; border: 3px white solid"
              src="../../../assets/images/profile.jpeg"
            />
            <div
              style="text-align:start; width: 140px;flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 2px; display: inline-flex"
            >
              <div
                style=" color: #1B1C57; font-size: 12px; font-family: Lexend; font-weight: 600; line-height: 24px; word-wrap: break-word"
              >4K+</div>
              <div
                style="color: #68799F; font-size: 9px; font-family: Lexend; font-weight: 400; line-height: 20px; word-wrap: break-word"
              >People Looking for New Homes</div>
            </div>
          </div>
        </Swiper-slide>
      </Swiper>
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
  },

  name: "mainPage"
};
</script>
<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
}
</style>
