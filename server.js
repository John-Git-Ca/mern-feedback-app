const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./database/database.js')
const routes = require('./routes/routes.js')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.get('/', (req, res) => {
  res.json('hello there')
})

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}...`)
})