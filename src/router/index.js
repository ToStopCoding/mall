import Vue from "vue";
import Router from "vue-router"

Vue.use(Router)


const HomeMall = () =>
    import ('../views/homemall/HomeMall.vue')
const CategoryMall = () =>
    import ('../views/categorymall/CategoryMall.vue')
const CartMall = () =>
    import ('../views/cartmall/CartMall.vue')
const ProfileMall = () =>
    import ('../views/profilemall/ProfileMall.vue')

const routes = [{
    path: '/',
    redirect: '/homemall'
}, {
    path: '/homemall',
    component: HomeMall
}, {
    path: '/categorymall',
    component: CategoryMall
}, {
    path: '/cartmall',
    component: CartMall
}, {
    path: '/profilemall',
    component: ProfileMall
}]

const router = new Router({
    routes,
    mode: "history"
})

export default router