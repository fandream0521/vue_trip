import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "home" */"@/views/home/Home.vue")
  },
  {
    path: "/favor",
    component: () => import(/* webpackChunkName: "favor" */"@/views/favor/Favor.vue")
  },
  {
    path: "/order",
    component: () => import(/* webpackChunkName: "order" */"@/views/order/Order.vue")
  },
  {
    path: "/message",
    component: () => import(/* webpackChunkName: "message" */"@/views/message/Message.vue")
  },
  {
    path: "/city",
    component: () => import(/* webpackChunkName: "city" */"@/views/city/City.vue"),
    meta: {
      tabBarHidden: true
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
