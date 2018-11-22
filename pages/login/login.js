

//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        isHidden: true,
        isIf: false,
        topics: [],
        array: [{
            message: 'foo',
        }, {
            message: 'bar'
        }]
    },

    async onGotUserInfo: function (e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
            let res = await wx.login();
            if (res.code) {
                wx.setStorageSync(USER_INFO, e.detail.userInfo);
                let systemInfo = wx.getSystemInfoSync();
                wx.setStorageSync(SYSTEM_INFO, systemInfo);
                let rlt = await api.wxJsCode2Session({
                    query: {
                        jsCode: res.code,
                        nickName: e.detail.userInfo.nickName
                    }
                })
                if (rlt.data.result) {
                    let data = rlt.data;
                    if (data.data.openid) {
                        wx.setStorageSync(USER_SPECICAL_INFO, data.data);
                        wx.switchTab({
                            url: '/pages/index'
                        })
                    }
                } else {
                    let res = await wx.showModal({
                        title: 'appid有误',
                        content: '授权失败'
                    })
                    if (res.confirm) {
                        wx.switchTab({
                            url: '/pages/index'
                        })
                    }
                }

            }
        }
    },

    async onLoad: function () {
        let res = await wx.getSetting()
        if ((res.authSetting)['scope.userInfo']) {
            let userInfo = wx.getStorageSync(USER_INFO)
            if (!userInfo.nickName) {
                let data = await wx.getUserInfo()
                if (data) {
                    wx.setStorageSync(USER_INFO, data.userInfo)
                }
                let res = await wx.login()
                if (res.code) {
                    let systemInfo = wx.getSystemInfoSync();
                    wx.setStorageSync(SYSTEM_INFO, systemInfo);
                    let rlt = await api.wxJsCode2Session({
                        query: {
                            jsCode: res.code,
                            nickName: data.userInfo.nickName
                        }
                    })
                    if (rlt.data.result) {
                        let data = rlt.data;
                        if (data.data.openid) {
                            wx.setStorageSync(USER_SPECICAL_INFO, data.data);
                        }
                    }
                }
            }
            wx.switchTab({
                url: '/pages/home'
            })
        }
    },




})

