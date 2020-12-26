import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateUser from '../components/CreateUser.vue'
import EditUser from '../components/EditUser.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component:Login
  }
  ,{
    path: '/home',
    name: 'Home',
    component: Home,
    component:()=>import('../views/Home')
  },
  {
    path: '/home/createuser',
    name: 'CreateUser',
    component:CreateUser,
   component: () => import( '../components/CreateUser')
  },{
    path: '/home/edituser/:userId',
    name: 'EditUser',
    component:EditUser,
    props:true,
    component: () => import( '../components/EditUser')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
