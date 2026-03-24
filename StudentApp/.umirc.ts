import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/students", component: 'students' },
    { path: "/about", component: "about" },
    { path: "/feedback", component: "feedback" },
  ],
  npmClient: 'npm',
});
