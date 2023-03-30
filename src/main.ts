import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import CanvasGraph from "./components/graphing/CanvasGraph.vue";
import ArraySearch from "./components/arrays/Search.vue";
import Arrays from "./components/arrays/Arrays.vue";
import Sorting from "./components/arrays/Sort.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Dijkstra } from "./components/graphing/dijkstra";
import { Prim } from "./components/graphing/prim";
import Graph from "./components/graphing/Graph.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/arrays", component: Arrays },
  {
    path: "/arrays/search",
    component: ArraySearch,
  },
  {
    path: "/arrays/sort",
    component: Sorting,
  },
  { path: "/graph", component: Graph },
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
