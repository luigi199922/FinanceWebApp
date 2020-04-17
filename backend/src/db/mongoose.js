const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/finance-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
},(error)=>{
    if(error){
        return console.log("Mongoose Unable to Connect to MongoDB")
    }
})