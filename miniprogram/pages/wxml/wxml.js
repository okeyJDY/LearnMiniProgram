// pages/wxml/wxml.js
Page({
  data: {
    message: '你好啊, 李银河!!',
    firstName: 'kobe',
    lastName: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 55,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [10, 14, 11, 18],
      [20, 24, 31, 48],
      [110, 124, 211, 318]
    ]
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score += 6
    })
  }
})