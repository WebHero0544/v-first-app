<template>
    <div class="icons">

        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-box">
                        <img class="icon-img" :src="item.imgSrc" alt="">
                    </div>
                    <p class="icon-desc">{{item.name}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    dataList: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  computed: {
    pages() {
      const pages = [];

      // 这里ts检测不出来
      this.dataList.forEach((el, index) => {
        const pagesIndex = Math.floor(index / 8);
        let pagesItem = pages[pagesIndex];
        if (!pagesItem) {
          pagesItem = pages[pagesIndex] = [];
        }
        pagesItem.push(el);
      });

      return pages;
    },
  },

  mounted() {
    // console.log(this);
  },
};
</script>
<style scoped lang="scss">
//单位值解释：本项目开发用的设计稿的宽为750（iphone6），移动端开发需要将量取的像素值除以2以使在视网膜屏上的图片保持相对高清，
// 当1rem = 50px时，直接量取的像素值无需再做计算，除以100即可
// 比如量取的像素值为86px转化为rem做单位：86px/2/50 即  86px/100 即 .86rem

// 该class用于固定宽高比（从设计稿中量取，比如宽为750px, 高为375px, 则宽高比为2/1），运用该class的元素不要放置文本节点，而是直接放置元素以作为一个容器
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  overflow: hidden;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon-box {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0.44rem;
}

.icon-img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: #333;
}
</style>