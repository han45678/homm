<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/pc.jpg" class="t0"> -->
    <img src="./s1/tree.png" class="tree">

    <div class="t1" data-aos="zoom-in" data-aos-delay="500">玖登開發八擴案<br>
      八擴重劃正核心</div>
    <div class="hr" data-aos="flip-up" data-aos-delay="0"></div>
    <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="800">
    <div class="t2"></div>
    <!-- <img src="./s1/mo.jpg" class="t0"> -->
     <!-- <img src="./s1/bg.webp" class="bg">
    
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/building.webp" class="building" data-aos="zoom-in" data-aos-delay="200">
   <img src="./s1/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="200"> -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .2;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s1 {
   // height:  sizem(604);
  //  height:sizem(667);
  /*  */  
  height:calc(100vh - 63px);
  min-height: sizem(604);
    max-height: sizem(750);
  
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
    // height: size(1070);
    min-height: size(1080);
    max-height: size(1080);
    //justify-content:space-between;
    padding: 0;
    font-size: size(56);
}
.tree{
  position: absolute;bottom: 0;left:calc(50% - #{sizem(850 * .5)});width: sizem(850); 
  transform: skewX(-5deg);
  transform-origin: 50% 100%;
  animation: an 5s linear alternate infinite;
  filter:drop-shadow(0 0 .3vw #fff);
  @media screen and (min-width: 768px) {
    bottom: calc(20% + #{size(0 - 1080 * .2)});
    left:calc(50% - #{size(2280 * .5)});
    width: size(2280); 
  }
}

.t1{font-weight: 900;}
.hr{height: 1.5em;background: #fff;width: 1px;margin: .3em auto .4em auto;
}
.t2{width: 8.5em;margin: 0 auto 1em;position: relative;z-index: 5;

  @media screen and (min-width: 768px) {margin: 0 auto 2.3em;}
}

  .bg{position: absolute;
    top:0;left:0;
    height: 100%; transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;
    @media screen and (min-width: 768px) {
      height: auto;width:size(2300);top:calc(50% + #{size(0 - 1080 * .5)});
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>