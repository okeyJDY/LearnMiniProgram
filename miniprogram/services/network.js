const BaseURL = 'http://106.54.54.237:8000/api/v1'

export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BaseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}