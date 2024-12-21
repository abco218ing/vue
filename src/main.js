import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 配置 ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//全局组件
import qfFrom from "@/components/qf-from/Index.vue";
import qfCard from "@/components/qf-card/Index.vue";
import qfTable from "@/components/qf-table/Index.vue";
Vue.use(function () {
  Vue.component("qfFrom", qfFrom);
  Vue.component("qfCard", qfCard);
  Vue.component("qfTable", qfTable);
});

//动画特效
import animate from "animate.css";
Vue.use(animate);
//粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//全局混入& 过滤& 自定义指令
import "@/utils/mixins.js";
import "@/utils/filters.js";
import "@/utils/directives.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
