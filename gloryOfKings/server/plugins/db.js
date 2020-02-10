module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // 把某一个文件夹下面的所有文件引入进来使用一遍
  require('require-all')(__dirname + '/../models')
}