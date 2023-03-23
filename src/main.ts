import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import BinarySearch from "./components/BinarySearch.vue";
import CanvasGraph from "./components/graphing/CanvasGraph.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Dijkstra } from "./components/graphing/dijkstra";
import { Prim } from "./components/graphing/prim";

const routes = [
  { path: "/", component: Home },
  { path: "/binary-search", component: BinarySearch },
  {
    path: "/graph/dijkstra-algo",
    component: CanvasGraph,
    props: () => ({ graph: new Dijkstra() }),
  },
  {
    path: "/graph/prim-algo",
    component: CanvasGraph,
    props: () => ({ graph: new Prim() }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
