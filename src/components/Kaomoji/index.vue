<template>
  <div
    class="kaomoji"
    :style="boxStyle"
    :class="{'circle':type=='circle'}">
    <span :style="{'transform':scale}">
      {{kaomoji}}
    </span>
  </div>
</template>
<script>
import { stringToHslColor, hashedKaomoji } from '@/utils/hash.js';

export default {
  name: 'Kaomoji',
  props: {
    username: {
      default() {
        return 'Unknown';
      },
      type: String
    },
    size: {
      type: Number,
      default() {
        return 60;
      }
    },
    type: {
      type: String,
      default() {
        return 'circle';
      }
    }
  },
  computed: {
    boxStyle() {
      const size = this.size;
      return {
        background: this.color,
        'font-size': `${size / 5}px`,
        width: `${size}px`,
        height: `${size}px`,
        'line-height': `${size}px`
      };
    },
    scale() {
      const size = this.size;
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      ctx.font = `${size / 5}px Arial`;
      const width = ctx.measureText(this.kaomoji).width + 10;
      return `scale(${this.size / width})`;
    },
    color() {
      return stringToHslColor(this.username);
    },
    kaomoji() {
      return hashedKaomoji(this.username);
    }
  }
};
</script>
<style lang="less" scoped>
  .kaomoji {
    text-align: center;
    float: left;

    span {
      display: inline-block;
    }

    &.circle {
      border-radius: 50%;
    }
  }
</style>
