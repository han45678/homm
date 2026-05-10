<template>
  <article
    class="s1 relative bg-[#162783 font-['Noto_Sans_TC']"
    id="s1"
  >
    <img
      src="./s1/bg.jpg"
      class="bg"
      v-if="!isMobile"
    />
    <img
      src="./s1/bgm.jpg"
      class="bg"
      v-else
    />

    <img
      src="./s1/logo.svg"
      class="logo"
      data-aos="zoom-out"
      data-aos-delay="200"
    />
    <img
      src="./s1/slogo.svg"
      class="slogo"
      data-aos="zoom-out"
      data-aos-delay="0"
    />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  height: size-m(604);
  height: calc(100dvh - size-m(85));
  // min-height: size-m(604);
  // max-height: size-m(604);
  background-size: cover;
  object-position: top center;

  @media screen and (min-width: 768px) {
    height: 100dvh;
    // min-height: size(959);
    // max-height: size(959);
    padding: 0;
    font-size: size(28);
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
  }

  .logo {
    position: absolute;
    width: size-m(256);
    top: size-m(150);
    left: 0;
    right: 0;
    z-index: 1;
    @media screen and (min-width: 768px) {
      width: size(410);
      top: size(289);
    }
  }

  .slogo {
    position: absolute;
    width: size-m(198);
    top: size-m(293);
    left: 0;
    right: 0;
    z-index: 1;
    @media screen and (min-width: 768px) {
      width: size(324);
      top: size(517);
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
