const { createApp } = Vue;
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions,
    };
  },
  template: `
    <div class="section">
      <article class="media">
        <figure class="media-left">
          <img src="/upvote/images/submissions/image-yellow.png" alt="yellow image" class="image is-64x64" />
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong><a href="#" class="has-text-info">Yellow Pail</a><span class="tag is-small">#4</span></strong>
              <br />
              On-demand sand castle construction expertise.
              <br />
              <small class="is-size-7">
                Submitted by:
                <img src="/upvote/images/avatars/daniel.jpg" alt="daniel" class="image is-24x24" />
              </small>
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="icon is-small">
            <i class="fa fa-chevron-up"></i>
            <strong class="has-text-info">10</strong>
          </span>
        </div>
      </article>
    </div>
  `,
};

createApp(upvoteApp).mount('#app');
