//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://api.randomuser.me',
      data: {
        results: '20',
        pi: '1',
        ps: '20',
        _allow_anonymous: 'true',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          userInfo: res.data.results,
        })
      }
    })
  },
  handleClick() {
    wx.navigateTo({
      url: '../../pages/logs/logs'
    })

  },
  handleClick1() {
    console.log('this is a test');
    wx.navigateTo({
      url: '../../pages/imgs/img'
    })

  },
})