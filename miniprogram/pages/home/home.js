// miniprogram/pages/home/home.js
import request from '../../service/network'

Page({
  data: {

  },
  onLoad: function(options) {
    this.get_data_origin()

    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'coderwhy',
        age: 18
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  get_data_origin() {
    // 1.简单的get请求
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/v1/recommend',
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })

    // 2.发送get请求, 并携带参数
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/v1/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })

    // 3.发送post请求, 并携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'coderwhy',
    //     age: 18
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   }
    // })
  }
})