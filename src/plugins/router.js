import Vue from 'vue'
import VueRouter from 'vue-router'
import Moment from '../components/Moment.vue'
import Home from '../components/Home.vue'
import PublicHome from '../components/PublicHome.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
              // 当 /user/:id/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: '/user/:id',
              component: PublicHome
            },
            {
              // 当 /user/:id/posts 匹配成功
              // UserPosts 会被渲染在 User 的 <router-view> 中
              path: '/moment/:momentId',
              component: Moment
            }
          ]
    }
    // ,
    // {
    //     path:"/home",
    //     name: 'home',
    //     component: Home
    // },
    // {
    //     path:"/home/user/:id",
    //     component: Home
    // },
    // {
    //     path:"/home/moment/:momentId",
    //     component: Comment
    // }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  export default router;