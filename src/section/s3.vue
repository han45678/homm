<template>
  <article
    class="s3 relative font-['Noto_Sans_TC']"
    id="s3"
  >
    <section class="banyan-section">
      <!-- 左上角 Logo -->
      <div class="logo-wrapper">
        <img
          data-aos="zoom-out"
          data-aos-delay="0"
          src="./s3/logo.svg"
          alt="Part of banyan group"
          class="logo-svg"
        />
      </div>

      <div class="content-container">
        <!-- 主標題區 (帶斜線) -->
        <div
          class="hero-title"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <div class="text-left">
            <h2 class="main-text">兼得</h2>
            <h3 class="sub-text">雙重<br />生活</h3>
          </div>
          <div class="text-right">
            <h2 class="target-text">的理想居所</h2>
          </div>
        </div>

        <!-- 下方描述文字 -->
        <div
          class="description"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <p>
            悅榕集團的酒店式房產，不僅享有完善而高規格的公共設施，更全面承襲悅榕集團飯店一貫的服務標準，提供全天候24小時的禮賓服務，細緻照應生活每一刻。
          </p>
          <p>
            亦同步尊享集團旗下度假村、療癒水療中心與高爾夫球場的專屬禮遇，讓居住不僅是日常，更是一種被精心款待的生活方式。
          </p>
        </div>
      </div>
    </section>
    <div
      class="swiper-container"
      data-aos="zoom-out"
      data-aos-delay="400"
    >
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
        <SwiperSlide
          v-for="(img, index) in images"
          :key="index"
          data-text="實景拍攝"
          :data-name="img.name"
        >
          <img
            :src="img.pic"
            :alt="img.name"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  background-color: #f0eee9;
  padding-bottom: size-m(60);
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
  .banyan-section {
    position: relative;
    width: 100%;

    padding: size-m(60) size-m(20);
    display: flex;
    flex-direction: column;
    align-items: center;

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
        width: size-m(199);
        @media screen and (min-width: 768px) {
          width: size(368);
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
      // gap: size-m(55);
      margin-bottom: size-m(30);
      position: relative;
      color: #002265;
      justify-content:space-between;
      flex-wrap: wrap;
      align-items: self-end;
      font-size: size-m(29);
      font-size: clamp(12px, size-m(29), 45px);
      line-height: 1.31;
      white-space: nowrap;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: size(40);
        margin-bottom: size(50);
        align-items: flex-end;
        justify-content: center;
        font-size: size(42);
      }

      .text-left {
        text-align: center;
        display: flex;
        align-items: flex-end;
        gap: 0;width: 4.5em;
      justify-content:space-between;
        position: relative;
        @media screen and (min-width: 768px) {
          gap: size(15);
        }
        .main-text {
          font-family: 'Noto Sans TC';
          font-weight: 300;
          letter-spacing: 0;

          @media screen and (min-width: 768px) {
          }
        }

        .sub-text {
          font-weight: 700;
          letter-spacing: 0;
          text-align: center;

          @media screen and (min-width: 768px) {
            text-align: left;
          }

          span {
            font-family: 'Noto Sans TC';
            font-weight: 700;
          }
        }

        &::before {
          content: '';
          position: absolute;
          background-color: #162783;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
          width: size-m(1);
          height: 20.7em;
          right: 0;
          bottom:  0;
          @media screen and (min-width: 768px) {
            transform: rotate(40deg);
            width: size(1);
          }
        }
      }

      .text-right {
        .target-text {
          font-weight: 300;
          letter-spacing: 0;
          text-align: center;
         // font-size: 0.95em;

          @media screen and (min-width: 768px) {
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
        letter-spacing:-.01em;
        color: #333;
        text-align: justify;

        @media screen and (min-width: 768px) {
          font-size: size(14);
          line-height: size(24);
          text-align: left;
        letter-spacing: 0;
        }
      }
    }
  }

  .swiper-container {
    width: 100%;

    :deep(.swiper-slide) {
      width: 84%;
      position: relative;
      height: auto;
      @media screen and (min-width: 768px) {
        width: auto;
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      &::before {
        content: attr(data-text);
        position: absolute;
        left: 0;
        bottom: 0;
        font-weight: 300;
        font-size: size-m(14);
        line-height: 1.5;
        letter-spacing: 0%;
        text-align: center;
        color: #fff;
        padding: 0.4em 1em;
        @media screen and (min-width: 768px) {
          font-size: size(16);
        }
      }
      &::after {
        content: attr(data-name);
        position: absolute;
        right: 0;
        bottom: 0;
        font-family: 'Verdana', sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: size-m(11);
        line-height: 1.5;
        letter-spacing: 0%;
        text-align: right;
        color: #fff;
        padding: 0.6em 1em;
        @media screen and (min-width: 768px) {
          font-size: size(16);
        }
      }
    }

    :deep(.swiper-pagination) {
      position: static;
      margin: size-m(20) 0;
      display: none;
      @media screen and (min-width: 768px) {
        display: block;
        margin: size(40) 0;
      }

      .swiper-pagination-bullet {
        width: size-m(6);
        height: size-m(6);
        background-color: #828683;
        opacity: 1;
        margin: 0 size-m(5);
        @media screen and (min-width: 768px) {
          width: size(6);
          height: size(6);
          margin: 0 size(5);
        }
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

import img1 from './s3/1.webp';
import img2 from './s3/2.webp';
import img3 from './s3/3.webp';
import img4 from './s3/4.webp';
import img5 from './s3/5.webp';

const images = [
  {
    pic: img1,
    name: 'Banyan Tree Residences Cabo Marques'
  },
  {
    pic: img2,
    name: 'Banyan Tree Residences Lăng Cô'
  },
  {
    pic: img3,
    name: 'Banyan Tree Residences Bintan '
  },
  {
    pic: img4,
    name: 'Banyan Tree Residences Manila Bay'
  },
  {
    pic: img5,
    name: 'Banyan Tree Padilla Madrid Residences'
  }
];
const modules = [Pagination];
</script>
