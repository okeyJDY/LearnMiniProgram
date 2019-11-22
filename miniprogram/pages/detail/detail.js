//Page Object
Page({
  data: {

  },
  //options(Object)
  onLoad: function(options) {
    console.log(options);
  },
  onUnload() {
    const pages = getCurrentPages();
    const home = pages[0]
    home.setData({
      title: 'hehehe'
    })
  }
});