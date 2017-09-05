var app=getApp();
var bsurl = require('../../../utils/bsurl.js');
Page({
    data: {
        list:[],
        subcount:{},
        loading:true,
        avatarUrl: null,
        pictures:['https://p0.meituan.net/movie/ea4ac75173a8273f3956e514a4c78018253143.jpeg',
          'https://p0.meituan.net/movie/5d4fa35c6d1215b5689257307c461dd2541448.jpeg',
          'https://p0.meituan.net/movie/0c49f98a93881b65b58c349eed219dba290900.jpg',
          'https://p1.meituan.net/movie/45f98822bd15082ae3932b6108b17a01265779.jpg',
          'https://p1.meituan.net/movie/722de9a7b0c1f9c262162d87eccaec7c451290.jpg',
          'https://p0.meituan.net/movie/cb9be5bbedb78ce2ef8e83c93f83caca474393.jpg',
          'https://p1.meituan.net/movie/a852b992cdec15319c717ba9fa9b7a35406466.jpg',
          'https://p1.meituan.net/movie/dc1f94811793e9c653170cba7b05bf3e484939.jpg'
        ]
    },
    onLoad: function () {

    },
    onShow: function () {
        console.log("me show----------")
     },
    previewImage: function (e) {
      var that = this,
        //获取当前图片的下表
        index = e.currentTarget.dataset.index,
        //数据源
        pictures = this.data.pictures;
      wx.previewImage({
        //当前显示下表
        current: pictures[index],
        //数据源
        urls: pictures
      })
    }

})