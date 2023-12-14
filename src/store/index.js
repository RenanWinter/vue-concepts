import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist';
import users from "./modules/users";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,

  })

export default createStore({
  state: {
    currentPage: "Home",
  },
  modules: {
    users,
  },
  plugins: [vuexLocal.plugin],
  strict: true
});
