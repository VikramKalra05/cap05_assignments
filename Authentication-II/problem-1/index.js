const express = require("express");
const { connection } = require("./db");
const dotenv = require("dotenv").config()
const { userRouter } = require("./routes/userRouter");
const { auth } = require("./middleware/auth.middleware");
const { BlacklistModel } = require("./models/blacklistModel")

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", userRouter); 

app.get("/", (req, res) => {
    res.status(200).send("Home Page");
})

app.get("/products",auth,(req,res) => {
    res.status(200).send({"data": "Products data ..."})
})

app.get("/logout", async (req, res) => {
    const token = req.headers.authorization;

    try {
        const blacklist = new BlacklistModel({token});
        await blacklist.save();
        res.status(200).send({"msg": "You have logged out successfully"});
    } catch (error) {
        res.status(400).send({"err": error});
    }
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Express server running at ${PORT} and db is connected`);
    } catch (error) {
        console.log(error);
    }
})