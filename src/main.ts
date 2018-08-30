import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const FastClick = require('fastclick');

import './assets/styles/reset.scss';
import './assets/styles/border.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
// 使用实例：<font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
import { faAngleLeft, faCaretDown, faStar, faStarHalfAlt, faImage, faAtlas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';




FastClick.attach(document.body);

library.add(faAngleLeft, faCaretDown, faStar, faStarHalfAlt, faImage, faAtlas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueAwesomeSwiper /* { default global options } */);









Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


