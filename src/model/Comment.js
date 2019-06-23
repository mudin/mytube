import comments from '@/mock/comments.json';
import uuid from '@/utils/uuid.js';

class Comment {
  constructor(comment) {
    this.id = uuid();
    this.comment = comment;
  }

  static mockComments() {
    return comments.data;
  }
}
export default Comment;
