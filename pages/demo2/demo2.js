// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:["寿司","意大利面","汉堡","饺子"],

    listObj:[
      {title:"宋博文的摸鱼生活",time:"2021-6-4"},
      {title:"赵家俊的打工生活",time:"2021-3-4"},
      {title:"李伯雄的糜烂生活",time:"2021-12-4"}
    ]
  },
  navBack:function () {
    wx.navigateBack()
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})