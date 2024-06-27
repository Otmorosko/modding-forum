import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import UserProfilePage from '../components/UserProfilePage.vue';
import TopicListPage from '../components/TopicListPage.vue';
import TopicDetailPage from '../components/TopicDetailPage.vue';
import ChatPage from '../components/ChatPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: UserProfilePage },
  { path: '/topics', component: TopicListPage },
  { path: '/topics/:id', component: TopicDetailPage },
  { path: '/chat', component: ChatPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
