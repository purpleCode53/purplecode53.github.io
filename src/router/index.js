import { createWebHistory, createRouter } from "vue-router";
import Main from "./views/Main.vue";
import PostContent from "./views/PostContent.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/:title", // :를 이용해 동적으로 바뀌는 path지정 가능
    name: "PostContent",
    component: PostContent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;