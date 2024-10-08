import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // Public Routes
  {
    path: "/layout",
    name: "Layout",
    redirect: '/',
    component: () => import("../views/Layout.vue"),
    children: [
      {
        path: '/',
        name: 'Welcome',
        component: () => import("../views/Welcome.vue")
      },
      {
        path: '/about',
        name: 'About',
        component: () => import("../views/About.vue")
      },
      {
        path: '/pricing',
        name: 'Pricing',
        component: () => import("../views/Pricing.vue")
      },
      {
        path: '/gallery',
        name: 'Gallery',
        component: () => import("../views/Gallery.vue")
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import("../views/Contact.vue")
      },
      {
        path: '/:catchAll(.*)',
        redirect: '/'
      }
    ]
  },
];

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

export default router;