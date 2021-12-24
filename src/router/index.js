import { createRouter, createWebHashHistory } from 'vue-router'
import StudentList from '../views/StudentList.vue'
import StudentDetails from "../views/StudentDetails.vue";

const routes = [
  {
    path: '/',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/student-details/:id',
    name: 'StudentDetails',
    component: StudentDetails
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
