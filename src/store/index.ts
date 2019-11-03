import Vue from "vue";
import Vuex from "vuex";

import { RootState } from "@/types/store";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {}
});
