<template>
  <div class="hero-section">
    <div class="myContainer">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 items-center min-h-[600px] py-12">
        <!-- Left Content Box -->
        <div class="content-box flex flex-col gap-6 lg:gap-8">
          <!-- Heading -->
          <h1 class="hero-heading lg:text-start text-center">
            <span class="heading-line">Find The Place To</span>
            <span class="heading-line gradient-text">Live Your Dreams</span>
            <span class="heading-line">Easily Here</span>
          </h1>

          <!-- Description -->
          <p class="hero-description lg:text-start text-center">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>

          <!-- Search Input -->
          <div class="search-container">
            <div class="search-wrapper">
              <div class="search-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="#888B97"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="#888B97"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="search-input"
                placeholder="Search for the location you want!"
              />
              <button class="search-button">
                <span>Search</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Partnership Section -->
          <div class="partnership-section">
            <p class="partnership-label lg:text-start text-center">Our Partnership</p>
            <div class="partners-grid">
              <img
                src="../../../assets/images/partner1.svg"
                alt="Partner 1"
                class="partner-logo"
              />
              <img
                src="../../../assets/images/partner2.svg"
                alt="Partner 2"
                class="partner-logo"
              />
              <img
                src="../../../assets/images/partner3.svg"
                alt="Partner 3"
                class="partner-logo"
              />
              <img
                src="../../../assets/images/partner4.svg"
                alt="Partner 4"
                class="partner-logo"
              />
            </div>
          </div>
        </div>

        <!-- Right Stats Box -->
        <div class="stats-box lg:justify-end justify-center">
          <Swiper
            class="stats-swiper"
            @swiper="Ref"
            ref="mySwiper"
            :slidesPerView="'auto'"
            :spaceBetween="16"
            :mousewheel="true"
            :freeMode="true"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
          >
            <!-- Stat Card 1: People -->
            <SwiperSlide class="stat-slide">
              <div class="stat-card">
                <div class="avatar-group">
                  <img
                    class="avatar avatar-1"
                    src="../../../assets/images/profile4.svg"
                    alt="User"
                  />
                  <img
                    class="avatar avatar-2"
                    src="../../../assets/images/profile2.svg"
                    alt="User"
                  />
                  <img
                    class="avatar avatar-3"
                    src="../../../assets/images/profile1.svg"
                    alt="User"
                  />
                </div>
                <div class="stat-info">
                  <h3 class="stat-number">1K+ People</h3>
                  <p class="stat-description">Successfully Getting Home</p>
                </div>
              </div>
            </SwiperSlide>

            <!-- Stat Card 2: Houses -->
            <SwiperSlide class="stat-slide stat-slide-small">
              <div class="stat-card">
                <div class="stat-icon">
                  <img
                    src="../../../assets/images/Rectangle 12.png"
                    alt="Houses"
                  />
                </div>
                <div class="stat-info">
                  <h3 class="stat-number">56 Houses</h3>
                  <p class="stat-description">Sold Monthly</p>
                </div>
              </div>
            </SwiperSlide>

            <!-- Stat Card 3: Looking -->
            <SwiperSlide class="stat-slide">
              <div class="stat-card">
                <div class="stat-icon-single">
                  <img
                    src="../../../assets/images/profile.jpeg"
                    alt="User"
                  />
                </div>
                <div class="stat-info">
                  <h3 class="stat-number">4K+</h3>
                  <p class="stat-description">People Looking for New Homes</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Scrollbar, Mousewheel, Navigation, Autoplay } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";

SwiperCore.use([Scrollbar, Mousewheel, Navigation, Autoplay]);

export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiper: null
    };
  },
  methods: {
    Ref(swiper) {
      this.swiper = swiper;
    }
  }
};
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  display: none;
}

.myContainer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Content Box */
.content-box {
  z-index: 2;
  position: relative;
}

/* Hero Heading */
.hero-heading {
  font-size: clamp(1.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: #1e293b;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.heading-line {
  display: block;
  text-transform: capitalize;
}

.gradient-text {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

/* Description */
.hero-description {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #64748b;
  line-height: 1.75;
  font-weight: 400;
  max-width: 500px;
}

@media (min-width: 1024px) {
  .hero-description {
    max-width: 100%;
  }
}

/* Search Container */
.search-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .search-container {
    margin: 0;
  }
}

.search-wrapper {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.5rem;
  gap: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.search-wrapper:focus-within {
  border-color: #10b981;
  box-shadow: 0 4px 24px rgba(16, 185, 129, 0.2);
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #1e293b;
  background: transparent;
  padding: 0.75rem 0;
}

.search-input::placeholder {
  color: #94a3b8;
}

.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  flex-shrink: 0;
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.search-button svg {
  transition: transform 0.3s ease;
}

.search-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .search-button span {
    display: none;
  }
  
  .search-button {
    padding: 1rem;
  }
}

/* Partnership Section */
.partnership-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.partnership-label {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #64748b;
  font-weight: 500;
  margin: 0;
}

.partners-grid {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 2rem);
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 1024px) {
  .partners-grid {
    justify-content: flex-start;
  }
}

.partner-logo {
  width: clamp(60px, 8vw, 90px);
  height: auto;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: grayscale(100%);
}

.partner-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: translateY(-4px);
}

/* Stats Box */
.stats-box {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}

.stats-swiper {
  width: 100%;
  max-width: 600px;
  padding: 1rem 0;
}

@media (min-width: 1024px) {
  .stats-swiper {
    max-width: 700px;
  }
}

/* Stat Slides */
.stat-slide {
  width: 320px !important;
  height: auto;
}

.stat-slide-small {
  width: 240px !important;
}

@media (max-width: 640px) {
  .stat-slide {
    width: 280px !important;
  }
  
  .stat-slide-small {
    width: 200px !important;
  }
}

/* Stat Card */
.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

/* Avatar Group */
.avatar-group {
  position: relative;
  width: 112px;
  height: 56px;
  flex-shrink: 0;
}

.avatar {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
  object-fit: cover;
}

.avatar-1 {
  left: 0;
  z-index: 3;
}

.avatar-2 {
  left: 28px;
  z-index: 2;
}

.avatar-3 {
  left: 56px;
  z-index: 1;
}

/* Stat Icon */
.stat-icon,
.stat-icon-single {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stat-icon-single {
  border-radius: 50%;
  border: 3px solid #ffffff;
}

.stat-icon img,
.stat-icon-single img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Stat Info */
.stat-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.stat-number {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
}

.stat-description {
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: #64748b;
  margin: 0;
  line-height: 1.4;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-box,
.stats-box {
  animation: fadeInUp 0.8s ease-out;
}

.stats-box {
  animation-delay: 0.2s;
  animation-fill-mode: both;
}

/* Swiper Overrides */
.swiper-slide {
  display: flex;
  align-items: center;
}
</style>