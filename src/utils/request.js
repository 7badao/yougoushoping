const BASE_URL = 'https://www.uinav.com'

function request (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      success: res => {
        resolve(res.data.message)
      }
    })
  })
}
export default request
