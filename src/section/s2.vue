<template>
  <article
    class="s2 relative font-['Noto_Sans_TC']"
    id="s2"
  >
    <img
      src="./s2/home.webp"
      alt="home"
      class="home"
    />
    <div class="bg"></div>
    <div class="text">
      <h2
        data-aos="zoom-out"
        data-aos-delay="0"
      >
        一戶一海景
        <b>全齡養身居所</b>
      </h2>
      <h3
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        <span>46-75坪</span>
      </h3>
      <img
        data-aos="zoom-out"
        data-aos-delay="300"
        src="./s2/logo.png"
        alt="logo"
        class="logo"
      />
    </div>

    <p class="txt">3D外觀透視示意圖</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes moveLeftRight {
  to{
     transform: translateX(0%);
  }
  /*
  0%,
  100% {
    transform: scale(1.05) translateX(2%);
  }
  50% {
    transform: scale(1.05) translateX(-2%);
  }
    <img
      src="./s2/bg.webp"
      alt="s2"
      class="bg"
    />

    */
}

.s2 {
  width: 100%;
  height: size-m(460);
  background-color: #e6f3fc;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: size(900);
  }
  .home {
    height: size-m(159);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    @media screen and (min-width: 768px) {
      height: size(645);
    }
  }

  .bg {
      height: 100%;
   transform: translateX(-50%);
    background: url('./s2/bg.webp') ;
    animation: moveLeftRight 30s linear infinite reverse;
    aspect-ratio: 4480/900; //背景圖2240 的兩倍寬 才回循環
    @media screen and (min-width: 768px) {
    animation-duration: 50s;

    }
  }

  .text {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: size-m(90);
    text-align: center;
    color: #162783;
    @media screen and (min-width: 768px) {
      top: size(125);
    }
    h2 {
      font-weight: 300;
      font-size: size-m(24);
      line-height: 1.5;
      letter-spacing: 0%;
      margin-bottom: size-m(15);
      @media screen and (min-width: 768px) {
        margin-bottom: size(15);
        font-size: size(42);
      }
      b {
        font-weight: 700;
        margin-left: 0.5em;
      }
    }
    h3 {
      margin-bottom: size-m(50);
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        background-color: #162783;
        @media screen and (min-width: 768px) {
          width: size(312);
          height: size(1);
        }
      }
      &::after {
        content: '';
        background-color: #162783;
        @media screen and (min-width: 768px) {
          width: size(312);
          height: size(1);
        }
      }
      @media screen and (min-width: 768px) {
        margin-bottom: size(75);
      }
      span {
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: 0%;
        margin: 0 0.5em;
        font-size: size-m(25);
        @media screen and (min-width: 768px) {
          font-size: size(42);
        }
      }
    }
    .logo {
      width: size-m(75);
      @media screen and (min-width: 768px) {
        width: size(127);
      }
    }
  }

  .txt {
    font-weight: 400;
    letter-spacing: 0%;
    font-size: size-m(11);
    line-height: 150%;
    position: absolute;
    left: size-m(15);
    bottom: size-m(15);
    color: #fff;
    z-index: 1;
    @media screen and (min-width: 768px) {
      font-size: size(16);
      line-height: size(42);
      left: size(15);
      bottom: size(15);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll');
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  });
};
</script>
