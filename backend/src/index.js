const express = require('express')
require('./db/mongoose')
const app = express()
const userRouter = require("./routes/user")
const watchListRouter = require("./routes/watchlist")
const port = process.env.PORT || 8000
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})
app.use(express.json())
app.use(userRouter)
app.use(watchListRouter)


app.listen(port ,() => {
    console.log("Server Listening on port: " + port)
})