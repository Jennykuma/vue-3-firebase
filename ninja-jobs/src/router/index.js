import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // Function that fires when the user visits this route
    // Import the specific component
    // Reduces inital loading time!
    component: () => import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs', // old path
    redirect: '/jobs' // redirects to this path
  },
  // catchall 404 ----v (has to be specific like this)
  {
    path: '/:catchAll(.*)', // catch any route that is not caught by those listed above
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // use the web history api in the browser to go back to previous routes (forward + back)
  routes
})

export default router
