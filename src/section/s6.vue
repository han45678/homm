<template>
  <article
    class="s6 relative font-['Noto_Sans_TC']"
    id="s6"
  >
    <img
      class="b b1"
      src="./s6/b1.png"
      alt="b1"
    />
    <img
      class="b b2"
      src="./s6/b2.png"
      alt="b2"
    />

    <div class="title">
      <h2>離塵 · 不離城</h2>
      <h3>古蹟人文風華 / 都會富裕生機 / 濱海休閒聚落</h3>
    </div>

    <p>實景空拍經合成示意圖</p>

    <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20%);
  }
}

.s6 {
  width: 100%;
  height: 100dvh;
  position: relative;
  .title {
    position: absolute;
    z-index: 1;
    top: size-m(60);
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    text-align: center;
    @media screen and (min-width: 768px) {
      top: size(70);
    }
    h2 {
      font-weight: 700;
      letter-spacing: 0%;
      font-size: size-m(25);
      line-height: size-m(55);

      @media screen and (min-width: 768px) {
        font-size: size(42);
        line-height: size(55);
        padding-bottom: size(30);
      }
    }
    h3 {
      font-weight: 300;
      font-size: size-m(14);
      line-height: size-m(24);
      letter-spacing: 0%;

      @media screen and (min-width: 768px) {
        font-size: size(28);
        line-height: size(24);
      }
    }
  }

  p {
    position: absolute;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    font-size: size-m(11);
    line-height: 150%;
    left: size-m(15);
    bottom: size-m(15);
    letter-spacing: 0%;
    @media screen and (min-width: 768px) {
      font-size: size(16);
      line-height: size(42);
      left: size(15);
      bottom: size(15);
    }
  }

  .b {
    position: absolute;
    z-index: 1;
    animation: float 4s ease-in-out infinite;
    &.b1 {
      width: size-m(112);
      height: size-m(75);
      top: size-m(139);
      left: size-m(-27);
      opacity: 1;

      @media screen and (min-width: 768px) {
        width: size(263);
        height: size(177);
        top: size(174);
        left: size(222);
        opacity: 1;
      }
    }
    &.b2 {
      animation-duration: 5s;
      animation-delay: -2s;
      width: size-m(100);
      height: size-m(53);
      top: size-m(32);
      left: size-m(285);
      opacity: 1;
      @media screen and (min-width: 768px) {
        width: size(236);
        height: size(126);
        top: size(56);
        left: size(1480);
        opacity: 1;
      }
    }
  }
}
</style>
<script setup>
import Fullview from '@/components/fullview.vue';
</script>
