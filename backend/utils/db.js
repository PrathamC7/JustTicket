const mysql = require('mysql2')
const pool = mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'200802',
        database:'movies_review_system'
    }
)

module.exports = pool