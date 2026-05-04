<template>
  <article class="s1 relative bg-[#162783]" id="s1">
    <!--  <img src="./s1/1.jpg" class="t0">
      <img src="./s1/0.jpg" class="t0"> <img src="./s1/pc.jpg" class="t0">
      <img src="./s1/t1m.svg" class="t1" data-aos="zoom-out" data-aos-delay="0" v-if="isMobile">
      <img src="./s1/t1.svg" class="t1" data-aos="zoom-out" data-aos-delay="0" v-else>  -->
   
    <img src="./s1/bg.svg" class="bg" v-if="!isMobile" />
    <img src="./s1/bgm.svg" class="bg" v-else />
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-out" data-aos-delay="200" />
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-out" data-aos-delay="0" />
    <div class="t1" data-aos="zoom-out" data-aos-delay="300">一戶一海<span>景•</span>國際級酒店居所</div>
    <div class="t2" data-aos="zoom-out" data-aos-delay="500">43-75<span>坪 •</span>悅榕集<span>團 •</span>跨界聯名</div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  pointer-events: none;
  z-index: 9;
  opacity: .3;
}

.s1 {
  height: sizem(604);
  min-height: sizem(604);
  max-height: sizem(604);
  // background: url("./s1/bgm.jpg") center center;
  background-size: cover;

  color: #fff;
  font-size: sizem(14);
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    // background-image: url("./s1/bg.jpg");
    height: 100vh;
    min-height: size(959);
    max-height: size(959);
    padding: 0;
    font-size: size(28);
  }

  .bg {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: auto;
    z-index: 1;
  }

  .slogo {
    position: absolute;
    left: sizem(20);
    width: sizem(125);
    top: sizem(28);

    @media screen and (min-width: 768px) {
      width: size(274);
      left: size(77);
      top: size(56);
    }
  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(195);
    top: sizem(196);

    @media screen and (min-width: 768px) {
      width: size(379);
      left: size(290);
      margin: 0;
      right: auto;
      top: size(342);
    }
  }

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: sizem(292);
    text-align: center;
    font-size: 1.46em;

    @media screen and (min-width: 768px) {
    
      left: size(215);
      margin: 0;
      right: auto;
      top: size(530);
    }
    span{letter-spacing: -.1em;}
  }
  .t2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: sizem(408);
    text-align: center;

    @media screen and (min-width: 768px) {     
      left: size(280);
      margin: 0;
      right: auto;
      top: size(845);
    }
    span{letter-spacing: -.1em;}
  }

}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>