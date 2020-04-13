import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Search from "../views/Search.vue"
import Buy from "../views/Buy.vue"

Vue.use(VueRouter);

let routes = [
  { path: '/', component: Home },
  // 分类页
  { path: '/type/:id', component: Home },
  // 搜索页
  { path: '/search/:id', component: Search },
  // 购买页
  { path: '/buy', component: Buy },
  // 默认首页
  { path: '*', redirect: '/' }
]
export default new VueRouter({ routes })