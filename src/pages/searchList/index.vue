<template>
  <div>
    <!-- 头部搜索框 -->
    <div class="topHeader" :style="{position:isFixed?'fixed':'static'}">
      <!-- <header>
        <icon type="search" size="24"></icon>
        <input type="text" v-model="query" @confirm="reload" confirm-type="search" />
      </header>-->
      <!-- 接收传过来的confrim 向子组件传当前的关键字 -->
      <searchBar confirm-type="search" @confirm="searchGoods" :query="query" />
      <!-- 导航栏 -->
      <nav>
        <div
          :class="{active:artiveIndex===index}"
          @click="artiveIndex=index"
          v-for="(item, index) in menuList"
          :key="index"
        >{{item}}</div>
      </nav>
    </div>
    <!-- 商品展示区域 -->
    <div class="bigShowBox" :style="{marginTop:isFixed?'220rpx':'0'}">
      <!-- 点击商品跳转到商品详情 -->
      <div
        class="showBox"
        @click="toItem(item.goods_id)"
        v-for="(item,index) in goodsList"
        :key="index"
      >
        <div class="left">
          <img :src="item.goods_small_logo" alt />
        </div>
        <div class="right">
          <div class="lineHiden">{{item.goods_name}}</div>
          <span class="price">
            ￥
            <span class="num">{{item.goods_price}}</span>.00
          </span>
        </div>
      </div>
    </div>
    <div class="tipText" v-show="isGoodsList">我是有底线的</div>
  </div>
</template>

<script>
// 导入封装的搜索组件
import searchBar from '../../components/searchBar'
const PAGE_SIZE = 6
export default {
  data () {
    return {
      // 排序数组
      menuList: ['综合', '销量', '价格'],
      // 搜索商品数组
      goodsList: [],
      // 搜索的关键字
      query: '',
      // 选中字的下标
      artiveIndex: 0,
      // 判断数据是否加载完毕
      isGoodsList: false,
      // 判断是否需要固定定位 当下拉刷新的时候才需要
      isFixed: false
    }
  },
  components: {
    searchBar
  },
  // 页面加载时触发 获取页面的路径参数
  onLoad (options) {
    // this.reload()
    this.pagenum = 1
    // 设置一个标志位 判断是否是在请求中 默认不在
    this.isRequest = false
    // 清空里面的数据
    this.goodsList = []
    this.query = options.query
    this.getSearch()
    // console.log(options.query)
  },
  onPageScroll () {
    this.isFixed = true
  },
  // 下拉刷新 加载第一页
  onPullDownRefresh () {
    this.isFixed = false
    this.isPullDownRefresh = true
    this.reload()
  },
  // 上拉加载更多
  onReachBottom () {
    this.pagenum++
    this.getSearch()
  },
  methods: {
    reload () {
      this.pagenum = 1
      this.isRequest = false
      this.isGoodsList = false
      // 将数组里面的数据清空
      this.goodsList = []
      this.getSearch()
    },
    getSearch () {
      // 如果是不在请求直接return
      if (this.isRequest || this.isGoodsList) {
        return
      }
      // 请求中
      this.isRequest = true
      this.$request({
        url: '/api/public/v1/goods/search',
        data: {
          query: this.query,
          pagesize: PAGE_SIZE,
          pagenum: this.pagenum
        }
      }).then(data => {
        console.log(data)
        // 下拉出现问题 后面数据覆盖前面 所以不能直接赋值
        // this.goodsList = data.goods
        this.goodsList = [...this.goodsList, ...data.goods]
        // 判断数组的长度是否等于返回的total
        if (this.goodsList.length === data.total) {
          this.isGoodsList = true
        }
      }).finally(() => {
        // 不管promise的状态 都会执行
        this.isRequest = false
      })
    },
    // 搜索商品
    searchGoods (data) {
      // console.log(data)
      this.reload()
      // 将搜索框的数据赋值给关键字
      this.query = data
    },
    // 跳转到商品详情
    toItem (index) {
      // console.log(index)
      wx.navigateTo({ url: '/pages/item/main?id=' + index })
    }
  }
}
</script>

<style lang="less">
.topHeader {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120rpx;
  width: 100%;
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
  .active {
    color: #eb4450;
  }
}
.bigShowBox {
  margin-top: 220rpx;
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
}

.tipText {
  color: #666;
  text-align: center;
}
</style>
