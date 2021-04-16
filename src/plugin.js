import VueClock from './Clock.vue';

module.exports = {
  install: function (Vue) {
    Vue.component('vue-clock', VueClock);
  }
};
