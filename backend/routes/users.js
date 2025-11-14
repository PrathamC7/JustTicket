const express = require('express')
const router = express.Router()
const pool = require('../utils/db')
const result = require('../utils/result')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const bcrypt = require('bcrypt')

router.post('/register', async (request, response) => {
    const {first_name, last_name, email, password, mobile, year, month, day} = request.body
    // console.log(first_name, last_name, email, password, mobile, year, month, day)
    const birthDate = new Date(year, month-1, day)
    const sql = "INSERT INTO users(first_name, last_name, email, password, mobile, birth)  VALUES (?,?,?,?,?,?)"
    try {
        const hashPassword = await bcrypt.hash(password, config.saltRounds)
        pool.query(sql, [first_name, last_name, email, hashPassword, mobile, birthDate], (error, data) => {
            if(error){
                console.log(error)
                response.send(result.createResult('Registration Failed'))
            }
            else
                response.send(result.createResult(null, data))
        })
    }
    catch (error) {
        response.send(result.createResult('Registration failed'))
    }
})


router.post('/login', (request, response) => {
    const { email, password } = request.body
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email], async (error, data) => {
        if (data != '') {
            try{
                const dbUser = data[0]
                const userValid = await bcrypt.compare(password, dbUser.password)
                if (userValid) {
                    // body part inside the jwt that needs to be encrypted
                    const payload = {
                        uid: dbUser.uid
                    }
                    // create the jwt token
                    const token = jwt.sign(payload, config.secret)
                    const user = {
                        token: token,
                        name: dbUser.first_name,
                        email: dbUser.email
                    }
                    response.send(result.createResult(null, user))
                }
                else
                    response.send(result.createResult('Invalid Password'))
            }catch(error){
                 response.send(result.createResult('Login Failed'))
                }

        }
        else
            response.send(result.createResult('Invalid email'))
    })
})

// router.put('/update', (request, response)=>{
//     const {first_name, last_name, email, mobile, year, month, day} = request.body
//     const sql = "UPDATE reviews SET ";
// })

module.exports = router
