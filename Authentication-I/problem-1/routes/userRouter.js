const express = require("express");
const { UserModel } = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(200)
        res.send({"msg":"New user has been created"});
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg": error})
    }
})

userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email, password});

        if(user){
            const token = jwt.sign({ email }, "myntra");
            res.status(200).send({"msg": "Login Successful", "token": token})
        }else{
            res.status(200).send({"msg": "Wrong Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"error": error});
    }
})

module.exports = {
    userRouter
}