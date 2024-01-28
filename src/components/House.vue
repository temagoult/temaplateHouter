<template>
  <div class>
    <div>
      <div class="bigCard flex flex-col gap-3 mx-3">
        <img :src="image" class="rounded-[24px] relative" />

        <div class="text-start">
          <h4 class="m-0 md:text-[24px] sm:text-[20px] xs:text-[16px] text-[14px]">{{ title }}</h4>
          <p class="m-0 md:text-20px sm:text-18px xs:text-[16px] text-[14px]">{{ prix }}</p>
        </div>
        <div class="flex py-3">
          <img :src="profileIamge" class="px-3" alt />

          <div class="cordoonée flex flex-col text-start">
            <h6
              class="m-0 md:text-[18px] sm:text-[16px] xs:text-[14px] text-[12px]"
            >{{ profileName }}</h6>
            <p class="m-0 md:text-[16px] sm:text-[14px] xs:text-[12px] text-[12px]">{{ country }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    swiper: null
  }),
  name: "House",
  props: ["image", "title", "prix", "profileIamge", "profileName", "country"],
  methods: {}
};
</script>
<style></style>