import { createRouter, createWebHashHistory } from 'vue-router/dist/vue-router.esm-bundler'
import { HomeScreen, ErrorScreen, SecondScreen } from '@/renderer/screens'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeScreen,
      meta: {
        titleKey: 'title.main'
      }
    },
    {
      path: '/second',
      component: SecondScreen,
      meta: {
        titleKey: 'title.second'
      }
    },
    {
      path: '/error',
      component: ErrorScreen,
      meta: {
        titleKey: 'title.error'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
