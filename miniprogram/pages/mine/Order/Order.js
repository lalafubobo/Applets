// pages/mine/Order/Order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        active:'',
    findWaitTrades: '', // 获取待收货的商品订单
    findNoUsedCouponsByUserID: '',// 获取未过期的代金券
    findUsedCouponByUserID:'', //获取已经过期的代金券
    findWaitAndRecyclingOrders: '',// 获取代取件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let remoteServer = wx.getStorageSync('remoteServer');
    let userInfo = wx.getStorageSync('userInfo');
    console.log(options);
    this.setData({
      active:options.id-1
    });
    this.findWaitTrades(remoteServer,userInfo.userID);
    this.findNoUsedCouponsByUserID(remoteServer,userInfo.userID);
    this.findUsedCouponByUserID(remoteServer,userInfo.userID);
    this.findWaitAndRecyclingOrders(remoteServer,userInfo.userID);
  },

// 获取待收货的商品订单
  findWaitTrades:function(remoteServer,userID){
    let that = this;
    wx.request({
      url: remoteServer + '/findWaitTrades',
      data: {
        userID:userID
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          findWaitTrades:res.data
        });
      }
    })
  },

// 获取未过期的代金券
  findNoUsedCouponsByUserID: function (remoteServer, userID){
    let that = this;
    wx.request({
      url: remoteServer + '/findNoUsedCouponsByUserID',
      data: {
        userID: userID
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          findNoUsedCouponsByUserID: res.data
        });
      }
    })
  },

// 获取已经过期的代金券
  findUsedCouponByUserID: function (remoteServer, userID){
    let that = this;
    wx.request({
      url: remoteServer + '/findUsedCouponByUserID',
      data: {
        userID: userID
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          findUsedCouponByUserID: res.data
        });
      }
    })
  },

// 获取代取件
  findWaitAndRecyclingOrders: function (remoteServer, userID){
    let that = this;
    wx.request({
      url: remoteServer + '/findWaitAndRecyclingOrders',
      data: {
        userID: userID
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          findWaitAndRecyclingOrders: res.data
        });
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})