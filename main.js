const { createApp } = Vue;
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
};

createApp(upvoteApp).mount('#app');
