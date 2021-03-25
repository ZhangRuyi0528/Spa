import Child from "../components/child.vue";
import Foo from "../components/foo.vue";
import HelloWorld from "../components/HelloWorld.vue";
import NotFound from "../common/Error";

// 2. 定义路由
export const routes = [
  {
    path: "/",
    props: () => {
      return {
        msg: "Welcome to Your Vue.js App",
      };
    },
    component: HelloWorld,
  },
  { path: "/foo", component: Foo },
  {
    path: "/pages",
    props: () => {
      return {
        name: "zhe shi child",
      };
    },
    component: Child,
  },
  {
    path: "/part/:appId",
    props: (params) => {
      const {
        params: { appId },
      } = params;
      // console.log(999, params, appId);
      return {
        name: "这是" + appId,
      };
    },
    component: Child,
  },
  {
    path: "*",
    props: (params) => {
      console.log(params, 88);
      return {
        name: "404",
      };
    },
    component: NotFound,
  },
  // {
  //   path: "*",
  //   props: () => {
  //     return {
  //       name: "zhe shi child",
  //     };
  //   },
  //   redirect: "/pages",
  // },
];
export default function (pathname) {
  return {
    routes,
    mode: "history",
    base: '/' + pathname,
  }
}
