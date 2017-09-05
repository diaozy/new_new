var app = getApp()
Page({
  data: {
    imgalist:
    [
      'http://img3.imgtn.bdimg.com/it/u=592142882,2283064789&fm=27&gp=0.jpg',
      'https://p0.meituan.net/movie/5d4fa35c6d1215b5689257307c461dd2541448.jpeg',
      'https://p0.meituan.net/movie/0c49f98a93881b65b58c349eed219dba290900.jpg',
      'https://p1.meituan.net/movie/45f98822bd15082ae3932b6108b17a01265779.jpg',
      'https://p1.meituan.net/movie/722de9a7b0c1f9c262162d87eccaec7c451290.jpg',
      'https://p0.meituan.net/movie/cb9be5bbedb78ce2ef8e83c93f83caca474393.jpg',
      'https://p1.meituan.net/movie/a852b992cdec15319c717ba9fa9b7a35406466.jpg',
      'https://p1.meituan.net/movie/dc1f94811793e9c653170cba7b05bf3e484939.jpg'
    ]
  },
  /**   
   * 预览图片  
   */
  
  previewImage : function (e) {
    var current = e.target.dataset.src;
    console.log("aaabbb")
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgalist // 需要预览的图片http链接列表  
    })
  }
})