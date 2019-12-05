<template>
  <div class="header">
    <input type="text" v-model.trim="keyWord" />
    <icon class="search-icon" type="search" size="16"></icon>
    <!-- 点击清空按钮清空输入框的所有内容 -->
    <!-- 有内容则显示清空,这v-show频繁切换 -->
    <icon
      class="clear-icon"
      type="clear"
      size="16"
      color="#ccc"
      v-show="keyWord"
      @click="keyWord=''"
    ></icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      keyWord: ''
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 120rpx;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background-color: #fff;
    height: 60rpx;
    width: 720rpx;
    padding-left: 74rpx;
    box-sizing: border-box;
  }
  .search-icon {
    position: absolute;
    left: 44rpx;
  }

  .clear-icon {
    position: absolute;
    right: 44rpx;
    z-index: 100;
  }
}
</style>