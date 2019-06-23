<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="2">
        <Kaomoji :username="username"/>
      </el-col>
      <el-col>
        <el-input
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
      <el-col :span="2">
        <el-button @click="rawComment=''">
          취소
        </el-button>
      </el-col>
      <el-col :span="2">
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
import { randomUsername } from '@/utils/hash.js';

export default {
  name: 'Commenter',
  components: {
    Kaomoji
  },
  data() {
    return {
      rawComment: '',
      onFocused: false
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
