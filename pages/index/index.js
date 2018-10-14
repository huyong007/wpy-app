//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  iviewClick() {
    wx.navigateTo({
      url: '../../pages/logs/logs'
    })

  },
  primordialClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/imgs/img'
    })
  },
  feelingClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/feeling/feeling'
    })
  },
  dailyClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/daily/daily'
    })
  },
  picClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/pic/pic'
    })
  },
  moneyClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/money/money'
    })
  },
  timeClick() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/time/time'
    })
  },
})