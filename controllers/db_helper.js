const mysql = require('mysql');
// const config = require('../config');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'root',
  database        : 'ithub'
});
module.exports = pool;