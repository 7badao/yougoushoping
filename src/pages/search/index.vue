<template>
  <div>
    <searchBar @confirm="toSearchList" />
  </div>
</template>

<script>
// 导入搜索框
import searchBar from '@/components/searchBar'
export default {
  components: {
    searchBar
  },
  methods: {
    // 按照关键字跳转
    toSearchList (data) {
      wx.navigateTo({ url: '/pages/searchList/main?query=' + data })
    }
  }
}
</script>

<style>
</style>