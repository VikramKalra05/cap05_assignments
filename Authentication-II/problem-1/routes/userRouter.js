const express = require("express");
const { UserModel } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const {email, password, age, username} = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({email, password: hash, age, username});
            await user.save();
            res.status(200)
            res.send({"msg":"New user has been created"});
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg": error})
    }
})

userRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, (err, result) => {
                if(result){
                    const token = jwt.sign({ email }, "myntra", { expiresIn: '1h' });
                    res.status(200).send({"msg": "Login Successful", "token": token})
                }else{
                    res.status(200).send({"msg": "Wrong Password"})
                }
            })
        }else{
            res.status(200).send({"msg": "No user Found"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"error": error});
    }
})

module.exports = {
    userRouter
}