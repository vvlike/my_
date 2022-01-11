/*
 * @Author: your name
 * @Date: 2022-01-11 21:45:56
 * @LastEditTime: 2022-01-11 21:47:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \code\格式化时间.js
 */
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH-mm-ss')

console.log(dt);