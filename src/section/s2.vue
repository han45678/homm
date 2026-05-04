<template>
  <article class="s2 relative" id="s2">
      <img src="./s2/logo.svg" class="logo" data-aos="zoom-out" data-aos-delay="0">
      <img src="./s2/t1.svg" class="t1" data-aos="zoom-out" data-aos-delay="0">
      <div class="img" data-aos="zoom-out" data-aos-delay="0"  data-aos-offset="-500"><img src="./s2/img.png"></div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .s2 {
  height:sizem(750);
  min-height: sizem(750);
  max-height: sizem(750);
  color: #fff;
  font-size: sizem(17);
  line-height: 1.3;
@media screen and (min-width: 768px) {
    height:100vh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(40);
}
 &::before{content: "";display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;
 // background: url("./s1/bgm.jpg") center center;
  background-size: cover; transform: scaleY(-1);
  @media screen and (min-width: 768px) {
   // background-image: url("./s1/bg.jpg");
  }
}
  
.logo{
  position: absolute;
  left: 0;right: 0;margin: auto;
  width:sizem(240);
  top:sizem(220);
@media screen and (min-width: 768px) {
  width:size(565);
  // top:size(265);
  top:calc(50% + #{size(265 - 1080 * .5)} );

}
}
.t1{
  position: absolute;
  left: 0;right: 0;margin: auto;
  width:sizem(240);
  top:sizem(415);
@media screen and (min-width: 768px) {
  width:size(880);
  // top:size(795);
  top:calc(50% + #{size(795 - 1080 * .5)} );

}
}
.img{
  position: absolute;
  right: sizem(-40);
  width:sizem(145);
  bottom:sizem(-115);
  z-index: 5;
  img{width: 100%;
  animation: an 6s linear alternate infinite;
transform-origin: 100% 100%;
        transform: rotate(-3deg);
  }

@media screen and (min-width: 768px) {
  width:size(370);
  right: size(-97);
  bottom:size(-280);
  // top:calc(50% + #{size(507 - 1080 * .5)} );
  

}
}
    @keyframes an {
      to {
        transform: rotate(3deg);
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