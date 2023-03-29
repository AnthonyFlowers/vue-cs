import { createApp } from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import CanvasGraph from "./components/graphing/CanvasGraph.vue";
import BinarySearch from "./components/searching/BinarySearch.vue";
import { default as LinearSearchView } from "./components/searching/LinearSearch.vue";
import Search from "./components/searching/Search.vue";
import { createRouter, createWebHistory } from "vue-router";
import { Dijkstra } from "./components/graphing/dijkstra";
import { Prim } from "./components/graphing/prim";
import Graph from "./components/graphing/Graph.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  {
    path: "/search/linear",
    component: LinearSearchView,
  },
  {
    path: "/search/binary",
    component: BinarySearch,
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
