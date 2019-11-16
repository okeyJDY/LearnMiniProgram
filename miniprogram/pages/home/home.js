Page({
  data: {
    name: 'jdy',
    age: 18,
    students: [
      { id: '001', name: 'kobe', age: 30 },
      { id: '002', name: 'james', age: 28 },
      { id: '003', name: 'curry', age: 20 },
      { id: '004', name: 'jdy', age: 18 },
    ],
    counter: 0
  },
	handleBtnClick() {
		let {counter} = this.data
		counter++
		this.setData({
			counter
		})
	},
	handleSubTraction() {
		let {counter} = this.data
		counter--
		this.setData({
			counter
		})
	}
})