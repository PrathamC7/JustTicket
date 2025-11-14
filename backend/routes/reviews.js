const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')

router.post('/add',(request, response)=>{
    const {movie_id, review, rating, user_id} = request.body
    const sql = "INSERT INTO reviews(movie_id, review, rating, user_id)  VALUES (?,?,?,?)"
    pool.query(sql, [movie_id, review, rating, user_id],(error, data)=>{
        response.send(result.createResult(error, data))
    })
})


module.exports = router