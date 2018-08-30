<template>
    <ul class="list">
        <li 
            v-for="item of letters" 
            :key="item" 
            :ref="item"
            @click="onClick"
            @touchstart.prevent="onTouchstart"
            @touchmove="onTouchmove"
            @touchend="onTouchend"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  computed: {
    letters() {
      return Object.keys(this.cities);
    },
  },
  // 视图更新完成后
  updated() {
    const key = 'A';
    this.startY = this.$refs[key][0].offsetTop;
  },
  methods: {
    onClick(e) {
      this.$emit('letterChange', e.target.innerText);
    },
    onTouchstart(e) {
      this.touchStatus = true;
    },
    onTouchmove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letterChange', this.letters[index]);
          }
        }, 16);
      }
    },
    onTouchend(e) {
      this.touchStatus = false;
    },
  },
};
</script>
<style scoped lang="scss">
.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  > li {
    line-height: 0.4rem;
    text-align: center;
  }
}
</style>
