import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ServicesView from '@/views/ServicesView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
