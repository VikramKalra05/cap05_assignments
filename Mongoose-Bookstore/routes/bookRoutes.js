const express = require("express");
const bookRoutes = express.Router();
const { BookModel } = require("../models/bookModel")

bookRoutes.get("/", async (req, res) => {
    try {
        const books = await BookModel.find();
        res.send(books);
    } catch (error) {
        res.send(error)
    }
})

module.exports = { bookRoutes }