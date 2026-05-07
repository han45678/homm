<template>
  <article
    class="s7 relative font-['Noto_Sans_TC']"
    id="s7"
  >
    <div class="main">
      <Swiper
        :modules="modules"
        :effect="'fade'"
        :slides-per-view="1"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="{
          nextEl: '.s7-next',
          prevEl: '.s7-prev',
        }"
      >
        <SwiperSlide v-for="(slide, index) in slidesData" :key="index">
          <div class="item">
            <div class="pic">
              <div
                class="pic_item"
                v-for="(p, pIdx) in slide.pics"
                :key="pIdx"
              >
                <img :src="p" alt="pic" />
              </div>
              <p>3D模擬情境圖</p>
            </div>
            <div class="pattern">
              <img :src="slide.pattern" alt="pic" />
              <h2>{{ slide.title }}<span>共<b>{{ slide.total }}</b>戶</span></h2>
              <p v-html="slide.descHtml"></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- 自訂導覽箭頭 -->
      <div class="s7-nav s7-prev">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </div>

      <div class="s7-nav s7-next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>

      <!-- 自訂按鈕分頁 -->
      <div class="custom-pagination">
        <div
          v-for="(slide, index) in slidesData"
          :key="'nav-' + index"
          class="page-btn"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
        >
          {{ slide.btnText }}
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  // height: 100vh;
  z-index: 1;
  background-color: rgba(208, 211, 211, 0.8);

  @media screen and (min-width: 768px) {
    padding: size(70) 0;
  }

  .main {
    width: calc(100% - size-m(30));
    margin: 0 size-m(15);
    position: relative;
    @media screen and (min-width: 768px) {
      max-width: size(1734);
      margin: auto;
    }

    /* 增加 Swiper 容器的內距，避免陰影被 overflow: hidden 裁切 */
    :deep(.swiper) {
      padding: size-m(20);
      margin: size-m(-20);
      @media screen and (min-width: 768px) {
        padding: size(20);
        margin: size(-20);
      }
    }

    .item {
      position: relative;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 size-m(10) size-m(10) 0 rgba(0, 0, 0, 0.15);
      border-radius: size-m(36);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-radius: size-m(15);
      padding: size-m(70) size-m(15);

      @media screen and (min-width: 768px) {
        box-shadow: 0 size(10) size(10) 0 rgba(0, 0, 0, 0.15);
        border-radius: size(36);
        padding: size(30) size(50);
      }

      &::before {
        content: '';
        position: absolute;
        top: size-m(15);
        right: size-m(15);
        width: size-m(28);
        height: size-m(35);
        background-image: url(./s7/n.svg);
        background-size: cover;
        background-repeat: no-repeat;
        @media screen and (min-width: 768px) {
          top: size(30);
          right: size(15);
          width: size(64);
          height: size(81);
        }
      }

      .pic {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: size-m(15);
        order: 2;
        @media screen and (min-width: 768px) {
          max-width: 40%;
          gap: size(15);
          order: 1;
        }

        .pic_item {
          img {
            max-width: 100%;
          }
          @media screen and (min-width: 768px) {
          }

          &:nth-child(1) {
            width: 100%;
            @media screen and (min-width: 768px) {
            }
          }

          &:nth-child(2) {
            width: calc(50% - size-m(7.5));
            @media screen and (min-width: 768px) {
              width: calc(50% - size(7.5));
            }
          }

          &:nth-child(3) {
            width: calc(50% - size-m(7.5));
            @media screen and (min-width: 768px) {
              width: calc(50% - size(7.5));
            }
          }
        }

        p {
          color: #828683;
          font-size: size-m(10);
          font-weight: 400;
          // line-height: size-m(20.19);
          letter-spacing: 0;

          @media screen and (min-width: 768px) {
            font-size: size(16);
            // line-height: size(42);
          }
        }
      }

      .pattern {
        width: 100%;
        order: 1;
        @media screen and (min-width: 768px) {
          order: 2;
          max-width: 60%;
          padding: 0 size(150);
        }

        img {
          max-width: 100%;
          @media screen and (min-width: 768px) {
          }
        }

        h2 {
          color: #162783;
          font-weight: 700;
          letter-spacing: 0%;
          text-align: center;
          font-size: size-m(18.57);
          padding-bottom: size-m(5);
          margin-bottom: size-m(5);
          padding-top: size-m(30);
          border-bottom: size-m(2) solid #162783;
          @media screen and (min-width: 768px) {
            padding-top: size(30);
            font-size: size(42);
            border-bottom: size(2) solid #162783;
            padding-bottom: size(15);
            margin-bottom: size(15);
          }

          span {
            font-weight: 700;

            letter-spacing: 0%;
            text-align: center;

            font-size: size-m(18.57);
            margin-left: 1em;
            @media screen and (min-width: 768px) {
              font-size: size(30);
            }

            b {
              font-weight: 700;
              letter-spacing: 0%;
              text-align: center;
              font-family: Noto Sans TC;

              font-size: size-m(13.26);
              display: inline-block;
              width: size-m(30);
              height: size-m(30);
              border-radius: 100%;
              border: size-m(1) solid #162783;
              margin: 0 0.05em;
              @media screen and (min-width: 768px) {
                font-size: size(30);
                width: size(50);
                height: size(50);
                border: size(1) solid #162783;
              }
            }
          }
        }

        p {
          text-align: center;
          font-weight: 300;
          font-size: size-m(10);
          letter-spacing: 0%;
          text-align: center;
          color: #162783;

          @media screen and (min-width: 768px) {
            font-size: size(14);
          }

          span {
            font-weight: 300;
            font-size: size-m(12);
            letter-spacing: 0%;
            text-align: center;

            @media screen and (min-width: 768px) {
              font-size: size(18);
            }
          }
        }
      }
    }

    /* 自訂導覽箭頭樣式 */
    .s7-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: size-m(40);
      height: size-m(40);
      background: #d9dbdb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      box-shadow: 0 0 size-m(10) rgba(0, 0, 0, 0.15);
      color: #162783;
      transition: opacity 0.3s;

      @media screen and (min-width: 768px) {
        width: size(60);
        height: size(60);
        box-shadow: 0 0 size(10) rgba(0, 0, 0, 0.15);
      }

      svg {
        width: 50%;
        height: 50%;
      }

      &.swiper-button-disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &.s7-prev {
        left: size-m(-15);
        @media screen and (min-width: 768px) {
          left: size(-75);
        }
      }
      &.s7-next {
        right: size-m(-15);
        @media screen and (min-width: 768px) {
          right: size(-75);
        }
      }
    }

    /* 自訂按鈕分頁 */
    .custom-pagination {
      display: flex;
      justify-content: center;
      gap: size-m(10);
      margin-top: size-m(20);
      flex-wrap: wrap;
      @media screen and (min-width: 768px) {
        gap: size(20);
        margin-top: size(40);
      }

      .page-btn {
        cursor: pointer;
        padding: size-m(10) size-m(20);
        background-color: #fff;
        color: #162783;
        border-radius: size-m(30);
        font-size: size-m(14);
        font-weight: 700;
        box-shadow: 0 size-m(5) size-m(10) rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        text-align: center;

        @media screen and (min-width: 768px) {
          padding: size(15) size(40);
          border-radius: size(30);
          font-size: size(18);
          box-shadow: 0 size(5) size(10) rgba(0, 0, 0, 0.1);
        }

        &:hover,
        &.active {
          background-color: #162783;
          color: #fff;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import img2_1 from './s7/2-1.jpg';
import img2_2 from './s7/2-2.jpg';
import img2_3 from './s7/2-3.jpg';
import img2 from './s7/2.jpg';

// 將四組資料明確定義為陣列，未來可直接修改內容
const slidesData = ref([
  {
    pics: [img2_1, img2_2, img2_3],
    pattern: img2,
    title: '標準戶 A',
    total: '80',
    descHtml: '約<span>45～50</span>坪 ｜ 主建物約<span>25～30</span>坪 ｜ 附屬建物約<span>5～6</span>坪',
    btnText: '標準戶 A'
  },
  {
    pics: [img2_1, img2_2, img2_3],
    pattern: img2,
    title: '標準戶 B',
    total: '80',
    descHtml: '約<span>45～50</span>坪 ｜ 主建物約<span>25～30</span>坪 ｜ 附屬建物約<span>5～6</span>坪',
    btnText: '標準戶 B'
  },
  {
    pics: [img2_1, img2_2, img2_3],
    pattern: img2,
    title: '標準戶 C',
    total: '80',
    descHtml: '約<span>45～50</span>坪 ｜ 主建物約<span>25～30</span>坪 ｜ 附屬建物約<span>5～6</span>坪',
    btnText: '標準戶 C'
  },
  {
    pics: [img2_1, img2_2, img2_3],
    pattern: img2,
    title: '標準戶 D',
    total: '80',
    descHtml: '約<span>45～50</span>坪 ｜ 主建物約<span>25～30</span>坪 ｜ 附屬建物約<span>5～6</span>坪',
    btnText: '標準戶 D'
  }
]);

// Swiper 需要的 Modules 註冊：包含淡入淡出、導航按鈕
const modules = [EffectFade, Navigation];

const swiperInstance = ref(null);
const activeIndex = ref(0);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  // 取得當前真實的索引值（確保在 loop: true 的情況下索引也是準確的）
  activeIndex.value = swiper.realIndex;
};

const goToSlide = (index) => {
  if (swiperInstance.value) {
    // 使用 slideToLoop 來支援 loop: true 模式下的切換
    swiperInstance.value.slideToLoop(index);
  }
};
</script>
