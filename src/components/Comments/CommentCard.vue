<template>
  <div class="comment">
    <el-row>
      <el-col :span="24">
        <div class="avatar">
          <Kaomoji :username="comment.client.name"/>
        </div>
        <div class="right-panel">
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
          <el-row>
            <el-col>
              <el-button class="txt-btn" @click="comment.liked=!comment.liked">
                <svg-icon :icon-class="comment.liked?'liked':'like'"/> 3
              </el-button>
              <el-button class="txt-btn">
                답글
              </el-button>
            </el-col>
          </el-row>
        </div>
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

    .avatar {
      float: left;
    }

    .right-panel {
      display: inline-block;
      margin-left: 10px;
      width: calc(100% - 70px);
    }

    .date {
      color: hsla(0, 0%, 6.7%, 0.6);
      font-size: 0.9em;
      font-weight: 400;
      line-height: 1.8rem;
      text-transform: none;
    }
  }
</style>
