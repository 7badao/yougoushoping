const BASE_URL = 'https://ugo.botue.com'

function request (options) {
  // 判断是否需要加载
  if (!options.noLoading) {
    wx.showToast({
      title: '加载中...', // 提示的内容,
      mask: true
    })
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      data: options.data,
      success: res => {
        resolve(res.data.message)
      },
      fail: (err) => {
        console.log(err)
      },
      complete () {
        if (!options.noLoading) {
          wx.hideToast()
        }
      }
    })
  })
}
export default request
