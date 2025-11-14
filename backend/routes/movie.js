const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.post('/add',(request, response)=>{
    const {title, year, month, day} = request.body
    const release_date = new Date(year, month-1, day)
    const sql = "INSERT INTO movies(title, release_date)  VALUES (?,?)"
    pool.query(sql, [title, release_date],(error, data)=>{
        response.send(result(error, data))
    })
})


module.exports = router