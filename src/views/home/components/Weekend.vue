<template>
    <div class="recommend">

        <h3 class="title">周末去哪儿</h3>
            
        <ul>
            <li class="item" v-for="item of dataList" :key="item.id">
                <div class="top">
                    <img :src="item.imgSrc" alt="">
                </div>
                <div class="bottom">
                    <div class="info1">{{item.title}}</div>
                    <div class="info2">{{item.subTitle}}</div>
                </div>
            </li>
        </ul>
        
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
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
//单位值解释：本项目开发用的设计稿的宽为750（iphone6），移动端开发需要将量取的像素值除以2以使在视网膜屏上的图片保持相对高清，
// 当1rem = 50px时，直接量取的像素值无需再做计算，除以100即可
// 比如量取的像素值为86px转化为rem做单位：86px/2/50 即  86px/100 即 .86rem

// 该class用于固定宽高比（从设计稿中量取，比如宽为750px, 高为375px, 则宽高比为2/1），运用该class的元素不要放置文本节点，而是直接放置元素以作为一个容器

.recommend {
}
.title {
  padding: 0.2rem;
  background-color: #eee;
}

.item {
}

.top {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.088000000000004%;
  background-color: #ccc;
}

.bottom {
}

.info1 {
  padding: 0.2rem 0.1rem 0.1rem;
}

.info2 {
  font-size: 0.24rem;
  padding: 0.1rem 0.1rem 0.2rem;
}
</style>