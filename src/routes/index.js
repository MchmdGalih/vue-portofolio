import { createMemoryHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
