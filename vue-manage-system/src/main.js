import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局配置
import "./assets/scss/reset.scss";
import http from "./api/config";
import "./mock";

//第三方包element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");