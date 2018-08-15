// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content: [
          {
              face: "/images/face1.jpg",
              name: "36.8c1",
              title: "腾讯视频",
              src:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
              good_nums: 156,
              comment_nums: 25,
              share_nums: 69
          },
          {
              face: "/images/face2.jpg",
              name: "渔歌浅尝",
              title: "茶啊二中 第4季 第1集",
              src: "http://124.14.21.157/vhot2.qqvideo.tc.qq.com/A27AsbhoHRIr5BOnehNpoop0ZB-mtNrcxMem2XoHN1Lo/w0622ej9bri.p712.2.mp4?sdtfrom=v1010&guid=0e1b385c773fbc26390d69af9abe5937&vkey=4A02DF7869F5621086C9332D2BB7766B13D40082AE4407142EC02FDDC18FC083DC6FF7803BBFFFAA42CB4FEEDE264635387CDC478C9435916D29C05A6A7C37E481CEFA8D31EC8930B8F4CAC9E45DD2474C0179D8515B5570E0C9137A0C159500420CE25A0F0F47C420330C0308190F62556F853484E37BA8",
              good_nums: 156,
              comment_nums: 25,
              share_nums: 69
          }
          ,
          {
              face: "/images/face3.gif",
              name: "渔歌浅尝",
              title: "茶啊二中 第4季 第2集",
              src: "http://124.14.21.159/vhot2.qqvideo.tc.qq.com/Ac6to33_hWo2k8kb4a6yy7OqkEPxZ9z3RYMK6Ely6EY8/q0621syoqqa.p712.2.mp4?sdtfrom=v1010&guid=7fe969b5fb97d3adc8c579b1b6720579&vkey=B913A12F6543FA8311C15F79F684F593B0E307A661C78CB6DC51AC2813F1B3D9B76791A05DA92090B50F1CD2641859D4506C08D8DED39CA64BB98B2FF9929EB656149416B4B239A3364E017545EC0B071B15F228CB028401CF4307D104B1DA1809F021412CB42AA02AB538B15710650C35F9A6694B080BB5",
              good_nums: 156,
              comment_nums: 25,
              share_nums: 69
          },
          {
              face: "/images/face3.gif",
              name: "渔歌浅尝",
              title: "广告",
              src: "http://124.14.21.159/vhot2.qqvideo.tc.qq.com/Ac6to33_hWo2k8kb4a6yy7OqkEPxZ9z3RYMK6Ely6EY8/q0621syoqqa.p712.2.mp4?sdtfrom=v1010&guid=7fe969b5fb97d3adc8c579b1b6720579&vkey=B913A12F6543FA8311C15F79F684F593B0E307A661C78CB6DC51AC2813F1B3D9B76791A05DA92090B50F1CD2641859D4506C08D8DED39CA64BB98B2FF9929EB656149416B4B239A3364E017545EC0B071B15F228CB028401CF4307D104B1DA1809F021412CB42AA02AB538B15710650C35F9A6694B080BB5",
              good_nums: 156,
              comment_nums: 25,
              share_nums: 69
          }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
          title: '正在加载数据...',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.hideLoading();
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