<template>
  <article
    class="s3 relative"
    id="s3"
  >
    <section class="banyan-section">
      <!-- 左上角 Logo -->
      <div class="logo-wrapper">
        <img
          src="./s3/logo.svg"
          alt="Part of banyan group"
          class="logo-svg"
        />
      </div>

      <div class="content-container">
        <!-- 主標題區 (帶斜線) -->
        <div class="hero-title">
          <div class="text-left">
            <h2 class="main-text">兼得</h2>
            <h3 class="sub-text">雙重<br />生活</h3>
          </div>
          <div class="divider-line"></div>
          <div class="text-right">
            <h2 class="target-text">的理想居所</h2>
          </div>
        </div>

        <!-- 下方描述文字 -->
        <div class="description">
          <p>
            悅榕集團的酒店式房產，不僅享有完善而高規格的公共設施，更全面承襲悅榕集團飯店一貫的服務標準，提供全天候24小時的禮賓服務，細緻照應生活每一刻。
          </p>
          <p>
            亦同步尊享集團旗下度假村、療癒水療中心與高爾夫球場的專屬禮遇，讓居住不僅是日常，更是一種被精心款待的生活方式。
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  .banyan-section {
    position: relative;
    width: 100%;
    background-color: #f0ede6;
    padding: size-m(60) size-m(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    @media screen and (min-width: 768px) {
      padding: size(100) size(150);
    }

    .logo-wrapper {
      position: static;
      margin-bottom: size-m(40);
      width: 100%;
      text-align: center; // 手機版通常 Logo 會置中或依內容調整

      @media screen and (min-width: 768px) {
        position: absolute;
        top: size(50);
        left: size(50);
        margin-bottom: 0;
        width: auto;
        text-align: left;
      }

      .logo-svg {
        width: size-m(199); // 手機版寬度
        @media screen and (min-width: 768px) {
          width: size(368); // 電腦版寬度
        }
      }
    }

    .content-container {
      max-width: size(1200);
      width: 100%;
      margin-top: 0;

      @media screen and (min-width: 768px) {
        margin-top: size(100);
      }
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: size-m(15);
      margin-bottom: size-m(30);
      position: relative;
      color: #002265;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: size(40);
        margin-bottom: size(60);
      }

      .text-left {
        text-align: center;
        display: flex;
        align-items: center;
        gap: size-m(15);
        @media screen and (min-width: 768px) {
          gap: size(15);
        }
        .main-text {
          font-family: 'Noto Sans TC';
          font-weight: 700;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
          }
        }

        .sub-text {
          font-weight: 300;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;
          text-align: center;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
            text-align: left;
          }

          span {
            font-family: 'Noto Sans TC';
            font-weight: 700; // 「生活」為粗體
          }
        }
      }

      .divider-line {
        display: none; // 手機版標題通常垂直排列，可隱藏斜線或調整角度

        @media screen and (min-width: 768px) {
          display: block;
          width: 1px;
          height: size(100);
          background-color: #002265;
          transform: rotate(35deg);
        }
      }

      .text-right {
        .target-text {
          font-weight: 300;
          font-size: size-m(29.45);
          line-height: size-m(38.56);
          letter-spacing: 0;
          text-align: center;

          @media screen and (min-width: 768px) {
            font-size: size(42);
            line-height: size(55);
            text-align: left;
          }
        }
      }
    }

    .description {
      max-width: size(800);
      margin: 0 auto;

      p {
        font-family: 'Noto Sans TC';
        font-weight: 300;
        font-size: size-m(14);
        line-height: 170%;
        letter-spacing: 0;
        color: #333;
        text-align: justify;
        margin-bottom: size-m(12);

        @media screen and (min-width: 768px) {
          font-size: size(14);
          line-height: size(24);
          text-align: left;
          margin-bottom: size(15);
        }
      }
    }
  }
}
</style>
<script setup></script>
