module.exports = {
  lintOnSave:false,
  devServer:{
    //由于没有过挂在在Tomcat上，会出现跨域问题，因此需要使用代理服务器
    proxy:"http://localhost:999"
  }
}
