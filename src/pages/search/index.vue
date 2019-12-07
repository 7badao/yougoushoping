<template>
  <div>
    <searchBar @confirm="toSearchList" />
    <div class="history-search">
      <div class="title">
        <span class="title">历史搜索</span>
        <icon type="clear" size="18" @click="clearList"></icon>
      </div>
      <ul>
        <li v-for="item in keywordList" :key="item" @click="toSearchList(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// 导入搜索框
import searchBar from '@/components/searchBar'
const KEY_WORD = 'keyword'
export default {
  data () {
    return {
      // 取出本地数据
      keywordList: []
    }
  },
  components: {
    searchBar
  },
  onShow () {
    this.keywordList = wx.getStorageSync(KEY_WORD) || []
  },
  methods: {
    // 按照关键字跳转
    toSearchList (data) {
      // 遍历数组 重复的不添加
      let newKeyWord = this.keywordList.filter(v => {
        return v !== data
      })
      // 在数组的头部添加
      newKeyWord.unshift(data)
      // 存入本地数据
      wx.setStorageSync(KEY_WORD, newKeyWord)
      wx.navigateTo({ url: '/pages/searchList/main?query=' + data })
    },
    // 点击清空按钮清空所有数据
    clearList () {
      wx.showModal({
        title: '提示', // 提示的标题,
        content: '你确定要清空历史搜索记录吗？', // 提示的内容,
        showCancel: true, // 是否显示取消按钮,
        cancelText: '取消', // 取消按钮的文字，默认为取消，最多 4 个字符,
        cancelColor: '#000000', // 取消按钮的文字颜色,
        confirmText: '确定', // 确定按钮的文字，默认为取消，最多 4 个字符,
        confirmColor: '#3CC51F', // 确定按钮的文字颜色,
        success: res => {
          if (res.confirm) {
            wx.removeStorageSync(KEY_WORD)
            // 清空列表内容
            this.keywordList = []
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  position: relative;
  icon {
    position: absolute;
    top: 50rpx;
    left: 38rpx;
  }
  input {
    height: 60rpx;
    flex: 1;
    background-color: #fff;
    padding-left: 70rpx;
    box-sizing: border-box;
    border-radius: 4rpx;
  }
  button {
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
    border: 1rpx solid #bfbfbf;
    background-color: #eee;
    margin-left: 20rpx;
  }
}

.history-search {
  color: #333;
  font-size: 28rpx;
  padding: 30rpx 30rpx 30rpx 15rpx;
  .title {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30rpx;
    li {
      height: 64rpx;
      line-height: 64rpx;
      padding: 0 26rpx;
      background-color: #ddd;
      margin: 0 30rpx 16rpx 0;
    }
  }
}
</style>
