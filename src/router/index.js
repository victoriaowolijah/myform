import Vue from 'vue'
import VueRouter from 'vue-router'
import  TestPage from '../views/TestPage.vue'
import  ContactForm from '../views/ContactForm.vue'
import  UserDetail from '../views/UserDetail.vue'
import  DataPage from '../views/DataPage.vue'

Vue.use(VueRouter)

const routes =[
    {
        path: '/user',
        name: 'UserDetail',
        component: UserDetail
      },

    {
        path: '/create',
        name: 'contact',
        component: ContactForm
      },
        
    {
        path: '/test',
        name: 'TestPage',
        component: TestPage
      },

    {
        path: '/',
        name: 'data',
        component: DataPage
      }  
]

const router = new VueRouter({
    routes
  })
  export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'TestPage',
//       component: TestPage
//     }
//   ]
// })
