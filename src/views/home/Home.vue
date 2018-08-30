<template>
    <div class="home">
      <HomeHeader></HomeHeader>
      <HomeSwiper :dataList="swiper"></HomeSwiper>
      <HomeIcons :dataList="icons"></HomeIcons>
      <HomeRecommend :dataList="recommend"></HomeRecommend>
      <HomeWeekend :dataList="weekend"></HomeWeekend>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

import HomeHeader from '@/views/home/components/Header.vue'; // @ is an alias to /src
import HomeSwiper from '@/views/home/components/Swiper.vue'; // @ is an alias to /src
import HomeIcons from '@/views/home/components/Icons.vue'; // @ is an alias to /src
import HomeRecommend from '@/views/home/components/Recommend.vue'; // @ is an alias to /src
import HomeWeekend from '@/views/home/components/Weekend.vue'; // @ is an alias to /src

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  computed: {
    ...mapState(['city']),
  },
  data() {
    return {
      swiper: [],
      icons: [],
      recommend: [],
      weekend: [],
      lastCity: '', // 存储上一个城市，用于判断与当前城市是否相等，以决定是否重新进行ajax请求
    };
  },

  methods: {
    getHomeData() {
      axios.get('/api/home.json?city=' + this.city).then(
        (res) => {
          const coreData = res.data;
          this.swiper = coreData.data.swiper;
          this.icons = coreData.data.icons;
          this.recommend = coreData.data.recommend;
          this.weekend = coreData.data.weekend;
        },
        (err) => {
          window.console.error(err);
        },
      );
    },
  },

  mounted() {
    this.lastCity = this.city;
    this.getHomeData();
  },

  // 当路由router-link的外层使用了keep-alive时该钩子有效
  activated() {
    // 当城市改变时重新请求ajax
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeData();
    }
  },
};
</script>
