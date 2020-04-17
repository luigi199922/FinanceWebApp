const express = require('express')
const app = express()
const port = process.env.PORT || 8000
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})
app.use(express.json())
app.get('/' ,(req, res) => {
    res.send("Hello World")
})

app.listen(port ,() => {
    console.log("Server Listening on port: " + port)
})