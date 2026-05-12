<template>
  <article
    class="s7 relative font-['Noto_Sans_TC']"
    id="s7"
  >
    <img
      class="bg"
      src="./s7/bg.png"
      alt="bg"
    />
    <div
      class="title"
      data-aos="zoom-out"
      data-aos-delay="0"
    >
      <h2>精選<b>戶別</b></h2>
    </div>
    <div
      class="main"
      data-aos="zoom-out"
      data-aos-delay="200"
    >
    <Swiper
  :key="isMobile ? 'mobile' : 'desktop'"
  :modules="modules"
  :effect="isMobile ? undefined : 'fade'"
  :fade-effect="isMobile ? undefined : { crossFade: true }"
  :slides-per-view=" 1"
  :centered-slides="isMobile ? true : false"
  :space-between="isMobile ? 15 : 0"
  :loop="isMobile ? false : true"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  :navigation="{
    nextEl: nextBtn,
    prevEl: prevBtn
  }"
>
        <SwiperSlide
          v-for="(slide, index) in slidesData"
          :key="index"
        >
          <div
            class="item"
            :data-title="slide.title"
          >
            <div class="pic">
              <div
                class="pic_item"
                v-for="(p, pIdx) in slide.pics"
                :key="pIdx"
              >
                <img
                  :src="p"
                  alt="pic"
                />
              </div>
              <p>3D模擬情境圖</p>
            </div>
            <div class="pattern">
              <img
                :src="slide.pattern"
                alt="pic"
              />
              <h2>
                {{ slide.title }}<span>共<b v-html="slide.total" />戶</span>
              </h2>
              <p v-html="slide.descHtml"></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- 自訂導覽箭頭 -->
      <div
        ref="prevBtn"
        class="s7-nav s7-prev"
        @click="swiperInstance?.slidePrev()"
      >
        <img
          src="./s7/prev.svg"
          alt="prev"
        />
      </div>

      

      <div
        ref="nextBtn"
        class="s7-nav s7-next"
        @click="swiperInstance?.slideNext()"
      >
        <img
          src="./s7/next.svg"
          alt="next"
        />
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

    <p class="txt">平面圖僅供參考，實際建材及設備以契約書為準。</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  z-index: 1;
  background-color:#D8DBDB;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: size(70) 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  .title {
    margin-top: size-m(60);
    margin-bottom: size-m(0);
    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: size(80);
    }
    h2 {
      color: #162783;
      font-weight: 300;
      font-size: size-m(25);
      line-height: size-m(55);
      letter-spacing: 0%;
      text-align: center;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        background-color: #162783;
        height: size-m(194);
        width: size-m(1);
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transform: rotate(-135deg) translateX(size-m(-50))
          translateY(size-m(15));
        opacity: 1;

        @media screen and (min-width: 768px) {
          height: size(194);
          width: size(1);
          transform: rotate(-135deg) translateX(size(-50));
        }
      }
      b {
        font-weight: 700;
        display: inline-block;
        margin-left: 1.5em;
      }
      @media screen and (min-width: 768px) {
        font-size: size(42);
        line-height: size(55);
      }
    }
  }
  .main {
    width: calc(100% - size-m(30));
    margin: 0 size-m(15);
    position: relative;
    z-index: 1;
    // padding-top: size-m(100);
    @media screen and (min-width: 768px) {
      max-width: size(1734);
      margin: auto;
    }

    /* 增加 Swiper 容器的內距，避免陰影被 overflow: hidden 裁切 */
    :deep(.swiper) {
      padding: size-m(100) size-m(20) size-m(20) size-m(20);
      margin: size-m(-20);
      @media screen and (min-width: 768px) {
        padding: size(20);
        margin: size(-20);
      }
    }
    :deep(.swiper-slide-prev) {
      .item::after{
        transform: translate(75%);
      }
    }
    :deep(.swiper-slide-next) {
      .item::after{
        transform: translate(-75%);
      }
    }

    .item {
      height: 100%;
      position: relative;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 size-m(10) size-m(10) 0 rgba(0, 0, 0, 0.15);
      border-radius: size-m(36);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-radius: size-m(15);
      padding: size-m(50) size-m(15) size-m(0) size-m(15);
      margin-bottom: size-m(12);

      @media screen and (min-width: 768px) {
        box-shadow: 0 size(10) size(10) 0 rgba(0, 0, 0, 0.15);
        border-radius: size(36);
        padding: size(30) size(50);
        margin-bottom: 0;
      }

      &::after {
        content: attr(data-title);
        position: absolute;
        top: size-m(-70);
        left: 0;
        right: 0;
        margin: auto;
        width: size-m(158);
        height: size-m(40);
        line-height: size-m(40);
        border-radius: size-m(62);
        background-color: #162783;
        color: #fff;
        font-weight: 700;
        font-size: size-m(20);
        letter-spacing: 0%;
        text-align: center;
        transform: translate(0);
        transition: transform .5s;

        @media screen and (min-width: 768px) {
          display: none;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: size-m(15);
        right: size-m(15);
        width: size-m(28);
        background-image: url(./s7/n.svg);
        background-size: contain;
        background-repeat: no-repeat;
        aspect-ratio:28 / 35;
        @media screen and (min-width: 768px) {
          top: size(50);
          right: size(30);
          width: size(64);
        }
      }

      .pic {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        gap: size-m(12);
        order: 2;
        margin-bottom:size-m(12);
        @media screen and (min-width: 768px) {
          width: size(645);
          gap: size(15);
          order: 1;
        margin-bottom:0;
        }

        .pic_item {
          flex: 1;
          img {
            width: 100%;
          }
          @media screen and (min-width: 768px) {
          }

          &:nth-child(1) {
          flex: 1 100%;
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
          flex: 1 100%;
          color: #828683;
          font-size: size-m(10);
          font-weight: 400;
          letter-spacing: 0;
          transform: translateY(-80%);

          @media screen and (min-width: 768px) {
            font-size: size(16);
            transform: unset;
          }
        }
      }

      .pattern {
        width: 100%;
        order: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    flex-direction:column;
        
        @media screen and (min-width: 768px) {
          order: 2;
          flex: 1;
        //  padding: 0 size(150);
        }

        img {
          max-width: 100%;
          margin: auto;
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
          padding-top: size-m(20);
            width: size-m(310);
          border-bottom: size-m(1) solid #162783;
          @media screen and (min-width: 768px) {
            padding-top: size(30);
            font-size: size(42);
            border-bottom: size(2) solid #162783;
            padding-bottom: size(15);
            margin-bottom: size(15);
            width: size(703);
          }

          span {
            font-weight: 700;

            letter-spacing: 0%;
            text-align: center;
            font-size: size-m(13.26);

            margin-left: 1em;
            @media screen and (min-width: 768px) {
              font-size: size(30);
            }

            b {
              font-weight: 700;
              letter-spacing: 0%;
              text-align: center;
              font-family: Noto Sans TC;

              font-size: size-m(18.57);
              display: inline-block;
              width: size-m(40);
              height: size-m(40);
              line-height: size-m(38);
              border-radius: 100%;
              border: size-m(1) solid #162783;
              margin: 0 0.05em;
              @media screen and (min-width: 768px) {
                font-size: size(30);
                width: size(65);
                height: size(65);
                line-height: size(63);
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
          margin-bottom: size-m(30);
          @media screen and (min-width: 768px) {
            font-size: size(14);
            margin-bottom: 0;
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
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      color: #162783;
      transition: opacity 0.3s;
      display: none;
      &:hover {
        opacity: 0.3;
      }
      @media screen and (min-width: 768px) {
        display: block;
        width: size(31.7);
        height: size(124);
      //  box-shadow: 0 0 size(10) rgba(0, 0, 0, 0.15);
      }

      &.swiper-button-disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      &.s7-prev {
        left: size(-60);
      }
      &.s7-next {
        right: size(-60);
      }
    }

    /* 自訂按鈕分頁 */
    .custom-pagination {
      display: none;
      justify-content: center;
      gap: size-m(10);
      margin-top: size-m(20);
      flex-wrap: wrap;
      @media screen and (min-width: 768px) {
        display: flex;
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

  .txt {
      text-align: center;
      font-weight: 400;
      font-size: size-m(11);
      color: #828683;
      margin-bottom: size-m(70);
      @media screen and (min-width: 768px) { 
        font-size: size(14);
        margin-top: size(30);
      margin-bottom: 0;
      }
    }
}
</style>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import img1_1 from './s7/1-1.jpg';
import img1_2 from './s7/1-2.jpg';
import img1_3 from './s7/1-3.jpg';
import img1 from './s7/1.webp';

import img2_1 from './s7/2-1.jpg';
import img2_2 from './s7/2-2.jpg';
import img2_3 from './s7/2-3.jpg';
import img2 from './s7/2.webp';

import img3_1 from './s7/3-1.jpg';
import img3_2 from './s7/3-2.jpg';
import img3_3 from './s7/3-3.jpg';
import img3 from './s7/3.webp';

import img4_1 from './s7/4-1.jpg';
import img4_2 from './s7/4-2.jpg';
import img4_3 from './s7/4-3.jpg';
import img4 from './s7/4.webp';

// 將四組資料明確定義為陣列，未來可直接修改內容
const slidesData = ref([
  {
    pics: [img1_1, img1_2, img1_3],
    pattern: img1,
    title: '市景戶',
    total: '18',
    descHtml: '約<span>22～31</span>坪 ｜ 主建物約<span>14～20</span>坪 ',
    btnText: '市景戶'
  },
  {
    pics: [img2_1, img2_2, img2_3],
    pattern: img2,
    title: '標準戶',
    total: '80',
    descHtml:
      '約<span>45～50</span>坪 ｜ 主建物約<span>25～30</span>坪 ｜ 附屬建物約<span>5～6</span>坪',
    btnText: '標準戶'
  },
  {
    pics: [img3_1, img3_2, img3_3],
    pattern: img3,
    title: '轉角戶',
    total: '6<span>+</span>6',
    descHtml:
      '約<span>76～79</span>坪 ｜ 主建物約<span>41</span>坪 ｜ 附屬建物約<span>8 </span>坪',
    btnText: '轉角戶'
  },
  {
    pics: [img4_1, img4_2, img4_3],
    pattern: img4,
    title: '三面採光戶',
    total: '7',
    descHtml:
      '約<span>61～68</span>坪 ｜ 主建物約<span>35～37</span>坪 ｜ 附屬建物約<span>6～7</span>坪',
    btnText: '三面採光戶'
  }
]);

// Swiper 需要的 Modules 註冊：包含淡入淡出、導航按鈕
const modules = [EffectFade, Navigation];

const swiperInstance = ref(null);
const activeIndex = ref(0);
const prevBtn = ref(null);
const nextBtn = ref(null);

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
