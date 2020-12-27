require('./database')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var Form = require('./controllers/FormController')

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(7000,()=>console.log('Server started at :7000'))


app.use('/Form',Form)