import Vue from 'vue';
import VueVideoPlayer from 'vue-video-player';
import App from './App.vue';
import store from './store';
import './plugins/element';
import router from './router';

import './icons'; // icon

// require videojs style
import 'video.js/dist/video-js.css';

Vue.config.productionTip = false;
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
