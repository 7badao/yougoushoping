<template>
  <div>
    <!-- 头部搜索框 -->
    <searchLink />
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255, 255, 255, 0.3)"
      indicator-active-color="#fff"
    >
      <block v-for="(item,index) in swiperData" :key="index">
        <swiper-item>
          <img mode="aspectFill" :src="item.image_src" />
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类栏 -->
    <div class="category">
      <div class="cateBar" v-for="(item,index) in Catitems" :key="index">
        <img :src="item.image_src" alt />
      </div>
    </div>
    <!-- show -->
    <ul>
      <li class="floor-item" v-for="(item, index) in Floordata" :key="index">
        <img :src="item.floor_title.image_src" alt />
        <div class="products">
          <img :src="item.product_list[0].image_src" alt />
          <div class="right">
            <block v-for="(floor,findex) in item.product_list" :key="findex">
              <img v-if="findex" :src="floor.image_src" alt />
            </block>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import searchLink from '@/components/searchLink'
export default {
  components: {
    searchLink
  },
  data () {
    return {
      // 轮播图数组
      swiperData: [],
      // 分类
      Catitems: [],
      // 楼层
      Floordata: []
    }
  },
  created () {
    this.getSwiperData()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    // 请求轮播图
    getSwiperData () {
      this.$request({
        url: '/api/public/v1/home/swiperdata'
      }).then(res => {
        // console.log(res)
        this.swiperData = res
      })
    },
    // 请求分类
    getCatitems () {
      this.$request({
        url: '/api/public/v1/home/catitems'
      }).then(res => {
        // console.log(res)
        this.Catitems = res
      })
    },
    getFloordata () {
      this.$request({
        url: '/api/public/v1/home/floordata'
      }).then(res => {
        // console.log(res)
        this.Floordata = res
      })
    }
    // 导入封装的头部组件
  }
}
</script>

<style lang="less">
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
