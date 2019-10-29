// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    featherValue: '',
    // 控制每个块 打开或关闭的状态 的数据
    switchViewTF: {
      // switchWaitGoods: false,
      // switchCashCoupon: false,
      // switchWaitPickup: false,
      // switchWaitA:false,
      // switchWaitB:false
    },
    switchButtonTF: {
      // switchWaitGoods: false,
      // switchCashCoupon: false,
      // switchWaitPickup: false,
      // switchWaitA: false,
      // switchWaitB: false
    },
    // 弹出动画
    // ejectWaitGoodsAnim: {},
    // ejectCashCouponAnim: {},
    // ejectWaitPickupAnim: {},
  },
  // 获得羽毛值
  getFeatherValue:function(){
    console.log('更新用户羽毛值');
    let that = this;
    that.setData({
      featherValue: wx.getStorageSync('userInfo').userFeatherValue
    });
  },
//点击待收货
  switchWaitGoods:function(e){
    var id=e.target.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: `/pages/mine/Order/Order?id=${id}`,
    })
  },
  switchCashCoupon:function(e){
    var id = e.target.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: `/pages/mine/Order/Order?id=${id}`,
    })
  },
  switchWaitPickup:function(e){
    var id = e.target.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: `/pages/mine/Order/Order?id=${id}`,
    })
  },
  switchWaitA:function(e){
    var id = e.target.dataset.id;
    //console.log(id)
    wx.navigateTo({
      url: `/pages/mine/Order/Order?id=${id}`,
    })
  },
  switchWaitB: function (e) {
    wx.showToast({
      title: '繁忙，稍后再试',
      icon:'none'
    })
  },
  // 检测块中的其他下拉菜单是否打开,并关闭
  // testSwitchOn: function (name) {  // 该方法传入一个变量的名字，意为排除该名字的按钮的状态的检测
  //   let switchViewTF = this.data.switchViewTF;
  //   // 检测是否还有其他的菜单处于打开状态
  //   for (let key in switchViewTF) {
  //     if (switchViewTF[key] == true) {
  //       if (key != name) {
  //         let changeName = 'switchViewTF.' + key;
  //         this.setData({ [changeName]: false });
  //       }
  //     }
  //   }
  // },
  // testButtonOn: function (name) {
  //   let switchButtonTF = this.data.switchButtonTF;
  //   for (let key in switchButtonTF) {
  //     if (switchButtonTF[key] == true) {
  //       if (key != name) {
  //         let changeName = 'switchButtonTF.' + key;
  //         this.setData({ [changeName]: false });
  //       }
  //     }
  //   }
  // },
  // // 事件处理方法
  // switchWaitGoods: function () {
  //   this.testSwitchOn('switchWaitGoods');
  //   this.testButtonOn('switchWaitGoods');

  //   let buttonWaitGoods = this.data.switchButtonTF.switchWaitGoods;
  //   let switchWaitGoods = this.data.switchViewTF.switchWaitGoods;
  //   // 动画
  //   if (!switchWaitGoods) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(600).step()
  //     that.setData({
  //       ejectWaitGoodsAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchWaitGoods': true,
  //       'switchButtonTF.switchWaitGoods': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitGoodsAnim: animation.export()
  //       })
  //     }, 600)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(600).step()
  //     that.setData({
  //       ejectWaitGoodsAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitGoodsAnim: animation.export(),
  //         'switchViewTF.switchWaitGoods': false,
  //         'switchButtonTF.switchWaitGoods': false
  //       })
  //     }, 600)
  //   }

  //   // let buttonWaitGoods = this.data.switchButtonTF.switchWaitGoods;
  //   // this.setData({ 'switchButtonTF.switchWaitGoods': !buttonWaitGoods });
  //   // let switchWaitGoods = this.data.switchViewTF.switchWaitGoods;
  //   // this.setData({'switchViewTF.switchWaitGoods':!switchWaitGoods});
  // },
  // switchCashCoupon: function () {
  //   this.testSwitchOn('switchCashCoupon');
  //   this.testButtonOn('switchCashCoupon');
  //   let buttonCashCoupon = this.data.switchButtonTF.switchCashCoupon;
  //   // this.setData({ 'switchButtonTF.switchCashCoupon': !buttonCashCoupon });
  //   let switchCashCoupon = this.data.switchViewTF.switchCashCoupon;
  //   // this.setData({ 'switchViewTF.switchCashCoupon': !switchCashCoupon });

  //   // 动画
  //   if (!switchCashCoupon) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectCashCouponAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchCashCoupon': true,
  //       'switchButtonTF.switchCashCoupon': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectCashCouponAnim: animation.export()
  //       })
  //     }, 550)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectCashCouponAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectCashCouponAnim: animation.export(),
  //         'switchViewTF.switchCashCoupon': false,
  //         'switchButtonTF.switchCashCoupon': false
  //       })
  //     }, 550)
  //   }

  // },
  // switchWaitPickup: function () {
  //   this.testSwitchOn('switchWaitPickup');
  //   this.testButtonOn('switchWaitPickup');

  //   let buttonWaitPickup = this.data.switchButtonTF.switchWaitPickup;
  //   // this.setData({ 'switchButtonTF.switchWaitPickup': !buttonWaitPickup });
  //   let switchWaitPickup = this.data.switchViewTF.switchWaitPickup;
  //   // this.setData({ 'switchViewTF.switchWaitPickup': !switchWaitPickup });

  //   // 动画
  //   if (!switchWaitPickup) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitPickupAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchWaitPickup': true,
  //       'switchButtonTF.switchWaitPickup': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitPickupAnim: animation.export()
  //       })
  //     }, 550)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitPickupAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitPickupAnim: animation.export(),
  //         'switchViewTF.switchWaitPickup': false,
  //         'switchButtonTF.switchWaitPickup': false
  //       })
  //     }, 550)
  //   }
  // },
  // switchWaitPickup: function () {
  //   this.testSwitchOn('switchWaitPickup');
  //   this.testButtonOn('switchWaitPickup');

  //   let buttonWaitPickup = this.data.switchButtonTF.switchWaitPickup;
  //   // this.setData({ 'switchButtonTF.switchWaitPickup': !buttonWaitPickup });
  //   let switchWaitPickup = this.data.switchViewTF.switchWaitPickup;
  //   // this.setData({ 'switchViewTF.switchWaitPickup': !switchWaitPickup });

  //   // 动画
  //   if (!switchWaitPickup) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitPickupAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchWaitPickup': true,
  //       'switchButtonTF.switchWaitPickup': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitPickupAnim: animation.export()
  //       })
  //     }, 550)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitPickupAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitPickupAnim: animation.export(),
  //         'switchViewTF.switchWaitPickup': false,
  //         'switchButtonTF.switchWaitPickup': false
  //       })
  //     }, 550)
  //   }
  // },
  // switchWaitA: function () {
  //   this.testSwitchOn('switchWaitA');
  //   this.testButtonOn('switchWaitA');

  //   let buttonWaitA = this.data.switchButtonTF.switchWaitA;
  //   // this.setData({ 'switchButtonTF.switchWaitPickup': !buttonWaitPickup });
  //   let switchWaitA = this.data.switchViewTF.switchWaitA;
  //   // this.setData({ 'switchViewTF.switchWaitPickup': !switchWaitPickup });

  //   // 动画
  //   if (!switchWaitA) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitAAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchWaitA': true,
  //       'switchButtonTF.switchWaitA': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitAAnim: animation.export()
  //       })
  //     }, 550)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitAAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitAAnim: animation.export(),
  //         'switchViewTF.switchWaitA': false,
  //         'switchButtonTF.switchWaitA': false
  //       })
  //     }, 550)
  //   }
  // }, 
  // switchWaitB: function () {
  //   this.testSwitchOn('switchWaitB');
  //   this.testButtonOn('switchWaitB');

  //   let buttonWaitB = this.data.switchButtonTF.switchWaitB;
  //   // this.setData({ 'switchButtonTF.switchWaitPickup': !buttonWaitPickup });
  //   let switchWaitB = this.data.switchViewTF.switchWaitB;
  //   // this.setData({ 'switchViewTF.switchWaitPickup': !switchWaitPickup });

  //   // 动画
  //   if (!switchWaitB) { // 打开动画 
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 500,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation;
  //     // 先在y轴偏移，然后用step()完成一个动画
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitBAnim: animation.export(),
  //       // 改变view里面的Wx：if
  //       'switchViewTF.switchWaitB': true,
  //       'switchButtonTF.switchWaitB': true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitBAnim: animation.export()
  //       })
  //     }, 550)
  //   } else { // 关闭动画
  //     let that = this;
  //     let animation = wx.createAnimation({
  //       duration: 1000,
  //       timingFunction: 'linear'
  //     })
  //     that.animation = animation
  //     animation.translateY(550).step()
  //     that.setData({
  //       ejectWaitBAnim: animation.export()

  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       that.setData({
  //         ejectWaitBAnim: animation.export(),
  //         'switchViewTF.switchWaitB': false,
  //         'switchButtonTF.switchWaitB': false
  //       })
  //     }, 550)
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

go:function(){
  wx.navigateTo({
    url: 'timeline/timeline',
  })
},
goto: function () {
  wx.navigateTo({
    url: 'mynews/mynews',
  })
},
  gotous: function () {
    wx.navigateTo({
      url: 'aboutus/aboutus',
    })
  },
  qiandao: function () {
    wx.navigateTo({
      url: 'qiandao/qiandao',
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
    this.getFeatherValue();
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
    wx.setBackgroundColor({
      backgroundColorTop: '#fffff',
      backgroundColorBottom: '#fffff',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
