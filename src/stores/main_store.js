import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'main',
  state: () => ({
    // counter: 0,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // increment() {
    // this.counter++;
    // },
  },
});
