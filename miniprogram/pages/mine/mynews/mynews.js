// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{ name: '鸡毛信', index: 0 }, { name: '预约/违约', index: 1 }, { name: '祝福', index: 2 }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },

  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
  },

  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.lostShow()
        break
    }
  },
  alreadyShow: function () {
    this.setData({
      alreadyOrder: [{ name: "孩子写给您：", state: "感恩有您！", time: "2019.8.30 14:00", content: "您于8月21日回收的10本书，今已捐献给西部地区希望小学，温暖了5个孩子。",wish:"您鼓舞了我们所有人，继续这项伟大的工作！",  }]
    })
  },

  waitPayShow: function () {
    this.setData({
      waitPayOrder: [{ name: "预约通知", state: "期待与您相遇", time: "2019.9.14 9:30", content: "预约成功！", wish: "您已成功预约2019年9月14日18：00书本回收。椒糖将准时为您服务！", }, { name: "违约通知", state: "椒糖伤心了", time: "2019.9.14 18:30", content: "扣取羽毛值：－30", wish: "您预约的2019年9月14日18：00书本回收。椒糖在30分钟内没有等到您哦！"}]
    })
  },

  lostShow: function () {
    this.setData({
      lostOrder: [{ name: "中秋节快乐！", state: "快乐到家", time: "2018.9.13 12:00", content: "椒糖一直在您身边！", wish: "月圆了，家圆了，肚子圆了，最好钱包也圆了。祝您中秋节快乐！阖家团圆美满！" }],
    })
  },


})

