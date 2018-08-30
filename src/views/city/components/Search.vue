<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" placeholder="请输入城市名或拼音">
        </div>
        <div v-show="keyword" class="search-content" ref="searchContent">
            <ul>
                <li @click="onClickCity(item.name)" class="border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
                <li class="border-bottom" v-show="!isHasResult">没有搜索到任何结果!</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      keyword: '',
      timer: null,
      list: [],
    };
  },
  computed: {
    isHasResult() {
      return this.list.length;
    },
  },
  methods: {
    onClickCity(city) {
      this.$store.commit('changeCity', city);  // 用于触发一个mutation
      this.$router.push('/');
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.list = [];
      this.timer = setTimeout(() => {
        const list = [];
        for (const key in this.cities) {
          const item = this.cities[key];
          item.forEach((element) => {
            if (
              element.spell.indexOf(this.keyword) !== -1 ||
              element.name.indexOf(this.keyword) !== -1
            ) {
              list.push(element);
            }
          });
        }
        this.list = list;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.searchContent);
  },
};
</script>
<style scoped lang="scss">
.search {
  height: 0.72rem;
  background-color: #2a9de2;
  padding: 0.05rem 0.1rem;
  > input {
    width: 100%;
    height: 100%;
    border-radius: 0.03rem;
    padding: 0 0.1rem;
    text-align: center;
  }
}

.search-content {
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  > ul > li {
    line-height: 0.48rem;
    padding-left: 0.2rem;
    background-color: #fff;
  }
}
</style>
