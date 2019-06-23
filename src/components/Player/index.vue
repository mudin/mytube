<template>
  <video-player class="vjs-default-skin vjs-big-play-centered"
    ref="videoPlayer"
    :options="playerOptions">
  </video-player>
</template>
<script>
export default {
  name: 'Player',
  data() {
    return {
      playerOptions: {
        width: '100px',
        muted: true,
        fluid: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        }]
      }
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  ready() {

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      console.log('resize');
      this.playerOptions.width = `${this.$el.clientWidth}px`;
    }
  }
};
</script>

<style lang="less">

  .video-js {
    margin: 0 auto;
  }

  .vjs-tech {
    outline: none;
  }

  .vjs-big-play-button {
    border: none!important;
    background: none!important;
    font-size: 4em;
    outline: none;
  }
</style>
