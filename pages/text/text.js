// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      aa:1,
    content:[
        {
            face:"/images/face1.jpg",
            name: "36.8c1",
            content:"\"不知道\"别人'家'的男朋友会不会给女朋友甩耳光，但我家的男朋友会！不对，从今天起，我已经单身了！该庆祝一下的🙂🙂🙂🙂",
            good_nums:156,
            comment_nums:25,
            share_nums:69
        },
        {
            face: "/images/face2.jpg",
            name: "渔歌浅尝",
            content: "大姑姑家的二姐夫说话哏啾啾总怼人，平辈的表亲们敬他年龄大也没恶意，都一笑而过不与他计较……去年二姐夫在近郊租厂房做生意，顺便侍弄了一个小菜园，经常把吃不完的应季蔬菜送到老丈母家让大伙儿自提。大姑姑心疼女儿女婿“以后别种这么多，又吃不完……”“吃不完给狗吃！”老太太气的愣是小半年没让他登门……",
            good_nums: 156,
            comment_nums: 25,
            share_nums: 69
        }
        ,
        {
            face: "/images/face3.gif",
            name: "渔歌浅尝",
            content: "大姑姑家的二姐夫说话哏啾啾总怼人，平辈的表亲们敬他年龄大也没恶意，都一笑而过不与他计较……去年二姐夫在近郊租厂房做生意，顺便侍弄了一个小菜园，经常把吃不完的应季蔬菜送到老丈母家让大伙儿自提。大姑姑心疼女儿女婿“以后别种这么多，又吃不完……”“吃不完给狗吃！”老太太气的愣是小半年没让他登门……",
            good_nums: 156,
            comment_nums: 25,
            share_nums: 69
        }
        ,
        {
            face: "/images/face4.jpg",
            name: "渔歌浅尝",
            content: "大姑姑家的二姐夫说话哏啾啾总怼人，平辈的表亲们敬他年龄大也没恶意，都一笑而过不与他计较……去年二姐夫在近郊租厂房做生意，顺便侍弄了一个小菜园，经常把吃不完的应季蔬菜送到老丈母家让大伙儿自提。大姑姑心疼女儿女婿“以后别种这么多，又吃不完……”“吃不完给狗吃！”老太太气的愣是小半年没让他登门……",
            good_nums: 156,
            comment_nums: 25,
            share_nums: 69
        }
        ,
        {
            face: "https://pic.qiushibaike.com/system/avtnew/3424/34246786/medium/20180324235133.JPEG",
            name: "渔歌浅尝",
            content: "小时候，看电视电影里男女亲热的镜头，总是男人把女人往下一压，所以我就琢磨着，难道女人的那个东东就像肚脐一样朝上长着吗？直到高考后第一次看到了岛国片…[捂脸][捂脸][捂脸]",
            good_nums: 156,
            comment_nums: 25,
            share_nums: 69
        },
        {
            face: "https://pic.qiushibaike.com/system/avtnew/3424/34246786/medium/20180324235133.JPEG",
            name: "渔歌浅尝",
            content: "小时候，看电视电影里男女亲热的镜头，总是男人把女人往下一压，所以我就琢磨着，难道女人的那个东东就像肚脐一样朝上长着吗？直到高考后第一次看到了岛国片…[捂脸][捂脸][捂脸]",
            good_nums: 156,
            comment_nums: 25,
            share_nums: 69
        },
        {
            face: "https://pic.qiushibaike.com/system/avtnew/3424/34246786/medium/20180324235133.JPEG",
            name: "渔歌浅尝",
            content: "小时候，看电视电影里男女亲热的镜头，总是男人把女人往下一压，所以我就琢磨着，难道女人的那个东东就像肚脐一样朝上长着吗？直到高考后第一次看到了岛国片…[捂脸][捂脸][捂脸]",
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
      console.log("onLoad");
      wx.showLoading({
          title: '正在加载数据...',
        })
    //   wx.startPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("onReady");
      wx.hideLoading();
    //   wx.stopPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      console.log("onShow");
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
      var aa = this.data.aa+1;
      var content = this.data.content;
      var face ="https://pic.qiushibaike.com/system/avtnew/3431/34315653/medium/20180307151550.JPEG";
      var name="111见笑了哈";
      var content1 ="111我有个同学刘哥，是个职业鉴婊师。中级鉴婊满七年的他终于在上个月成功申请到高级鉴婊资格的考试资格，如果明后年的两次考试能过，他将迈上人生巅峰。以此刘哥请我们几个吃饭庆祝，酒足饭饱后，刘哥为了我们今后的婚姻避免误入歧途，免费给我们每人鉴婊一次，如果是婊，直接分手。然后，妈蛋的，你能想到晚上7个人陪刘哥吃饭，6个人现在都单身了吗？现在只有一份鉴婊评估没出了，我内心忐忑……";
      var good_nums=100;
      var comment_nums=100;
      var share_nums=100;
      this.data.content.unshift({
          face: face, 
          name: aa+name, 
          content: aa+content1,
          good_nums:aa+150,
          comment_nums:aa+150,
          share_nums:aa+200});
      this.setData({ content: this.data.content, aa: aa},function(){
          wx.stopPullDownRefresh();
      });
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