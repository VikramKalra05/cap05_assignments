const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {
    const {token} = req.query;

    jwt.verify(token, "myntra", (error, decoded) => {
        console.log(decoded);

        if(decoded){
            next();
        }else{
            res.status(400).send({'error': error})
        }
        
    })
}

module.exports = {
    auth
}