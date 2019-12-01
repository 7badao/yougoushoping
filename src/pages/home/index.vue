<template>
  <div>
    <!-- 头部搜索框 -->
    <div class="header">
      <div class="inputBox">
        <icon type="search" size="20"></icon>
        <span>搜索</span>
      </div>
    </div>
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255, 255, 255, 0.3)"
      indicator-active-color="#fff"
    >
      <block v-for="(item,index) in 3" :key="index">
        <swiper-item>
          <img mode="aspectFill" src="https://api.zbztb.cn/pyg/banner2.png" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类栏 -->
    <div class="category">
      <div class="cateBar" v-for="(item,index) in 4" :key="index">
        <img src="https://api.zbztb.cn/pyg/icon_index_nav_4@2x.png" alt />
      </div>
    </div>
    <!-- show -->
    <ul>
      <li class="floor-item" v-for="(item, index) in 4" :key="index">
        <img src="https://api.zbztb.cn/pyg/pic_floor01_title.png" alt />
        <div class="products">
          <img src="https://api.zbztb.cn/pyg/pic_floor01_1@2x.png" alt />
          <div class="right">
            <img
              v-for="(item2, index2) in 4"
              :key="index2"
              src="https://api.zbztb.cn/pyg/pic_floor01_1@2x.png"
              alt
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
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
.swiper {
  height: 340rpx;
  swiper-item {
    img {
      width: 100%;
      height: 340rpx;
    }
  }
}
.category {
  height: 194rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .cateBar {
    img {
      width: 128rpx;
      height: 140rpx;
    }
  }
}
.floor-item {
  > img {
    height: 88rpx;
    width: 100%;
  }
  .products {
    display: flex;
    margin-left: 16rpx;
    > img {
      width: 232rpx;
      height: 386rpx;
    }
    .right {
      flex: 1;
      font-size: 0;
      img {
        width: 232rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
      }
    }
  }
}
</style>
