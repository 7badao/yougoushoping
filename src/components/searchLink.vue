<template>
  <!-- 头部搜索框 -->
  <div class="header" @click="toSearch">
    <div class="inputBox">
      <icon type="search" size="20"></icon>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toSearch () {
      wx.navigateTo({ url: '/pages/search/main' })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 100rpx;
  padding: 0 16rpx;
  display: flex;
  align-items: center;
  background-color: #eb4450;
  .inputBox {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 60rpx;
    color: #bbb;
    background-color: #fff;
    font-size: 34rpx;
    icon {
      margin-right: 16rpx;
    }
  }
}
</style>