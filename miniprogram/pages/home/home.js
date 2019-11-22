// miniprogram/pages/home/home.js
Page({
  data: {
    title: 'hahaha'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})