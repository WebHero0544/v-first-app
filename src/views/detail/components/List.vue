<template>
    <div class="list">
        <div v-for="(item, index) of list" :key="index">
            <div class="item border-bottom">
                <span>
                    <font-awesome-icon :icon="['fas', 'atlas']" size="lg" />
                </span>
                <span>{{item.title}}</span>
            </div>
            <div v-if="item.children" class="children">
                <DetaiList :list="item.children"></DetaiList>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'DetaiList', // 该名称在此组件是必须的,因为此组件是递归组件
  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            title: '',
            children: [
              {
                title: '',
              },
            ],
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>

.item {
    height: .8rem;
    display: flex;
    align-items: center;
    padding-left:.2rem;
    >span {
        display: inline-block;
        padding-right: .1rem;
    }
    >span:first-child {
        color: orange;
    }
}

.children {
    padding-left: .2rem;
}


</style>


