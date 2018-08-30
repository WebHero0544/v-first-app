import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('../views/city/City.vue'),
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../views/detail/Detail.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 此处可以细化，当在切换路由前需要记住滚动位置以便在切回路由时保持在原有的位置。
    // 而此处统一将滚动位置设置为0
    return { x: 0, y: 0 };
  },
});

