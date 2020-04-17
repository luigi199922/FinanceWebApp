const jwt = require('jsonwebtoken')
const User = require("../models/User")

const auth = async (req,res,next) => {
    try{
        const token = req.headers("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "welcometothethunderdome")
        const user = await User.findOne({_id: decoded._id, "tokens.token": token })
        
        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    }catch(e){
        res.status(401).send("Endpoint requires Authentication")
    }
}
module.exports = auth