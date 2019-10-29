// pages/BabyDetails/BabyDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Navigation: ['宝贝详情', '科普大世界'],
    currentTab: 0,
    FeatherValue: 30,
    product: "塑料瓶",
    number: '还剩10件',
    information: {
      类别: "可回收垃圾",
      主要材料: "塑料瓶主要是由聚乙烯或聚丙烯等材料并添加了多种有机溶剂后制成的。塑料瓶广泛使用聚酯(PET) 、聚乙烯(PE) 、聚丙烯(PP)为原料，添加了相应的有机溶剂后，经过高温加热后，通过塑料模具经过吹塑、挤吹、或者注塑成型的塑料容器。"
    },
    headline: "废品大翻身",
    line: "————————",
    PlasticBottles_word: "塑料瓶在我们日常生活中随处可见，废弃的塑料瓶可是十分受改造牛人的青睐呢。让我们一起看看他们的成果吧！",
    action: "小花椒们是不是心动了呢？赶快动起手了吧！",
    num: ''
  },
  onClickIcon() {

  },
  onClickButton() {

  },
  NavigationTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  back: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  onInput: function (event) {
    this.setData({
      num: event.detail.value
    })
  },
  onChange: function (event) {
    console.log(this.data.num);
  },
  showBuyModal() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(), // export 方法每次调用后会清掉之前的动画操作。
      showModalStatus: true
    })
    setTimeout(() => {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()  // export 方法每次调用后会清掉之前的动画操作。
      })
      console.log(this)
    }, 200)
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
      backgroundColorTop: '#fffff', // 顶部窗口的背景色为红
      backgroundColorBottom: '#fffff', // 底部窗口的背景色为绿
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})