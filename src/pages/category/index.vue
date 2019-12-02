<template>
  <div>
    <!-- 头部组件 -->
    <searchLink />
    <!-- 页面主体 -->
    <div class="showMain" v-if="goriesList.length">
      <!-- 左边导航栏 -->
      <ul class="left">
        <li
          @click="activeIndex=index"
          :class="{active:activeIndex===index}"
          v-for="(item,index) in goriesList"
          :key="index"
        >{{item.cat_name}}</li>
      </ul>
      <!-- 右边商品 -->
      <ul class="right">
        <img src="../../../static/tabs/icons/titleImage.png" alt />
        <li v-for="(item,index) in goriesList[activeIndex].children" :key="index">
          <p class="pName" v-if="item.length">
            /
            <span>{{item.cat_name}}</span>
            /
          </p>
          <ul class="showItem">
            <li
              v-for="(cate,cateIndex) in item.children"
              @click="getSearchList(cate.cat_name)"
              :key="cateIndex"
            >
              <img class="imgBox" :src="cate.cat_icon" alt />
              <span>{{cate.cat_name}}</span>
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
      activeIndex: 0,
      goriesList: []
    }
  },
  components: {
    searchLink
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      this.$request({
        url: '/api/public/v1/categories'
      }).then(data => {
        // console.log(data)
        this.goriesList = data
      })
    },
    getSearchList (catname) {
      wx.navigateTo({ url: '/pages/searchList/main?query=' + catname })
    }
  }
}
</script>

<style lang="less">
.showMain {
  display: flex;
  position: fixed;
  align-items: center;
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
    justify-content: center;
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
      text-align: center;
      line-height: 110rpx;
      span {
        color: #333;
        text-align: center;
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
    justify-content: center;
    align-items: center;
    width: 33.33%;
    margin-bottom: 30rpx;
    font-size: 28rpx;
    .imgBox {
      width: 120rpx;
      height: 120rpx;
    }
    span {
      text-align: center;
    }
  }
}
</style>