<template>
  <keep-alive exclude="Detail">
      <router-view/>
  </keep-alive>
</template>

<script>
 // keep-alive 用于缓存，以提升性能, 但在需要重新ajax请求时，需要借助组件的actived钩子函数
export default {
  name: 'App',
};
</script>
