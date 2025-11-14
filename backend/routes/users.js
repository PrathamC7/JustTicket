const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.post('/register',(request, response)=>{
    const {first_name, last_name, email, password, mobile, year, month, day} = request.body
    const birthDate = new Date(year, month-1, day)
    const sql = "INSERT INTO users(first_name, last_name, email, password, mobile, birth)  VALUES (?,?,?,?,?,?)"
    pool.query(sql, [first_name, last_name, email, password, mobile, birthDate],(error, data)=>{
        response.send(result(error, data))
    })
})
router.post('/login',(request, response)=>{
    const {email, password} = request.body
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?"
    pool.query(sql, [email, password],(error, data)=>{
        if(data.length != 0) response.send(result("success", data[0]))
        else response.send(result("failed", "Check username or password"))
    })
})


module.exports = router