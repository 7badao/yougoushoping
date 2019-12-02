<template>
  <div>
    <!-- 头部搜索框 -->
    <header>
      <icon type="search" size="24"></icon>
      <input type="text" value="小米" />
    </header>
    <!-- 导航栏 -->
    <nav>
      <div v-for="(item, index) in 3" :key="index">综合</div>
    </nav>
    <!-- 商品展示区域 -->
    <div class="showBox" v-for="(item,index) in 6" :key="index">
      <div class="left">
        <img
          src="https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/5021/24/11990/351090/5bd1b346E84b1accc/bda8ef36609d5ef7.jpg.webp"
          alt
        />
      </div>
      <div class="right">
        <div class="lineHiden">飞利浦（PHILIPS）男士电动剃须刀全身水洗干湿双剃剃胡刀胡须刀刮胡刀S1050/02</div>
        <span class="price">
          ￥
          <span class="num">69</span>.00
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120rpx;
  background-color: #eee;
  padding: 0 16rpx;
  icon {
    position: absolute;
    left: 30rpx;
  }
  input {
    height: 60rpx;
    background-color: #fff;
    padding-left: 78rpx;
  }
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;
  border: 1rpx solid #dddddd;
}
.showBox {
  display: flex;
  height: 260rpx;
  padding: 30rpx 20rpx;
  border-bottom: 1rpx solid #ddd;
  box-sizing: border-box;
  .left {
    img {
      width: 200rpx;
      height: 200rpx;
    }
  }
  .right {
    flex: 1;
    margin-left: 27rpx;
    font-size: 28rpx;
    .lineHiden {
      margin-bottom: 70rpx;
    }
    .price {
      color: #eb4450;
      .num {
        font-size: 34rpx;
      }
    }
  }
}
</style>
