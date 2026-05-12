<template>
  <article class="s5 relative font-['Noto_Sans_TC']" id="s5">
    <div class="main" data-aos="zoom-out" data-aos-delay="0">
      <!--   -->
      <Swiper 
        :slides-per-view="'auto'" 
        :centered-slides="true" 
        :space-between="15" 
        :loop="true" :modules="modules"
        :grab-cursor="true"  :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="{
          768: {
            slidesPerView: 'auto',
            centeredSlides: false,
            spaceBetween: 0
          }
        }">
        <SwiperSlide v-for="(slide, index) in slidesData" :key="index">
          <div class="item" data-text="情境示意圖">
            <img :src="slide.img" :alt="`slide-${index + 1}`" />
            <div class="text">
              <div class="title">
                <h2><span v-html="slide.titleHtml"></span></h2>
                <img :src="slide.subTitleHtml" :alt="`slide-${index + 1}`" />
              </div>
              <p v-html="slide.desc"></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  padding: size-m(60) 0 size-m(10) 0;
  background-image: url(./s5/bg.webp);
  background-size: cover;
  background-position: center center;

  @media screen and (min-width: 768px) {
    padding: size(150) size(100) size(0) size(100);
  }

  .main {
    width: 100%;
  @media screen and (min-width: 768px) {
    max-width: size(1657);
    margin: 0 auto;
  }

    :deep(.swiper-wrapper) {
      @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      }
    }

    :deep(.swiper-slide) {
      width: 84%;
      height: auto;
      box-shadow: 0 18px 10px 0 rgba(0, 0, 0, 0.15);

      @media screen and (min-width: 768px) {
      width: size(478);
    margin-right: size(100);
      }
    }

    :deep(.swiper-pagination) {
      position: static;
      margin: size-m(20) 0;

      @media screen and (min-width: 768px) {
        margin: size(75) 0 size(100) 0;
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

    .item {
      width: 100%;
      height: size-m(580);
      position: relative;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
        width: 100%;
        height: size(769);
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .text {
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: linear-gradient(180deg,
            rgba(22, 39, 131, 0) 0%,
            rgba(22, 39, 131, 0.9) 65.38%);
        padding: size-m(30) size-m(20) size-m(20) size-m(20);

        @media screen and (min-width: 768px) {
          padding: size(30) size(48);
          width: size(478);
          margin: auto;
        }

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: size-m(15);

          @media screen and (min-width: 768px) {
            padding-bottom: size(20);
          }

          h2 {
            width: 50%;
            text-align: left;
            font-weight: 700;
            font-size: size-m(25);
            line-height: 1.3;
            letter-spacing: 0%;

            @media screen and (min-width: 768px) {
              font-size: size(42);
              letter-spacing: 0%;
            }
          }

          img {
            width: size-m(123);
            margin:6% 0 0 0;

            @media screen and (min-width: 768px) {
              width: size(190);
            }
          }

          /*
          h3 {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 700;
            font-size: size-m(12.89);
            line-height: 100%;
            letter-spacing: 0%;
            text-align: center;
            border-right: size-m(1) solid #fff;
            @media screen and (min-width: 768px) {
              font-size: size(20);
              line-height: 100%;
              letter-spacing: 0%;
              text-align: center;
              border-right: size(1) solid #fff;
            }

            b {
              font-weight: 700;
              font-size: size-m(27.07);
              line-height: 1.2;
              letter-spacing: 0%;
              margin-bottom: size-m(10);
              @media screen and (min-width: 768px) {
                font-size: size(42);
                letter-spacing: 0%;
                text-align: justify;
                margin-bottom: size(10);
              }
            }
          } */
        }

        p {
          font-weight: 300;
          font-size: size-m(14);
          line-height: 170%;
          letter-spacing: 0%;
          text-align: justify;
            min-height: size-m(120);

          @media screen and (min-width: 768px) {
            font-weight: 300;
            font-size: size(14);
            line-height: size(24);
            letter-spacing: 0%;
            text-align: justify;
            min-height: size(96);
          }
        }
      }

      &::before {
        content: attr(data-text);
        position: absolute;
        right: 0.8em;
        top:  0.5em;
        font-weight: 500;
        font-size: size-m(10);
        line-height:1.5;
        letter-spacing: 0%;
        text-align: center;
        color: #000;
        text-shadow: 0 0 .5em #fff;

        @media screen and (min-width: 768px) {
          font-size: size(12);
        }
      }
    }
  }
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from './s5/1.jpg';
import img2 from './s5/2.jpg';
import img3 from './s5/3.jpg';
import img4 from './s5/4.jpg';
import img5 from './s5/5.jpg';
import svg1 from './s5/1.svg';
import svg2 from './s5/2.svg';
import svg3 from './s5/3.svg';
import svg4 from './s5/4.svg';
import svg5 from './s5/5.svg';

const slidesData = [
  {
    img: img1,
    titleHtml: '自用<br />投資兼得',
    subTitleHtml: svg1,
    desc: '以更聰明的方式進入理想生活版圖。<br />HOMM Residences鴻居苑兼顧生活享受與資產配置彈性，約 10 年即可回收投資價值，長租式飯店居所，一種可被有效利用、可被延續的選擇。'
  },
  {
    img: img2,
    titleHtml: '全齡<br />友善空間',
    subTitleHtml: svg2,
    desc: '一處，能陪伴人生不同階段的住所。<br />從孩童到長者，0 至 99 歲皆能安心安放，無須遷就年齡或階段，讓家，始終是最從容的所在。'
  },
  {
    img: img3,
    titleHtml: '私隱<br />圈層',
    subTitleHtml: svg3,
    desc: '入主 HOMM Residences 鴻居苑，即納入一個不對外公開的生活圈層。居者尊享 亞果遊艇限定會籍，生活場域自然延伸至遊艇會專屬空間，在海與城之間，與同道之人共享私密而從容的日常。'
  },
  {
    img: img4,
    titleHtml: '私房<br />行旅',
    subTitleHtml: svg4,
    desc: '旅程，不必被安排，只需被理解。<br />由熟悉海域與在地節奏的團隊規劃，深入隱密景點，量身打造專屬航程，讓每一次出航，皆成為只屬於你的私房記憶。'
  },
  {
    img: img5,
    titleHtml: '24 小時<br />飯店服務',
    subTitleHtml: svg5,
    desc: '承襲悅榕集團的服務標準，從容而周到地照料生活每一細節。全天候禮賓團隊隨時待命，無論行程安排或臨時所需，皆以恰如其分的節奏即時回應，讓生活無需多言，卻始終被妥善承接。'
  }
];

const modules = [Pagination, Autoplay];
</script>
