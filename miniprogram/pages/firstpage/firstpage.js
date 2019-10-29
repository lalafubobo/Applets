Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [
    ],
    goods: [
    ],
    Coupon: [

    ],
    active: 0,
    rule: '游戏规则',
    // 优惠券列表
    vou: [
    ],
    // 优惠券的数量
    vouNum: [
    ],
    actives: [
    ],
    message: [

    ],
    showBuyModal:"",
    targets:"",
    username: "",
    grander: "",
    tel: "",
    qq: "",
    address: "",
    shopid: "",
  },
  //跳转到活动报名页面
  jumpActive:function(e){
    var imageId=e.currentTarget.dataset.img;
    var id=e.currentTarget.dataset.id
    console.log(imageId)
      wx.navigateTo({
        url: `/pages/firstpage/activeDetails/activeDetails?img=${imageId}&id=${id}`,
      })
  },
  // 获取优惠券的方法
  getvou: function (e) {
    console.log('获取优惠券');
    var that = this;
    // 获取点击的优惠券的ID
    var id = e.currentTarget.dataset.id;
    parseInt(id);
    // console.log(id);
    let remoteServer = wx.getStorageSync('remoteServer');
    let userID = wx.getStorageSync('userInfo').userID;
    let userInfo = wx.getStorageSync('userInfo');
    for (let i = 0; i < that.data.vou.length; i++) {
      if (that.data.vou[i].cashCouponID == id && that.data.vou[i].type==0) {
        if (that.data.vou[i].featherValue > userInfo.userFeatherValue) {
          wx.showToast({
            title: '您当前羽毛值不足，快快回收挣取羽毛值吧！',
            icon:'none'
          })
          return;
        }
        // console.log(that.data.vou[i]);
        var cw = "vou[" + i + "].type";
        var num = "vou[" + i + "].number";
        this.setData({
          [cw]: 1,
          [num]: that.data.vou[i].number-1
        })
        // console.log(cw);
        // 请求远程获取
        wx.request({
          url: remoteServer+'/saleCoupon',
          method: 'post',
          data: {
            userID: userID,
            couponID:id
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // .POST的默认值为 'content-type': 'application/x-www-form-urlencoded'
          },
          success(res) {
            console.log(res.data);
            // 更新用户信息
            wx.request({
              url: remoteServer+ '/user/sync',
              method:'post',
              data:{
                userID:userID
              },
              header:{
                'content-type': 'application/x-www-form-urlencoded'
              },
              success(res){
                console.log(res.data);
                wx.setStorageSync('userInfo', res.data);
              }
            })
          },
          fail(res){
            that.setData({
              [cw]: 0,
            });
          }
        });

      }
    }
  },
  look: function () {
    // wx.navigateTo({
    //   url: 'BabyDetails/BabyDetails?id=1',
    // })
    wx.showToast({
      title: '商品正在入库，敬请期待',
      icon:'none'
    })
  },

  //点击热门活动
  // test:function(){
  //   wx.showToast({
  //     title: '尽请期待',
  //     icon:'none'
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexPageBigPics();
    wx.cloud.init();
    this.getActive();
     this.getAllShop();
    this.getGoods();
  },
  // 生成优惠券的数量
  countCouponNum: function () {
    console.log('计算数量')
    let that = this;
    for (let i = 0; i < that.data.Coupon.length; i++) {
      let num = 0;
      let category = 0;
      for (let j = 0; j < that.data.vou.length; j++) {
        if (that.data.Coupon[i].shopID == this.data.vou[j].shopID) {
          num += this.data.vou[j].number;
          category ++;
        }
      }
      // console.log('num:' + num);
      let shopId = "vouNum[" + i + "].shopID";
      let vouNum = "vouNum[" + i + "].num";
      let categoryc ="vouNum["+ i +"].category";
      that.setData({
        [shopId]: that.data.Coupon[i].shopID,
        [vouNum]: num,
        [categoryc]: category,
      });
    }
    console.log("计算结束")
  },
  // 获得首页大图的函数
  getIndexPageBigPics: function () {
    let remoteServer = wx.getStorageSync("remoteServer");
    var that = this;
    wx.request({
      url: wx.getStorageSync("remoteServer") + '/getIndexBigPics',
      method: 'get',
      data: {
        // 此处不需要data
      },
      header: {
        'content-type': 'application/json' // GET默认值.POST的默认值为 'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data);
        // 循环res.data数组，将每一条数据setData
        for (let i = 0; i < res.data.length; i++) {
          let dataName = 'bnrUrl[' + i + '].url';
          that.setData({ [dataName]: res.data[i].imagePath });
        }
      }
    })
  },
  /*得到热门活动数据*/
  getActive: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getActive',
      data: {
        start: this.data.actives.length,
        count: 3
      }
    }).then(res => {
      this.setData({
        actives: this.data.actives.concat(JSON.parse(res.result))
      });
      wx.hideLoading();
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  },
  /*得到商家*/
  getAllShop: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getAllShop',
      data: {
        start: this.data.Coupon.length,
        count: 10
      }
    }).then(res => {
      this.setData({
        Coupon: this.data.Coupon.concat(JSON.parse(res.result))
      });
      wx.hideLoading();
      console.log("获取店铺完成");
      this.getCoupon();
      // console.log(res)

    }).catch(err => {
      console.log(err);
    })
  },
  //得到优惠券
  getCoupon: function () {
    wx.cloud.callFunction({
      name: 'coupon',
    }).then(res => {
      this.setData({
        vou: this.data.vou.concat(JSON.parse(res.result))
      });
      wx.hideLoading();
      // console.log(res);
      console.log("获得优惠券");
      this.countCouponNum();
    }).catch(err => {
      console.log(err);
    })
  },
  //得到鸡毛换糖商品
  getGoods: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getGoods',
      data: {
        start: this.data.goods.length,
        count: 10
      }
    }).then(res => {
      this.setData({
        goods: this.data.goods.concat(JSON.parse(res.result))
      });
      wx.hideLoading();
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  },
  //提交加入我们信息
  onChange: function (event) {
    console.log(event)
    var message = event.detail.value;
    var messageName = event.target.id;
    this.setData({
      [messageName]: message,
    })
    //  console.log(message)
  },
  showWarnInfo:function(title){
      wx.showToast({
        title: title,
        icon:'none'
      })
  },
  submit: function (e, username, grander, tel, qq, address, ) {
    let that = this;
    if (this.data.username == "" || this.data.username==" " || this.data.username==null){
      this.showWarnInfo('请填写姓名');
      return;
    }
    if (this.data.grander == "" || this.data.grander == " " || this.data.grander == null) {
      this.showWarnInfo('请填写性别');
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
    if (this.data.address == "" || this.data.address == " " || this.data.address == null) {
      this.showWarnInfo('请填写地址');
      return;
    }
    wx.request({
      url: 'https://hanjun.red:8085/joinUs',
      method: 'post',
      data: ({
        joinUsName: this.data.username,
        joinUsSex: this.data.grander,
        joinUsPhone: this.data.tel,
        joinUsQQ: this.data.qq,
        joinUsAddress: this.data.address,
        joinUsState: '未审核'
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
        else{
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
  showBuyModal:function(event) {
    // 点击领取
     console.log(event)
    var shopid = event.target.dataset.shopid;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(), // export 方法每次调用后会清掉之前的动画操作。
      showModalStatus: true,
      shopid: shopid,
    })
    console.log(shopid);
    setTimeout(() => {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export() // export 方法每次调用后会清掉之前的动画操作。
      })
      // console.log(this)
    }, 200)

  },
  hideBuyModal() {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
      // console.log(this)
    }.bind(this), 200)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成");
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // 三秒后签到
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.sign())
      }, 2000)
    }).then(res => {
      console.log('延迟签到的线程完成任务');
    })

    // this.sign();
    //this.getAllShop();
    //this.getGoods();
  },
  // 判断用户信息有没有获取完毕
  judgeUserInfo:function(){
    let userID = wx.getStorageSync('userInfo').userID;
    if(userID === undefined){
      console.log("还未加载用户")
      return false;
    }else{
      console.log("已经加载完用户")
      return true;
    }
  },
  // 签到
  sign: function () {
    let that = this;
    // 生成今天的日期
    let date = new Date();
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    let formatDate = year + '-' + mouth + '-' + day;
    console.log('今天的日期：' + formatDate);
    wx.setStorage({
      key: 'todayDate',
      data: formatDate,
    })
    // 获取签到记录
    let remoteServer = wx.getStorageSync('remoteServer');
    let userID = wx.getStorageSync('userInfo').userID;
    // 当还没有加载到UserInfo时候，该线程循环等待
    if (!this.judgeUserInfo()){
      console.log("用户信息获取过慢---------");
      that.setData({
        userInfoLoad:true
      });
      return;
    }else{
      that.setData({
        userInfoLoad: false
      });
    }
    let signHistory = wx.getStorageSync('signHistory');
    if (signHistory){
      // 如果有签到记录，则判断今天有没有签到
      console.log('有签到历史')
      // console.log(signHistory);
      for (let signInfo of signHistory){
        if (signInfo.signTime == formatDate){
          console.log('今天已经签过到了');
          return;
        }
      }
    }
    // 请求后台签到
    wx.request({
      url: remoteServer + '/addOneSign',
      method: 'POST',
      data: {
        userID: userID,
        date: formatDate
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log('签到状态：');
        console.log(res.data);
        wx.showToast({
          title: '签到成功',
        })
        wx.request({
          url: remoteServer + '/getSigns',
          method: 'GET',
          data: {
            userID: userID,
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log('历史签到记录');
            console.log(res.data);
            wx.setStorageSync('signHistory', res.data);
          }
        });
      },
      fail(res){
        wx.showToast({
          title: '网络不佳，签到失败',
          icon:'none'
        })
      }
    });
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
    this.countCouponNum();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //this.getActive();
    // this.getAllShop();
    this.countCouponNum();
    wx.setBackgroundColor({
      backgroundColor: '#ffffff', // 窗口的背景色为白色
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})