<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading
    }"
    class="transition-all duration-500 flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img
      class="w-32"
      src="//h35.banner.tw/img//loading_w.gif"
      alt="loading"
      srcset=""
    />
  </div>
  <!--loading end-->
  <!--
  'Noto_Serif_TC',serif
  'Noto_Sans_TC',sans-serif
  -->

  <div
    class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#D0D3D3] text-[#3E3A39]"
  >
    <h1 class="absolute opacity-0 pointer-events-none">{{ info.caseName }}</h1>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <Order />
  </div>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
html,
body,
* {
  -webkit-text-size-adjust: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
/*
.bgs12{
  position: relative;
  overflow: hidden;}
.bg{
  position: absolute;top: 0;left: 0;width: 100%;height: auto;
  animation: an 70s linear reverse infinite;
  transform: translateY(-25%);
    @media screen and (min-width:768px) {
      
  animation: an 60s linear reverse infinite;
    }
}
    */
.home {
  position: relative;
  &::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    /* 
    background: url("@/section/s1/obgm.jpg") center center;
    background-size: size-m(375) auto;
    @media screen and (min-width:768px) {
      background-image: url("@/section/s1/obg.jpg");
      background-size: 100% auto;
    }
      */
  }
}
// 字體
/*
@font-face {
  font-family: 'com4f';
  src: local("COM4tFine"),local("COM4t Fine Regular"),
  url('@/section/form/com4f.ttf') format("opentype"),
}
  */
</style>

<script setup>
import info from '@/info';
import S1 from '@/section/s1.vue';
import S2 from '@/section/s2.vue';
import S3 from '@/section/s3.vue';
import S4 from '@/section/s4.vue';
import S5 from '@/section/s5.vue';
import S6 from '@/section/s6.vue';
import S7 from '@/section/s7.vue';
import S8 from '@/section/s8.vue';
import Order from '@/section/order.vue';
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

import AOS from 'aos';

const isLoading = ref(true);
const gtmNoScript = ref('');
onMounted(() => {
  window.onload = function () {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 2000
    });
  };
});
</script>
