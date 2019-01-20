import NotFound from "/srv/dev-disk-by-label-NAS15T2017/code/k/test/g3/node_modules/gridsome/app/pages/404.vue"

export const routes = [
  {
    name: "projects",
    path: "/projects",
    component: () => import(/* webpackChunkName: "component--projects" */ "~/pages/Projects/index.vue"),
    meta: { data: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import(/* webpackChunkName: "component--contact" */ "~/pages/Contact.vue")
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  },
  {
    name: "projectInfo",
    path: "/project/:slug",
    component: () => import(/* webpackChunkName: "component--project-info" */ "~/templates/ProjectInfo.vue"),
    meta: { data: true }
  },
  {
    name: "blogPost",
    path: "/post/:slug",
    component: () => import(/* webpackChunkName: "component--blog-post" */ "~/templates/BlogPost.vue"),
    meta: { data: true }
  }
]

export { NotFound }

