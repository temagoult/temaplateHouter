<template>
  <div class="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/20 shadow-md">
    <div class="myContainer flex justify-between items-center py-4">

      <!-- LOGO -->
      <div class="logo flex items-center gap-3 cursor-pointer">
        <img src="../../../assets/images/logo(1).svg" class="w-8" alt="">
        <span class="font-extrabold text-[#1E293B] text-xl uppercase tracking-wide">
          Hounter
        </span>
      </div>

      <!-- Desktop Menu -->
      <div class="navList hidden sm:flex items-center gap-12">

        <ul class="flex gap-8 items-center font-medium text-[#1E293B]">
          <li class="navItem hover:text-[#10B981] transition">About Us</li>
          <li class="navItem hover:text-[#10B981] transition">Article</li>
          
          <li class="flex items-center gap-1 navItem hover:text-[#10B981] transition cursor-pointer">
            Property
            <img src="../../../assets/images/arrow.svg" class="w-3" />
          </li>
        </ul>

        <button class="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full shadow-md transition">
          Sign Up
        </button>
      </div>

      <!-- Mobile Burger -->
      <div class="sm:hidden text-[#047857] text-xl cursor-pointer" @click="toggleMenu">
        <i :class="display ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </div>

    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="display" class="sm:hidden bg-white/90 backdrop-blur-xl shadow-lg py-4">
        <ul class="flex flex-col gap-4 px-6 text-[#047857] font-semibold">

          <li class="border-b pb-2">About Us</li>
          <li class="border-b pb-2">Article</li>
          <li class="border-b pb-2">Property</li>
          <li class="pt-2">Sign Up</li>

        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      display: false
    };
  },
  methods: {
    toggleMenu() {
      this.display = !this.display;
    }
  }
};
</script>

<style scoped>
.navItem {
  cursor: pointer;
  font-size: 15px;
  text-transform: capitalize;
}

/* Mobile menu fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
