// miniprogram/pages/home/home.js
Page({
  data: {
    title: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log('按钮发生点击')
  },
  handleTouchStart() {
    console.log('触摸开始')
  },
  handleTouchMove() {
    console.log('触摸移动')
  },
  handleToucnEnd() {
    console.log('触摸结束')
  },
  handleTap() {
    console.log('点击')
  },
  handleLongpress() {
    console.log('长按')
  },
  handleEventClick(event) {
    console.log('------', event)
  },
  handleEventEnd(event) {
    console.log('+++++', event)
  },
  handleOuter(event) {
    console.log('外层的view', event)
  },
  handleInner(event) {
    console.log('内层的view', event)
  },
  handleItemClick(event) {
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const item = dataset.item
    console.log(index, item)
  },
  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})