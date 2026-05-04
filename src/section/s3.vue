<template>
  <article class="s3 relative" id="s3">
    <img src="./s3/en.svg" class="en" alt="" data-aos="fade-up" data-aos-delay="0" >
    <img src="./s3/logo.svg" class="logo" alt="" data-aos="fade-up" data-aos-delay="0" >
<div class="txtbg"></div>
    <div class="t2"  data-aos="fade-up" data-aos-delay="600">
      <span>人生  必須要擁有一座成大</span><br /><br />

<span>是夢想 更是驕傲</span><br />
十年樹木 百年樹人<br />
府城400年文化底蘊<br />
造就成大 近百年學術輝煌<br /><br />

<span>是第一 更是唯一</span><br />
產學共舞 全球翹楚<br />
加州柏克萊大學之於矽谷<br />
成大之於南科 世界科技造浪者<br /><br />

<span>是樞紐 更是市心</span><br />
迎接世界AI巨擘浪潮<br />
啟動台南城中樞紐計畫<br />
8公頃站前TOD、捷運綠線<br />
繁華蛻變 精彩可期<br /><br />

<span>是傳承 更是傳奇</span><br />
成大首排 台南地王 <br />
25萬坪人文森林景觀席<br />
24層擎天傲視台南群峰<br />
1862坪台南世家競逐版圖<br /><br />

承載 無數世代榮耀<br />
謹獻下一代 成就者<br /><br />
<span>400年一遇 贏家必藏</span><br />
</div>
        </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

  .s3 {
  background:#fff url("./s3/bgm.jpg") no-repeat center bottom;
  background-size:100% auto;
  color: #777;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 700;
  height: sizem(1020);
  padding:sizem(50) 0 0 0;
  position: relative;
  
@media screen and (min-width: 768px) {
  background-image: url("./s3/bg.jpg");
    font-size: size(19);
  height: size(1070);
}
.txtbg{
  position: absolute;
  left:size(-500);
  top:0;
  width:size(1090);
  height:100%;
  background:#ffffffbf;
  border-radius: 0 50% 50% 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
}
.t2{//font-weight:500;
  letter-spacing: 0.01em;
  font-size: 1em;
  margin:0em auto 0em auto;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.05em;
  span{font-weight: 700;}
  @media screen and (min-width: 768px) {
  position: absolute;
  left:size(105);
   line-height:1.5;
  text-align: left;
   top:size(175);
  }
}
.en{
  position: absolute;
  left: 0;right: 0;margin: auto;
  width:sizem(375);
  top:auto;
  bottom:sizem(275);
@media screen and (min-width: 768px) {
  width:size(1710);
   top:size(40);
   bottom: auto;
  //top:calc(50% + #{size(795 - 1080 * .5)} );

}
}
.logo{
  position: absolute;
  left: 0;right: 0;margin: auto;
  width:sizem(105);
  bottom:sizem(13);filter:drop-shadow(0 0 5px rgba(0,0,0,.6));
@media screen and (min-width: 768px) {
  width:size(340);
  left: auto;right:size(110);
   bottom:size(70);
   filter:drop-shadow(0 0 size(5) rgba(0,0,0,.6));
  //top:calc(50% + #{size(795 - 1080 * .5)} );

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