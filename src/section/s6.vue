<template>
  <article
    class="s6 relative font-['Noto_Sans_TC']"
    id="s6"
  >
    <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  width: 100%;
  height: 100dvh;
}
</style>
<script setup>
import Fullview from '@/components/fullview.vue';
</script>
