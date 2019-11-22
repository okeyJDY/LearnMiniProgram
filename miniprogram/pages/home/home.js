// miniprogram/pages/home/home.js
Page({
  data: {

  },
  handleShowToast() {
    wx.showToast({
      title: '加载ing',
      icon: 'loading',
      duration: 3000,
      mask: true,
      success: () => {
        console.log('加载成功');
      },
      complete: () => {
        console.log('回调结束');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '哈哈哈',
      // showCancel: false
      cancelText: '退出',
      cancelColor: '#21252b',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击了确定');
        } else if (res.cancel) {
          console.log('用户点击了取消');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true,
      success: () => {
        console.log('成功的回调函数');
      },
      fail: () => {
        console.log('失败的回调函数');
      },
      complete: () => {
        console.log('回调函数结束');
      }
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: '#e68664',
      success: (res) => {
        console.log('成功的回调函数', res.tapIndex);
      },
      fail: (res) => {
        console.log('失败的回调函数', res.errMsg);
      },
      complete: () => {
        console.log('回调函数结束');
      }
    })
  }
})