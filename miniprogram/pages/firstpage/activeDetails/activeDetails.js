// pages/firstpage/activeDetails/activeDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imagesId:'',
      activeId:'',
      username: "",
      tel: "",
      qq: "",
    message: [
    ],
  },
  onChange:function(event){
    console.log(event)
    var message = event.detail.value;
    var messageName = event.target.id;
    this.setData({
      [messageName]: message,
    })
  },
  showWarnInfo: function (title) {
    wx.showToast({
      title: title,
      icon: 'none'
    })
  },
//提交报名信息
  submit: function (e,username, tel, qq, activeId) {
    let that = this;
    if (this.data.username == "" || this.data.username == " " || this.data.username == null) {
      this.showWarnInfo('请填写姓名');
      return;
    } 
    if (this.data.tel == "" || this.data.tel == " " || this.data.tel == null) {
      this.showWarnInfo('请填写电话');
      return;
    }
    if (this.data.qq == "" || this.data.qq == " " || this.data.qq == null) {
      this.showWarnInfo('请填写QQ');
      return;
    }
    wx.request({
      url: 'https://hanjun.red:8085/insertOneActiveSignup',
      method: 'post',
      data: ({
        userName: this.data.username,
        userTel: this.data.tel,
        userQQ: this.data.qq,
        activeID: this.data.activeId
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        if (res.data == false) {
          wx.showToast({
            title: '请填写完数据',
            icon: 'none',
          });
          return false;
        }
        else {
          wx.showToast({
            title: '提交成功！',
          })
        }
        that.setData({
          username: '',
          grander: '',
          tel: '',
          qq: '',
          address: ''
        });
        console.log(res.data);
      },
      fail: function (fal) {
        wx.showToast({
          title: '失败！！',
          icon: 'none',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)    //获得获得的ID，与图片
    this.setData({
      imagesId:options.img,
      activeId:options.id
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