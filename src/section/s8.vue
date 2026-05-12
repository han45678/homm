<template>
  <article
    class="s8 relative font-['Noto_Sans_TC']"
    id="s8"
  >
    <div class="title" data-aos="zoom-out"
      data-aos-delay="0">
      <h2>
        <b>
          <img
            src="./s8/logo.svg"
            alt="logo"
          />
        </b>

        <span> 酒店<br />設施 </span>
      </h2>

      <p>入主 HOMM Residences 鴻居苑，<br />可使用HOMM鴻居酒店飯店設施。</p>
    </div>

    <div class="main" data-aos="zoom-out"
      data-aos-delay="200">
      <div
        class="item"
        v-for="(item, i) in info"
        :key="i"
      >
        <div class="pic">
          <img
            :src="item.pic"
            :alt="item.text"
          />
        </div>
        <h3>
          {{ item.text }}
        </h3>
      </div>
    </div>

    <div class="main-m">
      <Swiper
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="0"
        :loop="true"
      >
        <SwiperSlide v-for="(item, i) in info" :key="i">
          <div class="item">
            <div class="pic">
              <img :src="item.pic" :alt="item.text" />
            </div>
            <h3>{{ item.text }}</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <p class="text">以上圖片皆為情境示意圖</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  width: 100%;
  background-image: url(./s1/bg.jpg);
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    background: rgba(22, 39, 131, 0.9);
  }
  @media screen and (min-width: 768px) {
    height: size(1336);
    background-image: url(./s1/bgm.jpg);
  }

  .title {
    position: relative;
    z-index: 1;
    color: #fff;
    padding-top: size-m(60);
      padding-bottom: size-m(20);
    @media screen and (min-width: 768px) {
      padding-top: size(70);
      padding-bottom: size(70);
    }
    h2 {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: size-m(30);
      @media screen and (min-width: 768px) {
        padding-bottom: size(30);
      }

      b {
        position: relative;
        margin-right: size-m(60);
        padding-bottom: 0.5em;
        @media screen and (min-width: 768px) {
          margin-right: size(70);
        }
        img {
          width: size-m(185);
          @media screen and (min-width: 768px) {
            width: size(247);
          }
        }
        &::before {
          content: '';
          position: absolute;
          transform: rotate(45deg);
          width: size-m(209);
            height: size-m(209);
            border-top: size-m(1) solid #fff;
            bottom: size-m(-105);
            left: size-m(-15);

          @media screen and (min-width: 768px) {
            width: size(278);
            height: size(278);
            border-top: size(1) solid #fff;
            bottom: size(-135);
            left: size(-30);
          }
        }
      }

      span {
        font-weight: 300;
        letter-spacing: 0%;
        text-align: center;
        font-size: size-m(31.56);
        line-height: size-m(41.33);

        @media screen and (min-width: 768px) {
          font-size: size(42);
          line-height: size(55);
        }
      }
    }

    p {
      text-align: center;

      font-weight: 300;
      letter-spacing: 0%;
      font-size: size-m(14);
      line-height: 170%;

      @media screen and (min-width: 768px) {
        font-size: size(28);
        line-height: size(24);
      }

      br {
        @media screen and (min-width: 768px) {
          display: none;
        }
      }
    }
  }
  .main {
    position: relative;
    z-index: 1;
    margin: auto;
    width: 100%;
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      max-width: size(1447);
        .item {
          flex: 1;
        }

      /* 滑鼠移至 main 區塊時，設定全部項目的縮小倍率 */
      &:hover {
        /* 被滑過(Hover)的項目設定放大倍率 */
        .item:hover {
          flex: 4.2;
        }
      }
    }
    .item {
      cursor: pointer;
      padding-top: size-m(30);
      border-left: size-m(1) solid #fff;
      transition: width 0.5s ease ,flex 0.5s ease;
      overflow: hidden;

      @media screen and (min-width: 768px) {
        padding-top: size(50);
        width: 25%;
        border-left: size(1) solid #fff;
        &:last-child {
          border-right: size(1) solid #fff;
        }
      }
      .pic {
        @media screen and (min-width: 768px) {
          width: 100%;
          height: size(698);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h3 {
        padding-top: size-m(30);
        padding-bottom: size-m(50);
        text-align: center;
        font-weight: 700;
        letter-spacing: 0%;
        font-size: size-m(14);
        color: #fff;
        white-space: nowrap;

        @media screen and (min-width: 768px) {
          padding-top: size(30);
          padding-bottom: size(50);
          font-size: size(22);
        }
      }
    }
  }

  .main-m {
    width: 100%;
    position: relative;
    z-index: 1;
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }

    :deep(.swiper-wrapper) {
      align-items: stretch;
    }

    :deep(.swiper-slide) {
      width: 84%;
      height: auto;
    }

    .item {
      padding-top: size-m(20);
      border-left: size-m(1) solid #fff;
      // border-right: size-m(1) solid #fff;
      height: 100%;
      display: flex;
      flex-direction: column;

      .pic {
        flex-grow: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      h3 {
        padding: size-m(9) 0;
        text-align: center;
        font-weight: 500;
        letter-spacing: 0%;
        font-size: size-m(14);
        color: #fff;
        white-space: nowrap;
      }
    }
  }

  .text {
    position: relative;
    z-index: 1;
    color: #fff;
    z-index: 1;
    font-weight: 300;
    font-size: size-m(11);
    text-align: center;
    padding: size-m(10) 0 size-m(80) 0;
    text-shadow: 0 0 .3em #000;
    @media screen and (min-width: 768px) {
      position: absolute;
      font-size: size(16);
      left: size(15);
      bottom: size(15);
      padding:0;
    }
  }
}
</style>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import pic1 from './s8/pic1.webp';
import pic2 from './s8/pic2.webp';
import pic3 from './s8/pic3.webp';
import pic4 from './s8/pic4.webp';

const info = [
  {
    pic: pic1,
    text: '全日餐廳'
  },
  {
    pic: pic2,
    text: '宴會廳'
  },
  {
    pic: pic3,
    text: '健身房&泳池'
  },
  {
    pic: pic4,
    text: '兒童俱樂部'
  }
];
</script>
