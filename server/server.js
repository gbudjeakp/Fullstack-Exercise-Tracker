require('dotenv').config({ path: 'env' })
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { join } = require("path");

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(join(__dirname, "public")));


const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const uri = process.env.MONGO_URL

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongo DB succesfully set up')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
