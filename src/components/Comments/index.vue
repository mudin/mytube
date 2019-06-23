<template>
  <div id="comments">
    <h3>댓글 27개</h3>
    <Commenter/>
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"/>
  </div>
</template>
<script>
import Comment from '@/model/Comment.js';
import Commenter from './Commenter';
import CommentCard from './CommentCard';

export default {
  name: 'Comments',
  components: {
    Commenter,
    CommentCard
  },
  data() {
    return {
      comments: Comment.mockComments(),
      playerOptions: {
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      }
    };
  }
};
</script>
<style lang="less" scoped>
  // #comments {

  // }
</style>
