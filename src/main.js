import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import vuetify from "./plugins/vuetify";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.use(VueSmoothScroll, {
  duration: 400,
  offset: -80,
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");