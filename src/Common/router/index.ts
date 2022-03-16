import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import searchRoutes from "@/modules/Search/routes/searchRoutes";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/characters',
    },
    ...searchRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
