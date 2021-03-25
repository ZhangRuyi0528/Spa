export default {
  state: {
    partA: "这是啥",
    page: ''
  },

  mutations: {
    log(state, value) {
        state.page = value;
    //   console.log(value);
    },
  },

  actions: {
    toggleDom(context, tag) {
      // .log(tag, 666, tag.target.innerText)
      context.commit("log", tag.target.innerText);
    },
  },
};
