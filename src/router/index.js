import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/page/layout.vue'

// const home = () =>  import('@/views/page/layout.vue')

Vue.use(VueRouter)
const routes = [{
    path:'/',
    redirect:'/home', 
},{
    path:'/home',
    component: home,
    meta:{
        title:'西湖'
    },
    children:[]
}]

const router = new VueRouter({
    // mode: 'hash',//或者history模式
    // base:'/huxi',
    routes
})

//路由守卫
// router.beforeEach((to,from,next)=>{
//     // console.log('跳转前路由:',to,'跳转后路由',from)
//     next()
// })

export default router