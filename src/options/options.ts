import Vue from "vue";
import App from "./App.vue";

// TODO: enable polyfills
// global.navigator = require("webextension-polyfill");

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App)
});
