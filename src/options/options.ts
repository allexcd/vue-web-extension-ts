import Vue from "vue";
import App from "./App.vue";

/**
 * TODO: enable polyfills
 * Using ts generates errors when trying to use the polyfills
 * Investigate further and enable them to use this extension in other browsers
 */
// global.navigator = require("webextension-polyfill");

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
