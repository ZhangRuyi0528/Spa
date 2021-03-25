import Vue from "vue";
import App from "./App.vue";
import Store from "./lib/store";
import Vuex from "vuex";
import Router from "vue-router";
import routerConfig from "./lib/router";

Vue.use(Vuex);
Vue.use(Router);

const app = 'other';
const router = new Router(routerConfig(app));
const store = new Vuex.Store(Store);
Vue.config.productionTip = false;
console.log(99199, routerConfig)
new Vue({
  router,
  store,
  render: (h) => {
    console.log(h);
    return <App belongs={ app } />;
  },
}).$mount("#BD");

