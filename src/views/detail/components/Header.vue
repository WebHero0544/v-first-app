<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="isShowAbs">
            <font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
        </router-link>
        <router-link tag="div" to="/" class="header-fixed" v-show="!isShowAbs" :style="opacityStyle">
            <div class="edge">
                <font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
            </div>
            <div class="title">
                金海湖风景区(AAAA景区)
            </div>
            <div class="edge"></div>
        </router-link>
    </div>  
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      isShowAbs: true, // abs and fied 切换显示
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    onWinScroll(e) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 60) {
        this.isShowAbs = false;
        const opacity = scrollTop / 160;
        this.opacityStyle.opacity = opacity > 1 ? 1 : opacity;
      } else {
        this.isShowAbs = true;
      }
    },
  },
  // keep-alive组件激活时调用(组件重新显示时触发)
  activated() {
    // 此处是多余的，因为vue-router已经提供了相关配置，可以手动在路由中配置，以实现功能
    // window.scrollTo(0, 0);
    // this.isShowAbs = true;

    // 绑定全局事件
    window.addEventListener('scroll', this.onWinScroll);
  },
  // keep-alive组件激活时调用(组件隐藏时触发)
  deactivated() {
    // 解绑全局事件
    window.removeEventListener('scroll', this.onWinScroll);
  },
};
</script>

<style lang="scss" scoped>
.header-abs {
  z-index: 100;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.6rem;
  height: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  font-size: 0.32rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-fixed {
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.86rem;
  background-color: #00bcd4;
  display: flex;
  color: #fff;
  .edge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.86rem;
    height: 100%;
    font-size: 0.32rem;
  }
  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>



