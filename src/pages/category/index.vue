<template>
  <div>
    <!-- 头部组件 -->
    <searchLink />
    <!-- 页面主体 -->
    <div class="showMain">
      <!-- 左边导航栏 -->
      <ul class="left">
        <li
          @click="activeIndex=index"
          :class="{active:activeIndex===index}"
          v-for="(item,index) in 10"
          :key="index"
        >大家电</li>
      </ul>
      <!-- 右边商品 -->
      <ul class="right">
        <img src="../../../static/tabs/icons/titleImage.png" alt />
        <li>
          <p class="pName">
            /
            <span>电视</span>
            /
          </p>
          <ul class="showItem">
            <li v-for="(item,index) in 10" :key="index">
              <img
                class="imgBox"
                src="https://img10.360buyimg.com/babel/s190x240_jfs/t1/103208/40/3631/41248/5de0e402E7dcbf45f/d7e352620534bec7.png!cc_190x240.webp"
                alt
              />
              <span>曲面电视</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchLink from '@/components/searchLink'
export default {
  data () {
    return {
      // 默认选中的左边
      activeIndex: 0
    }
  },
  components: {
    searchLink
  }
}
</script>

<style lang="less">
.showMain {
  display: flex;
  position: fixed;
  top: 100rpx;
  bottom: 0;
  width: 100%;
  .left {
    width: 198rpx;
    height: 100%;
    background-color: #f4f4f4;
    overflow: auto;
    li {
      text-align: center;
      line-height: 120rpx;
      height: 120rpx;
      border-bottom: 1rpx solid #eee;
      box-sizing: border-box;
      &.active {
        background-color: #fff;
        color: #eb4450;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 8rpx;
          height: 60rpx;
          left: 0;
          top: 20rpx;
          background-color: #eb4450;
        }
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding: 20rpx 16rpx 0 16rpx;
    img {
      width: 520rpx;
      height: 180rpx;
      font-size: 0;
    }
    .pName {
      height: 110rpx;
      color: #e0e0e0;
      background-color: red;
      text-align: center;
      line-height: 110rpx;
      font-size: 36rpx;
      span {
        color: #333;
      }
    }
  }
}
.showItem {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    display: flex;
    flex-direction: column;
    width: 33.33%;
    margin-bottom: 30rpx;
    font-size: 28rpx;
    .imgBox {
      width: 120rpx;
      height: 120rpx;
    }
    span {
    }
  }
}
</style>