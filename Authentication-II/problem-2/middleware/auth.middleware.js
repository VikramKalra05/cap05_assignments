const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const auth = async (req,res,next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(400).send({ "err": "No token provided" });
    }

    jwt.verify(token, "blogger", (err, decoded) => {
        if (err) {
            return res.status(400).send({ "err": "Invalid token" });
        }

        req.user = decoded;
        next();
    });
        
}

module.exports = {
    auth
}