<template>
    <div class="home-swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of dataList" :key="item.id">
              <img class="swiper-img" :src="item.imgSrc">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
export default {
  props: {
    dataList: Array,
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
// 该class用于网速不好时占用图片的位置，解决图片加载后的抖屏问题
.home-swiper {
  overflow: hidden;
  height: 0;
  line-height: 0;
  padding-bottom: 24.533333333333332%; //相对宽 即此处的图片宽高比为：100：24.533333333333332
  background-color: #ccc;
}

// 样式穿透(但实际没有)
.home-swiper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.swiper-img {
  width: 100%;
}
</style>