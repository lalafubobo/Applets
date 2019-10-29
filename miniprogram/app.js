//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    let remoteServer = 'https://hanjun.red:8085';
    // let remoteServer = 'https://localhost:8085';
    wx.setStorageSync('remoteServer', remoteServer);
    if (wx.getStorageSync('userInfo')) {
      // 同步数据
      console.log('同步数据开始');
      wx.request({
        url: remoteServer + '/user/sync',
        method: 'POST',
        data: {
          userID: wx.getStorageSync('userInfo').userID
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res.data);
          if (res.data.userID != null && res.data.userID != "") {
            wx.setStorageSync('userInfo', res.data);
            console.log('同步数据完成');
          } else {
            console.log('同步数据失败');
            wx.removeStorageSync("userInfo");
          }
        }
      });
    } else {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            wx.request({
              url: remoteServer + '/user/login',
              method: 'POST',
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success(res) {
                console.log(res.data);
                //console.log("openid:"+res.data.openid);
                if (res.data.userOpenId != "" || res.data.userOpenId != null) {
                  // 登录成功
                  //将用户信息保存到缓存中
                  wx.setStorageSync("userInfo", res.data);
                } else {
                  // 登录失败
                  // TODO 跳转到错误页面，要求用户重试
                  return false;
                }
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: null
  }
})