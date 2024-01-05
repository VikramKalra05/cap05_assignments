const express = require("express");
const bookRoutes = express.Router();
const { BookModel } = require("../models/bookModel")
const validator = require("../middlewares/validator")

bookRoutes.get("/", async (req, res) => {
    try {
        const books = await BookModel.find();
        res.send(books);
    } catch (error) {
        res.send(error)
    }
})

bookRoutes.use("/add", validator)

bookRoutes.post("/add", async (req, res) => {
    const body = req.body;
    try {
        const book = new BookModel(body);
        await book.save();
        res.send("The book has been added successfully");
    } catch (error) {
        res.send(error)
    }
})

bookRoutes.get("/search", async (req,res) => {
    const q = req.query
    try {
        const book = await BookModel.find(q);
        res.send(book);
    } catch (error) {
        res.send(error)
    }
})

bookRoutes.patch("/update/:id", async (req, res) => {
    const {id} = req.params;
    const data = req.body
    try {
        await BookModel.findByIdAndUpdate({_id: id}, data)
        res.send("Book has been updated")
    } catch (error) {
        res.send(error)
    }
})

bookRoutes.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await BookModel.findByIdAndDelete({_id: id})
        res.send("Book has been deleted")
    } catch (error) {
        res.send(error)
    }
})

module.exports = { bookRoutes }