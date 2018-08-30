<template>
    <div class="gallery" @click="onClickClose()">

        <div class="gallery-content">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(url, index) of imgList" :key="index">
                    <img class="swiper-img" :src="url">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
         
    </div>
</template>

<script>
export default {
  name: 'BaseGallery',
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    onClickClose() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.gallery .swiper-container {
  overflow: inherit;
}
</style>

<style scoped lang="scss">
// >>> 不管用
.gallery >>> .swiper-container {
  overflow: inherit;
}

.gallery {
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  .gallery-content {
    // background-color: #fff;
  }

  .swiper-img {
    width: 100%;
  }

  .swiper-pagination {
    color: #fff;
    bottom: -1rem;
  }
}
</style>


