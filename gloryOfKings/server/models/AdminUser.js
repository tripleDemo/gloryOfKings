const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: { 
    type: String,
    select: false,
    set(val) {
      return require('bcryptjs').hashSync(val, 10) // 是人家这个包废了，只能用bcryptjs,用法什么差不多
    }
  },
})

module.exports = mongoose.model('AdminUser', schema)