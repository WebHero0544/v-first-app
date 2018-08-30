<template>
    <div>
        <DetailHeader></DetailHeader>
        <DetailBanner></DetailBanner>
        <DetaiList :list="list"></DetaiList>
    </div>
</template>

<script>
import axios from 'axios';
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetaiList from './components/List';
export default {
  name: 'Detail',  // 此name是必须的，因为该组件没有使用缓存，已在keep-alive中排除了
  data() {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人票三馆票',
              children: [
                {
                  title: '成人票三馆票--one',
                },
                {
                  title: '成人票三馆票--two',
                },
                {
                  title: '成人票三馆票--three',
                },
              ],
            },
            {
              title: '成人五馆票',
              children: [
                {
                  title: '成人票五馆票--one',
                },
                {
                  title: '成人票五馆票--two',
                },
                {
                  title: '成人票五馆票--three',
                },
              ],
            },
          ],
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生票三馆票',
            },
            {
              title: '学生票五馆票',
            },
          ],
        },
        {
          title: '儿童票',
          children: [
            {
              title: '儿童票三馆票',
            },
            {
              title: '儿童票五馆票',
            },
          ],
        },
      ],
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetaiList,
  },
  methods: {
    getDetailInfo() {
        axios.get('/api/detail.json', {
            params: {
                id: this.$route.params.id,
            },
        });
    },
  },
  mounted() {
    // 该处ajax请求由于该组件排除了缓存，所以就不需要在用activated钩子做额外的处理了。
    // 由于时间问题，这里只写了获取数据的方式，将数据传递到子组件和mock所需数据并没有写
    this.getDetailInfo();
  },
};
</script>

<style scoped lang="scss">
</style>


