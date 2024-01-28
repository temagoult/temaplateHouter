<template>
  <div class="myContainer">
    <div class="subscribeContainer rounded-[32px] lg:h-[250px] md:h-[200px] sm:h-[160px] h-[135px]">
      <div class="bg-red left">
        <img
          class="img1 lg:w-[61px] lg:h-[61px] md:w-[51px] md:h-[51px] sm:w-[41px] sm:h-[41px] w-[31px] h-[31px]"
          src="../../../assets/images/imageSubs1.jpeg"
          alt
        />
        <img
          class="img2 lg:w-[31px] lg:h-[31px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          src="../../../assets/images/imageSubs2.jpeg"
          alt
        />
        <img
          class="img3 lg:w-[31px] lg:h-[31px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          src="../../../assets/images/imageSubs3.jpeg"
          alt
        />
        <img
          class="img4 lg:w-[41px] lg:h-[41px] md:w-[31px] md:h-[31px] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
          src="../../../assets/images/imageSubs4.jpeg"
          alt
        />
      </div>
      <div class="flex flex-col justify-evenly">
        <div class="titleSection md:text-[32px] sm:text-[28px] xs:text-[20px] text-[12px]">
          Subscribe For More Info
          <br />and update from Hounter
        </div>
        <div
          class="bg-white iputfield border-solid border-black border-2 flex gap-1 items-center justify-between"
        >
          <i class="fa-solid fa-envelope text-[#3B82F6] p-1"></i>
          <input
            type="text"
            class="border-none w-[70%] p-1 placeholder:sm:text-[12px] xs:text-[8px] text-[6px]"
            placeholder="Your email here sm"
          />
          <div>
            <div
              class="lg:px-[16px] lg:py-[12px] md:px-[13px] md:py-[10px] sm:px-[10px] sm:py-[8px] px-[8px] py-[6px]"
              style="width: 100%; height: 100%; background: #10B981; border-radius: 32px; justify-content: flex-start; align-items: center; gap: 4px; display: inline-flex"
            >
              <div
                class="lg:text-[12px] md:text-[10px] sm:text-[8px] text-[6px]"
                style="color: white; font-weight: 600;  word-wrap: break-word"
              >Subsribe Now</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img
          class="img5 lg:h-[31px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          src="../../../assets/images/imageSubs5.jpeg"
          alt
        />
        <img
          class="img6 lg:w-[41px] lg:h-[41px] md:w-[31px] md:h-[31px] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
          src="../../../assets/images/imageSubs6.jpeg"
          alt
        />
        <img
          class="img7 lg:w-[51px] lg:h-[51px] md:w-[41px] md:h-[41px] sm:w-[31px] sm:h-[31px] w-[21px] h-[21px]"
          src="../../../assets/images/imageSubs7.jpeg"
          alt
        />
        <img
          class="img8 lg:h-[31px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
          src="../../../assets/images/imageSubs8.jpeg"
          alt
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "SubscribeSection"
};
</script>