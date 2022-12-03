const { createApp } = Vue;
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((sub1, sub2) => sub2.votes - sub1.votes);
    },
  },
};

createApp(upvoteApp).mount('#app');
