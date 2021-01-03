require('dotenv').config({ path: 'env' })
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Use this once everything has been tested to work
// const uri = process.env.ATLAS_URI

const uri = process.env.MONGO_URL
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongo DB succesfully set up')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
