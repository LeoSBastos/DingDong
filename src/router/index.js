import Vue from "vue";
import VueRouter from "vue-router";

import Pedido from "@/views/Pedido.vue";
import Estoque from "@/views/Estoque.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/Estoque", component: Estoque },
        { path: "/Pedido", component: Pedido },

        { path: "/", redirect: "/Pedido" }
    ]
});
