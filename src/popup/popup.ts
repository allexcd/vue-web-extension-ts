import Vue from "vue";
import App from "./App.vue";
import store from "../store";
import router from "./router";

// TODO: enable polyfills
// global.navigator = require("webextension-polyfill");
// Vue.prototype.$browser = global.navigator;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});
