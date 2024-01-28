<template>
  <div class="myContainer py-3 text-start">
    <div class="titreSection flex flex-col text-center items-center gap-2">
      <div class="beforTag"></div>
      <div
        class="ouRecomendationTag md:p-3 sm:p-2 p-1 md:text-[14px] sm:text-[12px] xs:text-[10px] text-[8px]"
      >See tips and trick from our partnership</div>
      <div
        class="titleSection m-0 md:py-5 sm:py-4 py-1 flex text-center md:w-[430px] sm:w-[330px] xs:w-[230px] w-[130px] md:text-[32px] sm:text-[28px] xs:text-[20px] text-[14px]"
      >Find out more about selling and buying homes</div>
      <div
        class="m-2 contactNow cursor-pointer flex bg-[#10B981] md:w-[163px] sm:h-[48px] xs:w-[123px] md:h-[38px] sm:w-[103px] xs:h-[28px] w-[80px] h-[24px] md:px-3 md:py-4 sm:py-3 py-2 sm:px-2 px-1 rounded-[32px] justify-center items-center md:text-[14px] sm:text-[12px] xs:text-[11px] text-[10px]"
        style="color: #FFF;font-style: normal;font-weight: 600;"
      >Contact Now</div>
    </div>
    <div class="containerHouses grid md:grid-cols-2 grid-cols-1 md:py-7 md:gap-7 sm:gap-5 gap-3">
      <div
        class="sousHouses flex md:flex-col sm:flex-row flex-col gap-4 justify-between lg:order-1 order-2"
      >
        <div
          class="sousHouse flex md:flex-row sm:flex-col md:gap-3 sm:gap-2 gap-2 sm:w-[200px] md:w-[auto]"
          v-for="(soushouse,index) in sousHouses"
          :key="index"
        >
          <div class="sousHousePhot">
            <img
              :src="soushouse.photosoushouse"
              alt
              class="md:w-[200px] md:h-[144px] sm:w-[210px] sm:h-[100px] w-[ 130px] h-[80px] rounded-[16px]"
            />
          </div>
          <div class="detailsSousHouse flex flex-col justify-between">
            <div class="personne flex items-center gap-2">
              <img
                :src="soushouse.profilephoto"
                alt
                class="md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px] xs:w-[20px] xs:h-[20px] w-[18px] h-[18px]"
              />
              <div
                class="md:text-[12px] sm:text-[10px] xs:text-[8px] text-[6px] fullName"
                style="color:#3C4563;font-weight: 400 "
              >{{soushouse.profilename}}</div>
            </div>
            <div
              class="desciption sm:text-[16px] xs:text-[14px] text-[11px] sm:leading-6 xs:leading-4 leading-3"
              style="color:#1B1C57;font-weight: 500; text-transform: capitalize; "
            >{{soushouse.description}}</div>
            <div class="timeAndDate flex items-center gap-1">
              <i class="fa-solid fa-clock text-[#888B97]"></i>
              <div
                class="md:text-[12px] sm:text-[10px] xs:text-[8px] text-[6px]"
                style="color:#888B97 font-weight: 400; "
              >{{soushouse.timeread}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="houseMain flex flex-col gap-3 lg:order-2 order-1">
        <div class="HouseMainPhoto w-[500]">
          <img
            src="../../../assets/images/houseMainSel.jpeg"
            alt
            class="md:h-[250px] md:w-[500px] w-[100%] sm:h-[200px] h-[150px] rounded-[16px] lg:px-2"
          />
        </div>
        <div class="detailsHouse flex flex-col justify-between gap-2">
          <div class="personne flex items-center gap-2">
            <img src="../../../assets/images/profile1.svg" alt />
            <div
              style="color: #3C4563;font-size: 12px;font-style: normal;font-weight: 400;line-height: 22px;"
              class="fullName"
            >Dianne Russell</div>
          </div>
          <div
            class="desciption"
            style="color:#1B1C57;font-size:16px;font-style: normal;font-weight: 500;line-height: 32px; text-transform: capitalize;"
          >The things we need to check when we want to buy a house</div>
          <div
            style="color: var(--mrt-app-neutral-01, #626687);font-size: 12px;font-style: normal;font-weight: 400;line-height: 24px; /* 171.429% */"
            class="details"
          >Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</div>
          <div class="timeAndDate flex items-center gap-1">
            <i class="fa-solid fa-clock text-[#888B97]"></i>
            <div
              style="color:#888B97;font-size: 12px;font-style: normal;font-weight: 400;line-height: 24px; "
            >4 min read | 25 Apr 2021</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sousHouses: [
        {
          photosoushouse: require("../../../assets/images/sousHouse1.jpeg"),
          profilename: "Dianne Russell",
          profilephoto: require("../../../assets/images/profile1.svg"),
          description:
            "The things we need to check when we want to buy a house",
          timeread: "4 min read | 25 Apr 2021"
        },
        {
          photosoushouse: require("../../../assets/images/sousHouse2.jpeg"),
          profilename: "Courtney Henry",
          profilephoto: require("../../../assets/images/profile2.svg"),
          description:
            "7 Ways to distinguish the quality of the house we want to buy",
          timeread: "6 min read | 24 Apr 2021"
        },
        {
          photosoushouse: require("../../../assets/images/sousHouse3.jpeg"),
          profilename: "Darlene Robertson",
          profilephoto: require("../../../assets/images/profile3.svg"),
          description:
            "The best way to know the quality of the house we want to buy",
          timeread: "2 min read | 24 Apr 2021"
        }
      ]
    };
  },
  name: "SeeMore"
};
</script>