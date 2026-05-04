<template>
  <div>
  <div class="contact-info-img relative">
    <img src="@/section/s1/obg.svg" class="obg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
   
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--  <div class="logo">obg.svg
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>  --> <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center contact-phone" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
       <!-- <img src="//h35.banner.tw/img/form/phone.svg" alt="電話" srcset="" /> -->
          <div>貴賓專線：{{ info.phone }}<br>營業時間：9:30-18:30</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'" v-if="info.fbMessage">
        <img src="//h35.banner.tw/img//form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()" v-if="info.fbLink">
        <img src="//h35.banner.tw/img//form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
      <div class="flex contact-item justify-center items-center address">
        <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h35.banner.tw/img//form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div> 

  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'" v-if="info.fbMessage">
      <img src="//h35.banner.tw/img//form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img//form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h35.banner.tw/img//form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img//form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img//form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img//form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
      `${info.address2?info.address2:'導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-2 text-md-phone" v-if="modalType == 'phone'" v-html="info.phone"></div>
      <div class="text-md mt-4">{{ modalType == 'phone' ? "營業時間:9:30-18:30" : modalType == 'fb' ? '線上諮詢' :
      `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.bg-color1{background-color: #666;}
.hover\:bg-color2:hover{background-color:#0e679c;}


.contact-info-img{
  height: 0;z-index:1;position: relative;
  .obg{position: absolute;bottom: 0;left: 0;width: size(677);height: auto;z-index: -1;}
}

.contact-info {
  position: relative;
  z-index: 50;
   background: #162783;
    font-size:16px;
    line-height: 1.6;
  padding:3.4em 0;

  .logo {position: relative;
    width: size(367);
   // height: size(172);
    // background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto 0;
    img{width: 100%;}
    .logot{position: absolute;top:31%;left: 0;right: 0;margin: auto;width: 85%;}
  }

  .contact-item-box {
    position: relative;
    margin-top: 1.25em;
    gap: 1.25em;
    width: size(1200);
    min-width: 750px;

    .contact-item {
      background: #D0D3D3;
      color: #162783;
      width: 100%;
      flex: 1;
      //padding: 0.5em 0;
   // border-radius: 1em;
   min-height: 70px;
      letter-spacing: 0em;
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      gap: 1em;
      font-weight: 700;
      img {
        width:1.68em;
        height: 1.68em;
        filter: invert(16%) sepia(25%) saturate(5653%) hue-rotate(220deg) brightness(96%) contrast(108%);
        transition: all .5s;
        margin: 0;
      }

      &:hover {
        background: #0e679c;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }
      }


      &.address {
        background-color: #FFF;
        background-image: none;
        color: #000;
        z-index: 0;
        position: relative;
        flex:2.17;
        // border-radius: 999px 0 0 999px;
      //  max-width: 9999px;
        justify-content: center;
        margin-right: -1.4em;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }
        div{
          text-indent:0em;
          white-space: normal;
          padding: 0 1em;
        }
      }


      &.googlemap {
        flex:1;
  //    background-color: #9B1E44;
      border-left-width: 0;
      //  color: #fff;
/*
        img {
          filter: brightness(0) invert(0);
        }

        &:hover {
   //     background-color: #C29267;
          color: #000;
          img {
            filter: brightness(0) invert(0);
          }
        }
          */
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{ filter: invert(20%) sepia(61%) saturate(4301%) hue-rotate(188deg) brightness(88%) contrast(89%);
  }
}

@media screen and (max-width:768px) {


  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    background:#162783;

    .contact-item {
      height: 100%;      
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left:1px solid #fff9;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      border-left:0;}

    }
  }

  .contact-info {
    width: 100%;
    min-width:0;
    position: relative;
    justify-content: space-between;

    .logo {
      width: sizem(257);
    margin: sizem(40) auto sizem(30) auto;
     // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
    margin-top:0;
      gap:0;
      flex-direction: column;
    width: sizem(310);
    min-width: 0;

      .contact-item {
        padding: 1.1em 0;
        max-width: 100%;
        white-space: nowrap;
        margin:1.1em 0 0 0;

        img {                              
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }
        div{
       //   text-indent: 2em;
        }

        &.address {
          border-radius: 0;
          padding: 1.1em 0;
        //  margin-top: sizem(25);
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          border-radius: 0 0;
        }
      &.googlemap {
        border-top-width: 0;
        border-left-width:0;
        margin-top:0;
      }
      }

      &.no-gap {
        gap: 0 !important;
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
     setTimeout(() => {
       window.location.href = "phoneThanks";
     }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
