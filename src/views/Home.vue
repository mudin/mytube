<template>
  <el-row class="home" type="flex" justify="space-around">
    <el-col :span="18" :lg="20" :md="22" :sm="23" :xs="24">
      <Player/>
      <Actions></Actions>
      <Comments/>
    </el-col>
  </el-row>
</template>

<script>
import Player from '@/components/Player';
import Actions from '@/components/Actions.vue';
import Comments from '@/components/Comments';

export default {
  name: 'home',
  components: {
    Player,
    Actions,
    Comments
  }
};
</script>

<style lang="less" scoped>
</style>
