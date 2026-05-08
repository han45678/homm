<template>
  <article
    class="s8 relative font-['Noto_Sans_TC']"
    id="s8"
  >
    <div class="main">
      <div
        class="item"
        v-for="(item, i) in info"
        :key="i"
      >
        <div class="pic">
          <img
            :src="item.pic"
            :alt="item.text"
          />
        </div>
        <h3>
          {{ item.text }}
        </h3>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  width: 100%;
  background-image: url(./s1/bg.jpg);
  background-size: cover;
  background-position: center center;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    background: rgba(22, 39, 131, 0.85);
  }
  @media screen and (min-width: 768px) {
    height: 1336;
    background-image: url(./s1/bgm.jpg);
  }
  .main {
    position: relative;
    z-index: 1;
    margin: auto;
    width: 100%;
    display: flex;
    @media screen and (min-width: 768px) {
      max-width: size(1480);

      /* 滑鼠移至 main 區塊時，設定全部項目的縮小倍率 */
      &:hover {
        .item {
          width: calc(25% / 1.79);
        }
        /* 被滑過(Hover)的項目設定放大倍率 */
        .item:hover {
          width: calc(25% * 2.35);
        }
      }
    }
    .item {
      cursor: pointer;
      padding-top: size-m(30);
      border-left: 1px solid #fff;
      transition: width 0.5s ease;
      overflow: hidden;
      
      @media screen and (min-width: 768px) {
        padding-top: size(50);
        width: 25%;
        &:last-child{
          border-right: 1px solid #fff;
        }
      }
      .pic {
        @media screen and (min-width: 768px) {
          width: 100%;
          height: size(698);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h3 {
        padding-top: size-m(30);
        padding-bottom: size-m(50);
        text-align: center;
        font-weight: 700;
        letter-spacing: 0%;
        font-size: 14px;
        color: #fff;
        white-space: nowrap;

        @media screen and (min-width: 768px) {
          padding-top: size(30);
          padding-bottom: size(50);
          font-size: 22px;
        }
      }
    }
  }
}
</style>
<script setup>
import pic1 from './s8/pic1.png';
import pic2 from './s8/pic2.jpg';
import pic3 from './s8/pic3.png';
import pic4 from './s8/pic4.png';

const info = [
  {
    pic: pic1,
    text: '全日餐廳'
  },
  {
    pic: pic2,
    text: '宴會廳'
  },
  {
    pic: pic3,
    text: '健身房&泳池'
  },
  {
    pic: pic4,
    text: '兒童俱樂部'
  }
];
</script>
