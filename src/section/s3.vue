<template>
  <article
    class="s3 relative"
    id="s3"
  >
    <section class="banyan-section">
      <!-- 左上角 Logo -->
      <div class="logo-wrapper">
        <img
          src="./s3/logo.svg"
          alt="Part of banyan group"
          class="logo-svg"
        />
      </div>

      <div class="content-container">
        <!-- 主標題區 (帶斜線) -->
        <div class="hero-title">
          <div class="text-left">
            <h2 class="main-text">兼得</h2>
            <h3 class="sub-text">雙重<br />生活</h3>
          </div>
          <div class="text-right">
            <h2 class="target-text">的理想居所</h2>
          </div>
        </div>

        <!-- 下方描述文字 -->
        <div class="description">
          <p>
            悅榕集團的酒店式房產，不僅享有完善而高規格的公共設施，更全面承襲悅榕集團飯店一貫的服務標準，提供全天候24小時的禮賓服務，細緻照應生活每一刻。
          </p>
          <p>
            亦同步尊享集團旗下度假村、療癒水療中心與高爾夫球場的專屬禮遇，讓居住不僅是日常，更是一種被精心款待的生活方式。
          </p>
        </div>
      </div>
    </section>
    <div class="swiper-container">
      <Swiper
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="15"
        :loop="true"
        :auto-height="true"
        :modules="modules"
        :pagination="{ clickable: true }"
        :breakpoints="{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false
          }
        }"
      >
        <SwiperSlide v-for="(img, index) in images" :key="index">
          <img :src="img" :alt="`slide ${index + 1}`" />
        </SwiperSlide>
      </Swiper>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  background-color: #F0EEE9;

  .banyan-section {
    position: relative;
    width: 100%;
    
    padding: size-m(60) size-m(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    // min-height: 100vh;

    @media screen and (min-width: 768px) {
      padding: size(100) size(150);
    }

    .logo-wrapper {
      position: static;
      margin-bottom: size-m(40);
      width: 100%;
      text-align: left;

      @media screen and (min-width: 768px) {
        position: absolute;
        top: size(50);
        left: size(50);
        margin-bottom: 0;
        width: auto;
      }

      .logo-svg {
        width: size-m(199); // 手機版寬度
        @media screen and (min-width: 768px) {
          width: size(368); // 電腦版寬度
        }
      }
    }

    .content-container {
      width: 100%;
      margin-top: 0;

      @media screen and (min-width: 768px) {
        margin-top: size(0);
        max-width: size(600);
      }
    }

    .hero-title {
      display: flex;
      gap: size-m(55);
      margin-bottom: size-m(30);
      position: relative;
      color: #002265;
      justify-content: center;
      align-items: self-end;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: size(40);
        margin-bottom: size(50);
        align-items: end;
        justify-content: center;
      }

      .text-left {
        text-align: center;
        display: flex;
        align-items: end;
        gap: size-m(15);
        position: relative;
        @media screen and (min-width: 768px) {
          gap: size(15);
        }
        .main-text {
          font-family: 'Noto Sans TC';
          font-weight: 300;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
          }
        }

        .sub-text {
          font-weight: 700;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;
          text-align: center;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
            text-align: left;
          }

          span {
            font-family: 'Noto Sans TC';
            font-weight: 700; // 「生活」為粗體
          }
        }

        &::before {
          content: '';
          position: absolute;
          background-color: #162783;
          transform: rotate(45deg);
          width: size-m(1);
          height: size-m(600);
          right: size-m(-220);
          bottom: size-m(-95);
          @media screen and (min-width: 768px) {
            transform: rotate(40deg);
            width: size(3);
            height: size(600);
            right: size(-185);
            bottom: size(-85);
          }
        }
      }

      // .divider-line {
      //   // display: none; // 手機版標題通常垂直排列，可隱藏斜線或調整角度

      //   @media screen and (min-width: 768px) {
      //     display: block;
      //     width: 1px;
      //     height: size(700);
      //     background-color: #002265;
      //     transform: rotate(35deg);
      //   }
      // }

      .text-right {
        .target-text {
          font-weight: 300;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;
          text-align: center;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
            text-align: left;
          }
        }
      }
    }

    .description {
      margin: 0 auto;
      @media screen and (min-width: 768px) {
        max-width: size(800);
      }
      p {
        font-family: 'Noto Sans TC';
        font-weight: 300;
        font-size: size-m(14);
        line-height: 170%;
        letter-spacing: 0;
        color: #333;
        text-align: justify;

        @media screen and (min-width: 768px) {
          font-size: size(14);
          line-height: size(24);
          text-align: left;
        }
      }
    }
  }

  .swiper-container {
    width: 100%;

    :deep(.swiper-slide) { /* 手機版：設定寬度為 84% */
      width: 84%;
      height: auto; 
      @media screen and (min-width: 768px) {
        width: auto; /* 電腦版：重設寬度，讓 Swiper 自動計算 */
      }
      
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    :deep(.swiper-pagination) {
      position: static;
      margin:size-m(20) 0;
      @media screen and (min-width: 768px) {
        margin:size(40) 0;
      }

      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        background-color: #828683;
        opacity: 1;
        margin: 0 5px;
      }
      .swiper-pagination-bullet-active {
        background-color: #162783;
      }
    }
  }
}
</style>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from './s3/1.jpg';
import img2 from './s3/2.jpg';
import img3 from './s3/3.jpg';
import img4 from './s3/4.jpg';
import img5 from './s3/5.jpg';

const images = [img1, img2, img3, img4, img5];

const modules = [Pagination];
</script>
