import Vue from 'vue'
import App from './App.vue'
// import 'lib-flexible';
// import 'postcss-pxtorem';
import store from './store/index';
import router from './router/index';
// import './assets/js/rem.js';
import './assets/style/reset.less';
import './assets/iconfont/iconfont.css';
import 'vant/lib/index.css';
import Vant from 'vant';


import { NumberKeyboard } from 'vant';
Vue.use(NumberKeyboard);


Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
