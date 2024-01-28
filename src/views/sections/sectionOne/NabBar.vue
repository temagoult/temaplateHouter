<template>
  <div class="w-[100%]">
    <div class="myContainer flex flex-col">
      <div class="navBarbox flex justify-between z-10 pb-9 items-center">
        <div class="logo">
          <img src="../../../assets/images/logo(1).svg" alt />
          <div>hounter</div>
        </div>
        <div class="navList sm:flex hidden gap-[50px]">
          <div>
            <ul class="list-none flex gap-6 items-center">
              <li>about us</li>
              <li>article</li>
              <li>
                Property
                <img class="cursor-pointer" src="../../../assets/images/arrow.svg" alt />
              </li>
            </ul>
          </div>

          <div class="flex items-center">
            <div class="signUp">sign Up!</div>
          </div>
        </div>
        <div class="sm:hidden">
          <div v-if="display">
            <div @click="onDisplay">
              <i class="fa-solid fa-xmark text-[14px] text-[#047857]"></i>
            </div>
          </div>

          <div v-else class="items-center">
            <div @click="onDisplay">
              <i class="fa-solid fa-bars text-[14px] text-[#047857]"></i>
            </div>
          </div>
        </div>
      </div>
      <div v-if="display" class="text-start pb-5">
        <ul class="list-none flex flex-col gap-6 p-0 m-0 text-[#047857] listBar cursor-pointer">
          <li
            class="border-gray-400 border-[1px] border-solid text-end border-x-transparent border-t-transparent"
          >ARTICLE</li>
          <li
            class="border-gray-400 border-[1px] border-solid text-end border-x-transparent border-t-transparent"
          >PROPERTY</li>
          <li
            class="border-gray-400 border-[1px] border-solid text-end border-x-transparent border-t-transparent"
          >ABOUT</li>
          <li
            class="border-gray-400 border-[1px] border-solid text-end border-x-transparent border-y-transparent"
          >SignUp</li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      display: false
    };
  },
  name: "NavBar",
  methods: {
    onDisplay() {
      this.display = !this.display;
      console.log(this.display);
    }
  }
};
</script>
<style>
</style>