// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import RegisterPage from '../components/RegisterPage.vue';
import LoginPage from '../components/LoginPage.vue';
import TopicListPage from '../components/TopicListPage.vue';
import TopicDetailPage from '../components/TopicDetailPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/topics', component: TopicListPage },
  { path: '/topics/:id', name: 'TopicDetail', component: TopicDetailPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
