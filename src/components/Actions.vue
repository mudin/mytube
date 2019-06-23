<template>
  <div class="actions">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="18">
        <h3 class="title">
          {{post.videoName}}
        </h3>
      </el-col>
      <el-col :span="4" :xs="5">
        <span class="date">
          {{post.createdAt}}
        </span>
      </el-col>
    </el-row>

    <el-row type="flex" align="middle">
      <el-col :span="10" style="text-align:cehnter">
        <span>
          <i class="el-icon-view"/>
          <span class='hidden-xs-only'>
            조회수 138회
          </span>
          <span class='hidden-sm-and-up'>
            138
          </span>
        </span>
      </el-col>
      <el-col :span="18">
        <el-row type="flex" align="middle" justify="end">
          <el-col style="text-align:right">
            <el-button class="txt-btn" @click="toggleLike">
              <svg-icon :icon-class="liked?'liked':'like'"/> 54
            </el-button>
            <el-button class="comment-btn" type="text">
              <i class="el-icon-chat-square" /> 27
            </el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-divider></el-divider>
  </div>
</template>
<script>
import Post from '@/model/Post.js';

export default {
  name: 'Actions',
  data() {
    return {
      post: Post.mockPost(),
      liked: false
    };
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
      if (!this.liked) return;
      this.$message('You liked this video!');
    }
  }
};
</script>

<style lang="less" scoped>

@import '~element-ui/lib/theme-chalk/display.css';

.actions {

  // .title {
  //   // font-weight: 500;
  // }

  .date {
    color: hsla(0%,0%,6.7%,0.6);
    font-size: 0.9em;
    font-weight: 400;
    line-height: 1.8rem;
    text-transform: none;
    float: right;
  }

  .svg-icon {
    height: 1.2em;
    width: 1.2em;
  }

  .comment-btn {
    color: inherit;
  }
}
</style>

<style lang="less">
  .txt-btn {
    border: none;
    background: none!important;
    padding-left: 0;
    padding-right: 0;

    &:focus{
      color: inherit;
    }
  }
</style>
