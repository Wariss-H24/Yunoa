import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import LanguageView from '@/Views/LanguageView.vue'
import AlertView from '@/views/AlertView.vue'
import SearchView from '@/Views/SearchView.vue'
import ProfilView from '@/Views/ProfilView.vue'

//aside
import LoginView from '@/Views/UsersAcces/LoginView.vue'
import SignUpViews from '@/Views/UsersAcces/signUpViews.vue'
import ForgotpassWordView from '@/Views/UsersAcces/ForgotpassWordView.vue'
import MentorCoursesComponent from '@/Couses/MentorCoursesComponent.vue'
import CreateCourseComponent from '@/Couses/CreateCourseComponent.vue'
import CourseComponent from '@/Couses/CourseComponent.vue'
import Studentlayout from '@/Layout/Studentlayout.vue'
import LastDashboardLayout from '@/Layout/LastDashboardLayout.vue'
import SecondeDashboardLayout from '@/Layout/SecondeDashboardLayout.vue'
import FisrteDashboardLayout from '@/Layout/FisrteDashboardLayout.vue'
// import AsideBArComponet from '@/Componet/AsideBArComponet.vue'

const routes = [
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Language',
    name: 'Language',
    component: LanguageView,
  },
  {
    path: '/Alert',
    name: 'Alert',
    component: AlertView,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: ProfilView,
  },

  //Asidebar
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpViews,
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: ForgotpassWordView,
  },
  {
    path: '/seconddashbord',
    name: 'seconddashbord',
    component: SecondeDashboardLayout,
  },
  {
    path: '/firstdashbord',
    name: 'firstdashbord',
    component: FisrteDashboardLayout,
  },
  {
    path: '/lastdashbord',
    name: 'lastdashbord',
    component: LastDashboardLayout,
  },
  {
    path: '/Students',
    name: 'Students',
    component: Studentlayout,
  },
  {
    path: '/coures',
    name: 'coures',
    component: CourseComponent,
  },
  {
    path: '/creatcours',
    name: 'creatcours',
    component: CreateCourseComponent,
  },
  {
    path: '/mentor',
    name: 'mentor',
    component: MentorCoursesComponent,
  },
  // {
  //   path: '/AsideBAr',
  //   name: 'AsideBAr',
  //   component: AsideBArComponet,
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
