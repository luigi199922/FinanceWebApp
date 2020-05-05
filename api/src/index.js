const app = require('./app.js')
const port = process.env.PORT
app.listen(port ,() => {
    console.log("Server Listening on port: " + port)
})