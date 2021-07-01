import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, JumbotronPlugin, BJumbotron  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(JumbotronPlugin)

Vue.component('b-jumbotron', BJumbotron)

Vue.config.productionTip = false

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
