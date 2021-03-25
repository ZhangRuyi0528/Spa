<template>
  <div id="app">
    <div class="item" v-for="item in items" :key="item.name">
      <a :href="item.url">
        {{ item.name }}
      </a>
    </div>
    <hr/>
    <div>
      归属{{belongs}}模块
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view />
    <!-- <Child
      name="child"
    /> -->
  </div>
</template>

<script>
// import Child from './components/child.vue';
import { routes } from "./lib/router.js";

export default {
  name: "App",

  props: {
    belongs: {
      type: String,
    }
  },

  computed: {
    items() {
      console.log(99199, routes, this);
      return (routes || []).map((item) => {
        return {
          url: item.path,
          name: item.path,
        };
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
