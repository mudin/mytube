<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col>
        <Kaomoji :username="post.clientName"/>
        <el-input
          class="comment-input"
          type="text"
          placeholder="공개 댓글 추가..."
          @keydown.enter="handleEnterPress"
          @focus="onFocused = true"
          @blur="onFocused = false"
          v-model="rawComment">
        </el-input>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="end" align="middle" v-if="rawComment || onFocused">
      <el-col style="text-align:right">
        <el-button @click="rawComment=''">
          취소
        </el-button>
        <el-button
          type="primary"
          @click="addComment"
          :disabled="!rawComment">
          댓글
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Kaomoji from '@/components/Kaomoji';
import Post from '@/model/Post.js';
import { randomUsername } from '@/utils/hash.js';

export default {
  name: 'Commenter',
  components: {
    Kaomoji
  },
  data() {
    return {
      rawComment: '',
      onFocused: false,
      post: Post.mockPost()
    };
  },
  computed: {
    username() {
      return randomUsername();
    }
  },
  methods: {
    addComment() {
      if (!this.rawComment) return;
      this.$emit('added', this.rawComment);
    }
  }
};
</script>

<style lang="less" scoped>
.comment-input {
  display: inline-block;
  margin-left: 10px;
  width: calc(100% - 70px);
  line-height: 60px;
}
</style>
