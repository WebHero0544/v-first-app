<template>
    <header class="header">
        <div class="left">
            <font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
        </div>
        <div class="center">
            <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        
          <div class="right">
            <router-link to="/city">
              <span>{{city}}</span>
              <font-awesome-icon :icon="['fas', 'caret-down']" size="lg" />
            </router-link>
          </div>
        
    </header>
</template>

<script>
// mapState用于映射数据
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['city']),  // 将state中的city属性映射到computed中
  },
};
</script>
<style scoped lang="scss">
//单位值解释：本项目开发用的设计稿的宽为750（iphone6），移动端开发需要将量取的像素值除以2以使在视网膜屏上的图片保持相对高清，
// 当1rem = 50px时，直接量取的像素值无需再做计算，除以100即可
// 比如量取的像素值为86px转化为rem做单位：86px/2/50 即  86px/100 即 .86rem
.header {
  display: flex;
  height: 0.86rem;
  background-color: #2a9de2;
}
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.86rem;
  color: #fff;
}
.center {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.1rem;
  > input {
    width: 100%;
    height: 0.6rem;
    border-radius: 0.04rem;
    text-indent: 0.2rem;
    line-height: 0.6rem;
  }
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1.2rem;
  padding: 0 .1rem;
  >a {
    color: #fff;
  }
  span {
    display: inline-block;
    margin-right: .05rem;
  }
}
</style>