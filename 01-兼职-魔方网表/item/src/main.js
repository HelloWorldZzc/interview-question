import Vue from 'vue'
import App from './App.vue'
// 全局引入antd组件与css样式并使用
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 引入vuex中的store
import store from "@/store";
Vue.config.productionTip = false;
Vue.use(Antd);
//路由选项
import VueRouter from "vue-router";
import router from "./router/index"
Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
