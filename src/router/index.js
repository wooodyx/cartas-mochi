import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'router-active',
  linkExactActiveClass: 'router-active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requiresAuth: false
      },
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      path: '/my-cards',
      name: 'MyCards',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "my-cards" */ '../views/MyCardsView.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: {
        requiresAuth: false
      },
      component: () => import(/* webpackChunkName: "my-cards" */ '../views/admin/AdminView.vue'),
      children: [
        {
          path: '/admin/users',
          name: 'Users',
          component: () =>
            import(/* webpackChunkName: "users" */ '../views/admin/components/UsersComponent.vue')
        },
        {
          path: '/admin/detail/:id',
          name: 'UserDetail',
          component: () =>
            import(
              /* webpackChunkName: "detail" */ '../views/admin/components/DetailUserComponent.vue'
            )
        },
        {
          path: '/admin/create',
          name: 'CreateUser',
          component: () =>
            import(
              /* webpackChunkName: "create" */ '../views/admin/components/CreateUserComponent.vue'
            )
        },
        {
          path: '**',
          redirect: { name: 'Users' }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        requiresAuth: false
      },
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
  ]
})

const handleAuthentication = (to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem('mochi-user'))

  if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'MyCards' })
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }

  next()
}

router.beforeEach(async (to, from, next) => {
  handleAuthentication(to, from, next)
})

export default router
