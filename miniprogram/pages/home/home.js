// miniprogram/pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../services/home'

const types = ['pop', 'new', 'sell']
const TOP_DISTANCE = 1000

Page({
  data: {
    banners: [],
    recommends: [],
    title: ['流行', '新款', "精选"],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    currentType: 'pop',
    showBackTop: false,
    tabScrollTop: 0,
    isTabFixed: false
  },
  onLoad(options) {
    this._getMultiData()

    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // ------------------- 网络请求函数 -------------------------
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },
  // 请求商品数据
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)

      const listKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [listKey]: oldList,
        [pageKey]: page
      })
    })
  },

  // ------------------- 函数 -------------------------
  tabClick(event) {
    const index = event.detail.index
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {
    // 获取tab-control到顶部的距离
    wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  // 上拉加载更多
  onReachBottom() {
    this._getGoodsData(this.data.currentType)
  },

  onPageScroll(options) {
    const scrollTop = options.scrollTop
    const flag1 = scrollTop >= TOP_DISTANCE
    if (flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    const flag2 = scrollTop >= this.data.tabScrollTop
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})