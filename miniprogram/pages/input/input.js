// pages/input/input.js
Page({
  handleInput(event) {
    console.log(event.detail.value)
  },
  handleFocus(event) {
    console.log('handleFocus', event)
  },
  handleBlur(event) {
    console.log('handleBlur', event)
  },
})