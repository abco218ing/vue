import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Layout from "@/layout/Index.vue";
import Welcome from "@/views/Welcome.vue";
import Lianxi from "@/views/Lianxi.vue";

import Users from "@/views/users/Index.vue";
import UsersHistory from "@/views/users/History.vue";
import UsersCreare from "@/views/users/Creare.vue";

import Roles from "@/views/roles/Index.vue";
import RolesCreate from "@/views/roles/Create.vue";

import Auths from "@/views/auths/Index.vue";
import AuthsCreare from "@/views/auths/Creare.vue";

import Cates from "@/views/cates/Index.vue";

import Goods from "@/views/goods/Index.vue";

import Stores from "@/views/stores/Index.vue";
// import StoresCreate from "@/views/stores/Create.vue";

import Orders from "@/views/orders/Index.vue";
import OrdersTotal from "@/views/orders/Total.vue";

import Login from "@/views/login/Index.vue";

Vue.use(VueRouter);

// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch((err) => err);
// };

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    redirect:'/login',
    component: Layout,
    // 声明子组件
    children: [
      {
        path: "welcome",
        component: Welcome,
        meta: { name1: "后台首页", name2: "首页欢迎" },
      },
      { path: "lianxi", component: Lianxi },
      {
        path: "users/History",
        component: UsersHistory,
        meta: { name1: "后台首页", name2: "访客记录" },
      },
      //用户
      { path: "users", component: Users ,
      meta: { name1: "用户管理", name2: "用户列表" },},
      { path: "users/Create", component: UsersCreare
    ,  meta: { name1: "用户管理", name2: "用户创建" }, },
      //角色
      { path: "roles", component: Roles ,  meta: { name1: "角色管理", name2: "角色列表" },},
      { path: "roles/Create", component: RolesCreate ,  meta: { name1: "角色管理", name2: "角色创建" },},
      //权限
      { path: "auths", component: Auths ,  meta: { name1: "权限管理", name2: "角色列表" },},
      { path: "auths/Creare", component: AuthsCreare ,  meta: { name1: "权限管理", name2: "角色创建" },},
      //分类
      { path: "cates", component: Cates ,  meta: { name1: "分类管理", name2: "分类列表" },},
      //商品
      { path: "goods", component: Goods ,  meta: { name1: "门店商品", name2: "商品列表" },},
      //门店管理
      { path: "stores", component: Stores ,  meta: { name1: "门店管理", name2: "门店列表" },},
      // { path: "stores/create", component: StoresCreate , 
      // //  meta: { name1: "门店管理", name2: "门店创建" },
      // },
      //订单
      { path: "orders", component: Orders ,  meta: { name1: "订单管理", name2: "订单列表" },},
      { path: "orders/total", component: OrdersTotal ,  meta: { name1: "订单管理", name2: "订单统计" },},
    ],
  },
  { path: "/login", component: Login },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
