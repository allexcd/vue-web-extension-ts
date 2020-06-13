import Vue from "vue";
import App from "./App.vue";
import store from "../store";
import router from "./router";

/** ELEMENTUI **/

// Importing styles here as using the following line in .babelrc doesn't apply the lib styles
// "styleLibraryName": "element-theme-default"
// Issue to be followed: https://github.com/ElementUI/babel-plugin-component/issues/17
import "element-ui/lib/theme-chalk/index.css";

/**
 * Use the commented lines to load all library components at once
 * Otherwise, keep them commented and import the components as they are required
 **/
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

/**
 * Add required components here
 */
import { Tabs, TabPane } from "element-ui";
Vue.use(Tabs);
Vue.use(TabPane);

/** END ELEMENTUI **/

/**
 * TODO: enable polyfills
 * Using ts generates errors when trying to use the polyfills
 * Investigate further and enable them to use this extension in other browsers
 */
// global.navigator = require("webextension-polyfill");
// Vue.prototype.$browser = global.navigator;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
