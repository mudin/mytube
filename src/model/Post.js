
import postJson from '@/mock/post.json';

class Post {
  constructor() {
    this.ready = false;
    // eslint-disable-next-line no-useless-escape
    this.videoUrl = 'https:\/\/doc-0o-2g-docs.googleusercontent.com\/docs\/securesc\/ha0ro937gcuc7l7deffksulhg5h7mbp1\/6cn2ailu7bpaoj5cjeiim2o3s9dh3mrk\/1561284000000\/04256954806907666147\/*\/1QSzx6F237xXKsLc16PUmlcDpqdLPohUS?e=download';
  }

  static fromJSON(rawPost) {
    const post = new Post();
    Object.assign(post, rawPost);
    return post;
  }

  static mockPost() {
    return Post.fromJSON(postJson);
  }
}

export default Post;
