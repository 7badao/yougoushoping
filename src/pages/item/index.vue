<template>
  <div class="wrapper">
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      circular
      indicator-color="#ccc"
      indicator-active-color="#fff"
    >
      <block v-for="(item, index) in goodsList.pics" :key="index">
        <swiper-item @click="prvImg(index)">
          <img class="swiper-img" :src="item.pics_big_url" alt />
        </swiper-item>
      </block>
    </swiper>
    <!-- 商品信息 -->
    <div class="goods-info">
      <p class="price">{{goodsList.goods_price}}</p>
      <div class="name-favo">
        <p class="name">{{goodsList.goods_name}}</p>
        <div class="favo">
          <span class="iconfont icon-fenxiang"></span>
          <span>分享</span>
          <button class="favoBtn" open-type="share">分享</button>
        </div>
      </div>
      <p class="express">快递: 免运费</p>
    </div>
    <div class="promote">
      <ul>
        <li>
          <span class="name">促销</span>
          <span class="detail">满300减30元</span>
        </li>
        <li class="brother">
          <span class="name">已选</span>
          <span class="detail gray">黑色/S/1件</span>
        </li>
      </ul>
    </div>
    <!-- 图文介绍 -->
    <div class="goods-detail">
      <div class="tabs">
        <span
          v-for="(item,index) in tabs"
          :key="index"
          @click="artiveIndex=index"
          :class="{active:artiveIndex===index}"
        >{{item}}</span>
      </div>
      <div class="main">
        <div v-show="artiveIndex===0" v-html="goodsList.goods_introduce">图文介绍</div>
        <div v-show="artiveIndex">商品参数</div>
      </div>
    </div>
    <div class="fixed-bottom">
      <div class="icon-text">
        <span class="iconfont icon-kefu"></span>
        <span>联系客服</span>
        <button open-type="contact">联系客服</button>
      </div>
      <div class="icon-text">
        <span class="iconfont icon-gouwuchekong"></span>
        <span>购物车</span>
      </div>
      <div class="btn add-cart-btn">加入购物车</div>
      <div class="btn buy-btn">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsList: {},
      artiveIndex: 0,
      tabs: ['图文介绍', '规格参数']
    }
  },
  onLoad (options) {
    // console.log(options)
    this.queryGoods(options.id)
  },
  onShareAppMessage: function (res) {
    return {
      title: this.goodsList.goods_name,
      imageUrl: this.goodsList.pics[0].pics_big
    }
  },

  methods: {
    // 预览图片,发送给朋友等操作
    prvImg (index) {
      let urls = []
      // 遍历轮播图数据
      this.goodsList.pics.forEach(v => {
        return urls.push(v.pics_big)
      })
      wx.previewImage({
        current: urls[index], // 当前显示图片的http链接
        urls
      })
    },
    queryGoods (id) {
      this.$request({
        url: `/api/public/v1/goods/detail?goods_id=${id}`
      }).then(data => {
        console.log(data)
        this.goodsList = data
      })
    }
  }
}
</script>
<style lang="less">
.wrapper {
  background-color: #f4f4f4;
  padding-bottom: 98rpx;
}

.swiper {
  height: 720rpx;
}

.swiper-img {
  width: 100%;
  height: 720rpx;
}

.goods-info {
  padding: 40rpx 0 30rpx 20rpx;
  background-color: #fff;

  .price {
    color: #eb4450;
    font-size: 40rpx;
  }

  .name-favo {
    display: flex;
    height: 78rpx;
    margin-top: 14rpx;

    .name {
      color: #333;
      flex: 1;
      font-size: 28rpx;
      padding-right: 78rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }

    .favo {
      border-left: 1px solid #ddd;
      width: 144rpx;
      color: #999;
      font-size: 24rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .favoBtn {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }
    }
  }

  .express {
    color: #999;
    font-size: 24rpx;
    margin-top: 20rpx;
  }
}

.promote {
  margin-top: 20rpx;

  li {
    background-color: #fff;
    height: 96rpx;
    line-height: 96rpx;
    font-size: 28rpx;
    margin-top: 20rpx;
    padding-left: 20rpx;

    &.brother {
      margin-top: 0;
    }

    .name {
      color: #404040;
    }

    .detail {
      color: #ff4055;
      margin-left: 40rpx;

      &.gray {
        color: #dfdfdf;
      }
    }
  }
}

.goods-detail {
  margin-top: 20rpx;
  background-color: #fff;

  .tabs {
    display: flex;

    span {
      flex: 1;
      text-align: center;
      color: #404040;
      font-size: 22rpx;
      height: 100rpx;
      line-height: 100rpx;
      box-sizing: border-box;

      &.active {
        color: #ff4055;
        border-bottom: 10rpx solid #ff2644;
      }
    }
  }
}

.fixed-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 98rpx;
  display: flex;
  background-color: #fff;

  .icon-text {
    flex: 2;
    font-size: 20rpx;
    color: #404040;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    button {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }

  .btn {
    flex: 3;
    color: #fff;
    text-align: center;
    line-height: 98rpx;

    &.add-cart-btn {
      background-color: #ffb400;
    }

    &.buy-btn {
      background-color: #ff2d4a;
    }
  }
}
</style>