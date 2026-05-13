<template>
  <article class="s4 relative font-['Noto_Sans_TC'] bg-[#D8DBDB]" id="s4">
    <div class="top">
      <img data-aos="zoom-out" data-aos-delay="0" src="./s4/logo.svg" alt="logo" />
      <p data-aos="zoom-out" data-aos-delay="200">
        座落於<b>亞果遊艇城核心腹地，與亞果遊艇旗艦遊艇城無縫串聯</b>，居住日常自然延伸至海上。從專屬遊艇泊位、國際規格碼頭設施，到完整的海洋休閒與水上活動規劃，度假不再只是短暫停留，而是被完整納入日常生活的節奏之中。
      </p>
    </div>
    <div class="mid" data-aos="zoom-out" data-aos-delay="300">
      <img class="main" src="./s4/pic.webp" alt="pic" />
      <img class="logo_w" src="./s4/logo_w.svg" alt="logo_w" />
      <p>3D外觀透視示意圖</p>
    </div>
    <div class="bottom">
      在這裡，渡假之外，更擁有一座<b>全方位水上遊城</b><br />
      所帶來的層層體驗——航行、休憩、社交、款待與私密並存，形塑少數人才能進入的海洋生活圈。
    </div>

    <img class="b b1" src="./s4/b1.webp" alt="b1" />
    <img class="b b2" src="./s4/b2.webp" alt="b2" />
    <img class="b b3" src="./s4/b3.webp" alt="b3" />
    <svg class="line" viewBox="0 0 124 122" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="125" y2="123" stroke="#fff" />
    </svg>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes float {
  to {
    transform: translateY(0);
  }
}

.s4 {
  position: relative;
  padding: size-m(60) 0 size-m(90) ;

  @media screen and (min-width: 768px) {
    padding: size(100) 0 size(140) 0;
  }

  .top {
    width: 100%;
    padding-bottom: size-m(50);

    @media screen and (min-width: 768px) {
      max-width: size(1480);
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: size(80);
      justify-content: center;
      padding-bottom: size(30);
    }

    img {
      width: size-m(225);
      display: block;
      margin: auto auto size-m(30) auto;

      @media screen and (min-width: 768px) {
        width: size(224);
        margin: 0;
      }
    }

    p {
      width: size-m(310);
      margin: auto;
      font-weight: 300;
      font-size: size-m(14);
      line-height: 1.7;
      letter-spacing: 0%;
      color: #000;

      @media screen and (min-width: 768px) {
        margin: 0;
        width: 55.5em;
        font-size: size(18);
        letter-spacing: 0%;
      }

      b {
        font-weight: 700;
        color: #162783;
      }
    }
  }

  .mid {
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      max-width: size(1480);
      margin: 0 auto;
    }

    img {
      &.main {
        width: 100%;
        height: size-m(214);
        object-fit: cover;

        @media screen and (min-width: 768px) {
          width: 100%;
          height: size(666);
        }
      }

      &.logo_w {
        position: absolute;
        width: size-m(135);
        left: size-m(15);
        bottom: size-m(15);

        @media screen and (min-width: 768px) {
          width: size(370);
          left: size(50);
          bottom: size(15);
        }
      }
    }

    p {
      position: absolute;
      font-weight: 300;
      font-size: size-m(11);
      line-height: 1.5;
      letter-spacing: 0%;
      right: 1em;
      top: 1em;
      color: #fff;

      @media screen and (min-width: 768px) {
        font-size: size(16);
      }
    }
  }

  .bottom {
    width: size-m(310);
    padding-top: size-m(50);
    font-weight: 300;
    font-size: size-m(14);
    line-height:1.7;
    letter-spacing: 0%;
    text-align: center;
    margin: auto;

    @media screen and (min-width: 768px) {
      width: 100%;
      max-width: size(1480);
      padding-top: size(40);
      font-weight: 300;
      font-size: size(18);
      line-height: 1.7;
      letter-spacing: 0%;
      text-align: center;
    }

    b {
      font-weight: 700;
      color: #162783;
    }
  }

  .b {
    position: absolute;

    &.b1 {
      transform: translateY(-25%);
      animation: float 8s ease-in-out alternate infinite;
      left: size-m(0);
      top: size-m(530);
      width: size-m(110);

      @media screen and (min-width: 768px) {
        left: size(70);
        top: size(750);
        width: size(180);
      }
    }

    &.b2 {
      transform: translateY(-20%);
      animation: float 9s ease-in-out alternate infinite;
      right: size-m(0);
      top: size-m(260);
      width: size-m(120);

      @media screen and (min-width: 768px) {
        right: size(70);
        top: size(500);
        width: size(180);
      }
    }

    &.b3 {
      transform: translateY(-20%);
      animation: float 5s ease-in-out alternate infinite;
      right: size-m(20);
      top: size-m(522);
      width: size-m(110);
      z-index: 2;

      @media screen and (min-width: 768px) {
        right: size(70);
        top: size(750);
        width: size(250);
      }
    }
  }

  .line {
    position: absolute;
    width: size-m(80);
    aspect-ratio: 124/122;
    left: size-m(50);
    bottom: size-m(0);

    @media screen and (min-width: 768px) {
      width: size(124);
      left: size(591);
      bottom: size(0);
    }
  }
}
</style>
