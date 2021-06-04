// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"宋博文",
    class:"",
    hei:"100",
    wid:"300",
    bgColor:"red"
  },
  btnTap:function () {
    this.setData({
      name:"司凯乐",
      class:"小程序学习",
      hei:"200",
      wid:"600",
      bgColor:"pink"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log( wx.getSystemInfoSync().model) 
    //  wx.showLoading({
    //    title: '数据加载中',
    //  })
    //  setTimeout(res=>{
    //    wx.hideLoading()
    //  },1500)
    //提交的
    // wx.showToast({
    //   title: "提交成功",
    // })
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