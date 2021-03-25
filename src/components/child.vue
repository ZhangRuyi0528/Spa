<template>
  <div class="wrap-child red" @click="toggle">
    子集元素
    <b>{{ title }}</b>
    <h3>{{ name }}</h3>
    <h4>{{ partA }}</h4>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "child",
  data() {
    return {
      title: "What",
    };
  },

  props: {
    name: {
      type: String,
    },
  },

  computed: {
    ...mapState(["partA"]),
  },

  methods: {
    ...mapActions(["toggleDom"]),

    toggle(e) {
    //   console.log(999, e.target.innerText);
      this.toggleDom(e);
    },
  },
};
</script>

<style lang="scss">
.red {
  color: red;

  h3 {
    color: #4680f5;
  }
}
</style>
