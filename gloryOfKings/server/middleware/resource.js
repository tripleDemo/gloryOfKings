module.exports = options => {
  return async(req, res, next) => {
    //inflection模块转类名，处理单复数转换、下划线等单词格式转换
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}