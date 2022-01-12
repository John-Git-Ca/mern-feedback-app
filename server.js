const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./database/database.js')
const routes = require('./routes/routes.js')
const dotenv = require('dotenv')
const path = require("path")

dotenv.config()

const port = process.env.PORT || 8000

connectDB()

app.use(express.json())
app.use(cors())
app.use('/', routes)
app.use(express.static(path.join(__dirname, "client", "build")))

app.get('/', (req, res) => {
  res.json('hello there')
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, ()=>{
  console.log(`app is listening on port ${port}...`)
})