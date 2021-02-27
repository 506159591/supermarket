import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = ()=> import("views/home/Home")
const Shopcart = ()=> import("views/shopcart/Shopcart")
const Category = ()=> import("views/category/Category")
const Profile = ()=> import("views/profile/Profile")
const Detail = ()=> import("views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
