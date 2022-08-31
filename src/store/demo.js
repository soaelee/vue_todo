import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export const store = new VueX.Store({
  state: {
    price: 100
  },
  getters: {
    originalPrice(state) {
      return state.price;
    },
    doublePrice(state) {
      return state.price * 2;
    },
    triplePrice(state) {
      return state.price * 3;
    }
  }
});
