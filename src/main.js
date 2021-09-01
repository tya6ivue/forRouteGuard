import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "../src/routes";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
