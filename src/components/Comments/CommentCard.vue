<template>
  <div class="comment">
    <el-row>
      <el-col :span="2">
        <Kaomoji :username="comment.client.name"/>
      </el-col>
      <el-col :span="22">
        <el-row>
          <el-col>
            <span class="date">{{comment.updated_at | moment("from", "now")}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            {{comment.comment}}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Comment from '@/model/Comment';
import Kaomoji from '@/components/Kaomoji';

export default {
  name: 'CommentCard',
  components: {
    Kaomoji
  },
  props: {
    comment: {
      type: [Comment, Object],
      default() {
        return null;
      }
    }
  }
};
</script>
<style lang="less" scoped>
  .comment {
    margin: 30px 0;

    .date {
      color: hsla(0, 0%, 6.7%, 0.6);
      font-size: 0.9em;
      font-weight: 400;
      line-height: 1.8rem;
      text-transform: none;
    }
  }
</style>
