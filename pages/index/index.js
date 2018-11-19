//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topics: [],
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  onLoad: function () {
    console.log(this.data.topics);
    this._getData();
  },
  _getData() {
    var that = this;
    var topics = that.data.topics;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics',
      data: {
        page: 1,
        tab: 'good',
        limit: 5,
        mdrender: true
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        topics = res.data.data
        that.setData({
          topics: topics
        })
      }
    })
  }

})