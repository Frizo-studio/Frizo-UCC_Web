import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import BootstrapVue from 'bootstrap-vue'
import jquery from "jquery"

// fontawesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faUserCircle, faUserFriends, faUser, faBars, faSearch, faPaperclip, faImage, faPlusSquare, faFileImage, faInfoCircle, faTimesCircle, faMapMarker, faClock, faHeart, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//ElementUI
import ElementUI from 'element-ui';
import '../theme/index.css';

//Croppie 圖片裁減套件
import VueCroppie from 'vue-croppie';
import '../node_modules/croppie/croppie.css' // import the croppie css manually

Vue.use(VueCroppie);
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(jquery);
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faComment, faUserCircle, faUserFriends, faUser, faBars, faSearch, faPaperclip, faImage, faPlusSquare, faFileImage, faInfoCircle, faTimesCircle, faMapMarker, faClock, faHeart, faCalendarAlt)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
