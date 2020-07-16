import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import Paginate from 'vuejs-paginate';
import App from './App.vue';
import router from './router';
import 'mdbvue/lib/mdbvue.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.component('paginate', Paginate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
