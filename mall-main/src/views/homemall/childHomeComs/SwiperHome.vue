<template>
  <div>
    <swiper>
      <swiper-item v-for="banner in banners">
        <a :ref="banner.link"> <img :src="banner.image" /> </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>