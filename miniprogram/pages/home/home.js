// miniprogram/pages/home/home.js
Page({
  data: {
    counter: 0,
    title: ['衣服', '裤子', '鞋子']
  },
  handleIncrement(event) {
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  itemClick(event) {
    console.log(event)
  },
  handleIncrementCpn(event) {
    const selCpn = this.selectComponent("#sel-id")
      // selCpn.setData({
      //   counter: selCpn.data.counter + 1
      // })
    selCpn.incrementCounter()
  }
})