<template>
  <div class="comment">
    <el-row>
      <el-col :span="2">
        <Kaomoji :username="comment.client.name"/>
      </el-col>
      <el-col :span="22">
        <el-row>
          <el-col>
            <span>{{comment.updated_at}}</span>
          </el-col>
        </el-row>

        {{comment.comment}}
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Comment from '@/model/Comment';
import Kaomoji from '@/components/Kaomoji';

export default {
  name: 'CommentThread',
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
  }
</style>
