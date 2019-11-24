//Component Object
Component({
  properties: {
    title: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    itemClick(event) {
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      const data = { index: this.data.currentIndex }
      this.triggerEvent('tabClick', data, {})
    }
  }
});