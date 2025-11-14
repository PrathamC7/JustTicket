const express = require('express')
const app = express()
const userRouter = require('./routes/users')
const movieRouter = require('./routes/movie')

// app.use(express.json())
app.use(express.json())
app.use('/user',userRouter)
app.use('/movie',movieRouter)
app.listen(4000,'0.0.0.0',()=>{
    console.log("Sever started at port 4000")
})