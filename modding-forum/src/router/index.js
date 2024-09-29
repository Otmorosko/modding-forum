import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';

// Check if user is logged in
function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}

const routes = [
  { path: '/', component: isAuthenticated() ? HomePage : LandingPage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/home', component: HomePage, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router;
