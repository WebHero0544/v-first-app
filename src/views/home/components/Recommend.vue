<template>
    <div class="recommend">

        <h3 class="title">猜你喜欢</h3>
            
        <ul>
            <!-- tag="li"会将默认的a标签转化为li -->
            <router-link class="item" v-for="item of dataList" :key="item.id" tag="li" :to="'/detail/'+item.id">
                <div class="left">
                    <img :src="item.imgSrc" alt="">
                </div>
                <div class="right">
                    <div class="info1">{{item.title}}</div>
                    <div class="info2">
                        <div>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star']"/>
                            <font-awesome-icon :icon="['fas', 'star-half-alt']"/>
                        </div>
                        <span>{{item.commentsNumber}}条评论</span>
                    </div>
                    <div class="info3">
                        <span><i>￥{{item.price}}</i>起</span>
                        <span>{{item.address}}</span>
                    </div>
                </div>
            </router-link>
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
  display: flex;
  padding: 0.2rem 0;
}
.left {
  padding-left: 0.1rem;
  width: 2.1rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 2rem;
  > img {
    width: 2rem;
  }
}
.right {
  flex: 1;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info1 {
}
.info2 {
  display: flex;
  align-items: center;
  > div {
    margin-right: 0.2rem;
    color: orange;
  }
}
.info3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 0.36rem;
    color: orange;
  }
}
</style>