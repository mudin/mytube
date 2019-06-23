import commentsJsom from '@/mock/comments.json';
import uuid from '@/utils/uuid.js';

class Comment {
  constructor(comment) {
    this.id = uuid();
    this.comment = comment;
    this.liked = false;
  }

  static fromJSON(raw) {
    const comment = new Comment();
    Object.assign(comment, raw);
    return comment;
  }

  static fromJSONArray(arr) {
    const comments = [];
    arr.forEach(element => {
      comments.push(Comment.fromJSON(element));
    });
    return comments;
  }

  static mockComments() {
    return commentsJsom.data;
  }
}
export default Comment;
