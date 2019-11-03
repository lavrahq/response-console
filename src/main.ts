import Vue from "vue";
import Va from "vue-atlas";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";

import "vue-atlas/dist/vue-atlas.css";
import "./assets/tailwind.css";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(Va, "en");

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  i18n,
  render: h => h(App)
}).$mount("#app");
