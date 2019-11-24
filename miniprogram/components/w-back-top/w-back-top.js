//Component Object
Component({
  properties: {
    myProperty: {
      type: String,
      value: '',
      observer: function() {}
    },

  },
  data: {

  },
  methods: {
    handleBackTop() {
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  },
});