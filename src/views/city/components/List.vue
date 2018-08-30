<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <h3 class="title border-topbottom">当前城市</h3>
                <div class="content-btn">
                    <div>
                        <span>{{currCity}}</span>
                    </div>
                </div>
            </div>
            <div class="area">
                <h3 class="title border-topbottom">热门城市</h3>
                <div class="content-btn">
                    <div v-for="item of hotCities" :key="item.id">
                        <span @click="onClickCity(item.name)">{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <h3 class="title">{{key}}</h3>
                <div class="content-list">
                    <div @click="onClickCity(inner.name)" class="border-bottom" v-for="inner of item" :key="inner.id">{{inner.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
// mapState用于映射state, mapMutations用于映射mutation
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'CityList',
  props: {
    hotCities: {
      type: Array,
      default: [],
    },
    cities: {
      type: Object,
      default: {},
    },
    letter: String,
  },
  computed: {
    ...mapState({
      currCity: 'city',
    }), // 将state中的city属性映射到computed的currCity中
  },
  methods: {
    onClickCity(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']), // 将所需的mutation映射到methods中
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      this.scroll.scrollToElement(element);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
};
</script>
<style scoped lang="scss">
.border-topbottom {
  &:after,
  &:before {
    border-color: #bbb;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.area {
  .title {
    background-color: #eee;
    padding: 0.16rem;
  }
  .content-btn {
    overflow: hidden;
    > div {
      float: left;
      width: 33.33333333333%;
      padding: 0.16rem;
      > span {
        display: inline-block;
        width: 100%;
        padding: 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.03rem;
        text-align: center;
      }
    }
  }
  .content-list {
    > div {
      padding: 0.16rem;
    }
  }
}
</style>
