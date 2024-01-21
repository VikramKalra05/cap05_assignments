const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklistModel");

const auth = async (req,res,next) => {
    const token = req.headers.authorization;

    try {
        const found = await BlacklistModel.findOne({token});

        if(found){
            res.status(200).send({'msg': "Please login again"})
        }else{
            jwt.verify(token, "myntra", (error, decoded) => {
                console.log(decoded);
    
                if(decoded){
                    next();
                }
                
            })
        }
    } catch (error) {
        res.status(400).send({'error': error})
    }
    

    
}

module.exports = {
    auth
}