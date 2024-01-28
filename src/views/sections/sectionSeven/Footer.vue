<template>
  <div
    class="myContainer text-start py-9 sm:grid sm:grid-cols-2 sm:mt-6 mt-3 flex flex-col-reverse gap-4"
  >
    <div
      class="partOne flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-3"
    >
      <div class="title flex items-center gap-2 cursor-pointer">
        <div class="logo">
          <img src="../../../assets/images/logo(1).svg" alt />
        </div>
        <div
          class="name"
          style="color: #1B1C57;font-size: 16px;font-style: normal;font-weight: 700;line-height: normal;text-transform: capitalize;"
        >Hounter</div>
      </div>
      <p
        class="md:text-[14px] sm:text-[12px] text-[10px] sm:flex hidden"
        style="color: #626687;font-style: normal;font-weight: 400;line-height: 24px; "
      >
        We provide information about properties such
        <br />as houses, villas and apartments to help people
        <br />find their dream home
      </p>
      <div class="socieaux flex text-[#3C4563] gap-11 bg-white">
        <i class="fa-brands fa-facebook cursor-pointer"></i>
        <i class="fa-brands fa-twitter cursor-pointer"></i>
        <i class="fa-brands fa-instagram cursor-pointer"></i>
      </div>
    </div>
    <div class="partTwo flex sm:flex-row flex-col gap-7">
      <div
        class="flex flex-col sm:gap-5 gap-3 sm:border-none border-gray border-solid border-b border-x-transparent border-t-transparent"
      >
        <div class="flex justify-between">
          <div class="titleFooter md:text-[18px] sm:text-[14px] text-[12px] cursor-pointer">Property</div>
          <div v-text="this.message1" class="sm:hidden flex cursor-pointer" @click="click1"></div>
        </div>
        <div
          :class="this.isSmall1?  'sm:flex sm:flex-col gap-5 hidden':'sm:flex sm:flex-col gap-2 flex flex-col '"
        >
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px] flex">House</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px] flex">appartement</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px] flex">villa</div>
        </div>
      </div>
      <div
        class="flex flex-col gap-3 sm:border-none border-gray border-solid border-b border-x-transparent border-t-transparent"
      >
        <div class="flex justify-between">
          <div class="titleFooter md:text-[18px] sm:text-[14px] text-[12px]">Article</div>
          <div v-text="this.message2" class="sm:hidden flex cursor-pointer" @click="click2"></div>
        </div>
        <div
          :class="this.isSmall2?  'sm:flex sm:flex-col gap-5 hidden':'sm:flex sm:flex-col gap-2 flex flex-col '"
        >
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px]">New Article</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px]">Popular Article</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px]">Most Read</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px] pb-1">Tips & Tricks</div>
        </div>
      </div>
      <div
        class="flex flex-col gap-3 sm:border-none border-gray border-solid border-b border-x-transparent border-t-transparent"
      >
        <div class="flex justify-between">
          <div class="titleFooter md:text-[18px] sm:text-[14px] text-[12px]" @click="click3">Contact</div>
          <div v-text="this.message3" class="sm:hidden flex cursor-pointer" @click="click3"></div>
        </div>
        <div
          :class="this.isSmall3?  'sm:flex sm:flex-col gap-5 hidden':'sm:flex sm:flex-col gap-2 flex flex-col '"
        >
          <div
            class="sousTitler md:text-[14px] sm:text-[12px] text-[10px]"
          >2464 Royal Ln. Mesa, New Jersey 45463</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px]">(671) 555-0110</div>
          <div class="sousTitler md:text-[14px] sm:text-[12px] text-[10px] pb-1">info@hounter.com</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message1: "-",
      message2: "-",
      message3: "-",
      isSmall1: false,
      isSmall2: false,
      isSmall3: false
    };
  },
  name: "Footer",
  methods: {
    click1() {
      this.isSmall1 = !this.isSmall1;
      if (this.isSmall1 == true) {
        return (this.message1 = "+");
      } else {
        return (this.message1 = "-");
      }
    },
    click2() {
      this.isSmall2 = !this.isSmall2;
      if (this.isSmall2 == true) {
        return (this.message2 = "+");
      } else {
        return (this.message2 = "-");
      }
    },
    click3() {
      this.isSmall3 = !this.isSmall3;
      if (this.isSmall3 == true) {
        return (this.message3 = "+");
      } else {
        return (this.message3 = "-");
      }
    }
  }
};
</script>