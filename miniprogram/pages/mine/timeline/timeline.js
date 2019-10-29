// pages/timeline/timeline.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    yumaoTimeLine: [
      // {
      //   id:0,
      //   time: '2019-10-25',
      //   event: '签到',
      //   value: '羽毛值 + 1'
      // },
    ],
  },
gettimeLine:function(){
  var time = wx.getStorageSync('signHistory');
  console.log(time[0].signTime);
  for (let i = 0; i < time.length; i++) {
    let dataName = 'yumaoTimeLine[' + i + '].time';
    let eventName = 'yumaoTimeLine[' + i + '].event';
    let valueName = 'yumaoTimeLine[' + i + '].value';
    let idName = 'yumaoTimeLine[' + i + '].id';
    this.setData({ 
      [dataName]: time[i].signTime,
      [eventName]:'签到',
      [valueName]: '羽毛值＋1',
      [idName]: i
}
      
      );
  }
  // this.setData({

  // })
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.gettimeLine();
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