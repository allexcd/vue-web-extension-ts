import store from "./store";
global.navigator = require("webextension-polyfill");

alert(`Hello ${store.getters.foo}!`);
