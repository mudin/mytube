<template>
  <el-row class="home" type="flex" justify="space-around">
    <el-col :span="18" :lg="20" :md="22" :sm="23" :xs="24">
      <Player :url='post.videoUrl' :poster="post.thumbUrl"/>
      <Actions></Actions>
      <Comments/>
    </el-col>
  </el-row>
</template>

<script>
import Player from '@/components/Player';
import Actions from '@/components/Actions.vue';
import Comments from '@/components/Comments';
import Post from '@/model/Post';

export default {
  name: 'home',
  components: {
    Player,
    Actions,
    Comments
  },
  data() {
    return {
      post: Post.mockPost()
    };
  }
};
</script>

<style lang="less" scoped>
</style>
