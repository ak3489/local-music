<template>
  <div class="el-empty">
    <div class="el-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false">
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="el-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="el-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ImgEmpty from './img-empty.vue';

export default {
  name: 'ElEmpty',
  components: {
    [ImgEmpty.name]: ImgEmpty
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    imageSize: Number,
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    emptyDescription() {
      return this.description || "没有数据" ;
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : ''
      };
    }
  }
};
</script>
<style lang="scss" scope>
    .el-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 40px 0;
    .el-empty__image {
    width: 160px;
    .el-empty__image svg {
    fill: #dcdde0;
    width: 100%;
    height: 100%;
    vertical-align: top;
}

}
.el-empty__description {
    margin-top: 20px;
    p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
}
}
.el-empty__bottom {
    margin-top: 20px;
}
}
</style>