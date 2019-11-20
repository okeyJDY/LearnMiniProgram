Component({
  data: {
    counter: 0
  },
  methods: {
    incrementCounter() {
      this.setData({
        counter: this.data.counter + 1
      })
    }
  }
})