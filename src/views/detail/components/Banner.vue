<template>
    <div>
        <div class="banner" @click="onOpenGallery()">
            <img src="//img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" alt="">
            <div class="info">
                <div>金海湖风景区(AAAA景区)</div>
                <div>
                    <font-awesome-icon :icon="['fas', 'image']" size="lg" />
                    <span class="num">15</span>
                </div>
            </div>
        </div>
        <FadeAnimation>
          <BaseGallery :imgList="imgList" @close="onCloseGallery()" v-show="openGallery"></BaseGallery>
        </FadeAnimation>
    </div>

</template>

<script>
import BaseGallery from '@/base/gallery/Gallery';
import FadeAnimation from '@/base/fadeAnimation/FadeAnimation';

export default {
  name: 'DetailBanner',
  components: {
    BaseGallery,
    FadeAnimation,
  },
  data() {
    return {
      openGallery: false,
      imgList: [
        'http://img1.qunarzz.com/sight/p0/1607/21/212f9125ce6c5e7f5a.img.jpg_r_800x800_a9c922ca.jpg',
        'http://img1.qunarzz.com/sight/p0/1507/5d/87b21344892ce3493920b8eb46794337.water.jpg_r_800x800_d60d1d3b.jpg',
      ],
    };
  },
  methods: {
    onOpenGallery() {
      this.openGallery = true;
    },
    onCloseGallery() {
      this.openGallery = false;
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  background-color: #eee;
  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.6rem;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
  }
  .num {
    display: inline-block;
    margin-left: 0.06rem;
  }
}
</style>


