const app = getApp()
Page({
  data: {
    "ico": [{
      'url': "../../images/appointment.jpg"
    }],
    array: ['', '书本', '衣物','纸壳'],
    objectArray: [{
      id: 0,
      name: '书本'
    },
    {
      id: 1,
      name: '衣物'
    },
      {
        id: 2,
        name: '纸壳'
      }
    ],
    indexA: 0,
    number: ['', '5-10本', '10-15本', '15-20本', '20-25本', '25-30本'],
    objectNumber: [{
      id: 0,
      name: '5-10本'
    },
    {
      id: 1,
      name: '10-15本'
    },
    {
      id: 2,
      name: '15-20本'
    },
    {
      id: 3,
      name: '20-25本'
    },
    {
      id: 4,
      name: '25-30本'
    },
    ],
    indexB: 0,
    number2: ['', '1-3斤', '3-6斤', '6-9斤', '9-12斤', '12-15斤'],
    objectNumber: [{
      id: 0,
      name: '1-3斤'
    },
    {
      id: 1,
      name: '3-6斤'
    },
    {
      id: 2,
      name: '6-9斤'
    },
    {
      id: 3,
      name: '9-12斤'
    },
    {
      id: 4,
      name: '12-15斤'
    },
    ],
    indexC: 0,
    number3: ['', '1-3斤', '3-6斤', '6-9斤', '9-12斤', '12-15斤'],
    objectNumber: [{
      id: 0,
      name: '1-3斤'
    },
    {
      id: 1,
      name: '3-6斤'
    },
    {
      id: 2,
      name: '6-9斤'
    },
    {
      id: 3,
      name: '9-12斤'
    },
    {
      id: 4,
      name: '12-15斤'
    },
    ],
    indexD: 0,
    multiArray: [
      ['南区', '北区'],
      ['36栋', '37栋', '41栋', '42栋', '43栋']
    ],
    objectMultiArray: [
      [{
        id: 0,
        name: '南区'
      },
      {
        id: 1,
        name: '北区'
      }
      ],
    ],
    multiIndex: [0, 0],
    modalHidden: true,
    date: '2019-09-01',
    time: '12:00',
    longitude: 116.4965075,
    latitude: 40.006103,
    makers:'',
    speed: 0,
    accuracy: 0,
    tel: '',
    qq: '',
    type: '书本',
    amount: '',
    address: '',
    numberTmp: '',
    amount2: '',
    position:[],
    covers: [
    //   {
    //   latitude: 23.099994,
    //   longitude: 113.344520,
    //   iconPath: '/images/localtion.png'
    // }, {
    //   latitude: 23.099994,
    //   longitude: 113.304520,
    //   iconPath: '/images/localtion.png'
    // }
    ],
    markers:[]
  },
  // 自动填充
  autoInput: function () {
    var that = this;
    console.log('自动填充');
    if (wx.getStorageSync('userPhone') != "") {
      let name = 'tel';
      that.setData({
        [name]: wx.getStorageSync('userPhone')
      });
    }
    if (wx.getStorageSync('userQQ') != "") {
      let name = 'qq';
      that.setData({
        [name]: wx.getStorageSync('userQQ')
      });
    }
    if (wx.getStorageSync('userAddr') != "") {
      let name = 'address';
      that.setData({
        [name]: wx.getStorageSync('userAddr')
      });
    }
  },
  aa: function (event) {
    console.log(event)
    this.setData({
      tel: event.detail.value
    })
  },
  address: function (event) {
    this.setData({
      address: event.detail.value
    })
  },
  bb: function (event) {
    console.log(event)
    this.setData({
      qq: event.detail.value
    })
  },
  scan:function(e){
    wx.scanCode({
     success:function(res){
        console.log(res);
     }
    })
  },
  bindPickerChangeA: function (e) {
    console.log(e)
    //var indexA=e.detail.value;
    //var indexAid=e.target.id;
    console.log('picker发送选择改变，携带值为', e.detail.value),
      console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value]),
      this.setData({
        indexA: e.detail.value,
        type: this.data.array[e.detail.value]

      })
  },
  bindPickerChangeB: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log('picker发送选择改变，携带值为', this.data.number[e.detail.value]),
      this.setData({
        indexB: e.detail.value,
        amount: this.data.number[e.detail.value]
      })
  },
  bindPickerChangeC: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value),
      console.log('picker发送选择改变，携带值为', this.data.number2[e.detail.value]),
      this.setData({
        indexC: e.detail.value,
        amount2: this.data.number2[e.detail.value]
      })
  },
  bindPickerChangeD: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value),
      console.log('picker发送选择改变，携带值为', this.data.number3[e.detail.value]),
      this.setData({
        indexD: e.detail.value,
        amount3: this.data.number3[e.detail.value]
      })
  },
  bindMultiPickerChange: function (e) {
    console.log(e);
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log(e)
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value, this.data.multiArray[e.detail.column][e.detail.value]);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['36栋', '37栋', '41栋', '42栋', '43栋'];
            break;
          case 1:
            data.multiArray[1] = ['36栋', '37栋', '41栋', '42栋', '43栋'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  buttonTap: function (e, type, date, time, amount, amount2, numberTmp, indexA, qq) {
    wx.setStorageSync("userPhone", this.data.tel);
    wx.setStorageSync("userQQ", this.data.qq);
    wx.setStorageSync("userAddr", this.data.address);
    if (this.data.indexA <= 1) { numberTmp = this.data.amount }
    else if (this.data.indexA == 2) {
      numberTmp = this.data.amount2
    }else{
      numberTmp = this.data.amount3
    }
    if (this.data.address == "" || this.data.qq == "" || this.data.tel == "" || this.data.type == "" || numberTmp == "") {
      wx.showToast({
        title: '请填写完数据',
        icon: 'none',
      });
      return false;
    }
    // console.log(numberTmp)
    // console.log(this.data.amount)
    // console.log(this.data.date+','+this.data.time)
    console.log("提交预约");
    wx.request({
      url: wx.getStorageSync('remoteServer') + '/addOneOrder',
      method: 'post',
      data: ({
        trashType: this.data.type,
        trashNumber: numberTmp,
        userPhone: this.data.tel,
        userQQ: this.data.qq,
        userID: wx.getStorageSync('userInfo').userID,
        userName: wx.getStorageSync('userInfo').userName,
        orderState: '未受理',
        userAddress: this.data.address,
        orderTime: this.data.date + ',' + this.data.time,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        wx.showToast({
          title: '成功！',
        })
        if (res.data == false) {
          wx.showToast({
            title: '失败！！',
          })
        }
        console.log(res.data);
      },
      fail: function (fal) {
        wx.showToast({
          title: '失败！！',
        })
        console.log(fal)
      }
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 点击取消
   */
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDegree();
    var that = this
    wx.showLoading({
      title: "定位中",
      mask: true
    })
    wx.getLocation({
      type: 'gcj02',
      altitude: true,//高精度定位
      //定位成功，更新定位结果
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        that.setData({
          longitude: longitude,
          latitude: latitude,
          speed: speed,
          accuracy: accuracy
        })
      },
      //定位失败回调
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },
      complete: function () {
        //隐藏定位中信息进度
        wx.hideLoading()
      }

    })
    that.autoInput();
  },
  //返回定位时的位置
  returnAddress: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      altitude: true,//高精度定位
      //定位成功，更新定位结果
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        that.setData({
          longitude: longitude,
          latitude: latitude,
          speed: speed,
          accuracy: accuracy
        })
      },
      //定位失败回调
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },
      complete: function () {
        //隐藏定位中信息进度
        wx.hideLoading()
      }

    })
  },

  //获得自动回收机的经纬度
  getDegree:function(){
    var that = this
    wx.getLocation({
      type: 'gcj02',
      altitude: true,//高精度定位
      //定位成功，更新定位结果
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        //console.log(latitude);
       // console.log(longitude);
       wx.request({
        url: wx.getStorageSync('remoteServer') + '/getNearbyMachine', 
       method:'get',
        data:{
          longitude: longitude,
          latitude: latitude
        },
        header: {
        'content-type': 'application/json' // 默认值
        },
        success(res) {
        console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            let latitude = 'markers[' + i + '].latitude';
            let longitude = 'markers[' + i + '].longitude';
            let icon = 'markers[' + i + '].iconPath';
            let name = 'markers[' + i + '].name'
            that.setData({ 
              [latitude]: res.data[i].latitude,
              [longitude]: res.data[i].longitude,
              [icon]: '/images/localtion.png',
              [name]: res.data[i].name,
             });
            // console.log( res.data[i].icon)
          }
         },
      fail(fal) {
        console.log(fal)
      }
    })
      },
      //定位失败回调
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },
      complete: function () {
        //隐藏定位中信息进度
        wx.hideLoading()
      }

    })
   
  },

  //搜索
  // search:function(){
  //   var that = this
  //   wx.chooseLocation({
  //     success: function(res) {
  //      // console.log(res)
  //       var latitude = res.latitude
  //       var longitude = res.longitude
  //   //    console.log(latitude)
  //       wx.getLocation({
  //         type: 'gcj02',
  //         altitude: true,//高精度定位
  //         //定位成功，更新定位结果
  //         success: function (res) {
  //           that.setData({
  //             longitude: longitude,
  //             latitude: latitude,
  //           })
  //           // wx.request({
  //           //   url: wx.getStorageSync('remoteServer') + '/getNearbyMachine',
  //           //   method: 'get',
  //           //   data: {
  //           //     longitude: longitude,
  //           //     latitude: latitude
  //           //   },
  //           //   header: {
  //           //     'content-type': 'application/json' // 默认值
  //           //   },
  //           //   success(res) {
  //           //     console.log(res.data)
  //           //     for (let i = 0; i < res.data.length; i++) {
  //           //       let latitude = 'markers[' + i + '].latitude';
  //           //       let longitude = 'markers[' + i + '].longitude';
  //           //       let icon = 'markers[' + i + '].iconPath';
  //           //       let name = 'markers[' + i + '].name'
  //           //       that.setData({
  //           //         [latitude]: res.data[i].latitude,
  //           //         [longitude]: res.data[i].longitude,
  //           //         [icon]: '/images/localtion.png',
  //           //         [name]: res.data[i].name,
  //           //       });
  //           //       // console.log( res.data[i].icon)
  //           //     }
  //           //   },
  //           //   fail(fal) {
  //           //     console.log(fal)
  //           //   }
  //           // })
  //         },
  //         //定位失败回调
  //         fail: function () {
  //           wx.showToast({
  //             title: "定位失败",
  //             icon: "none"
  //           })
  //         },
  //         complete: function () {
  //           //隐藏定位中信息进度
  //           wx.hideLoading()
  //         }

  //       })
  //     },
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getDegree();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //this.search();
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