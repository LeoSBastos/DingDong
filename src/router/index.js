import Vue from "vue";
import VueRouter from "vue-router";

import Blank from "@/views/Blank.vue";
import Blank2 from "@/views/Blank2.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/Blank2", component: Blank2 },
    { path: "/Blank", component: Blank },

    { path:"/", redirect: "/Blank" }
  ]
});
