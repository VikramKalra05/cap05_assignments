const express = require("express");
const { connection } = require("./db");
const dotenv = require("dotenv").config()
const { userRouter } = require("./routes/userRouter");
const { auth } = require("./middleware/auth.middleware");

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

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Express server running at ${PORT} and db is connected`);
    } catch (error) {
        console.log(error);
    }
})