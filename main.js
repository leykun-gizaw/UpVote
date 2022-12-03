const { createApp } = Vue;
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  methods: {
    upVote(submission) {
      const sub = this.submissions.find((s) => s === submission);
      sub.votes++;
    },
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((sub1, sub2) => sub2.votes - sub1.votes);
    },
  },
};

createApp(upvoteApp).mount('#app');
