const validator = (req, res, next) => {
    const data = req.body;

    if(!data.title || !data.author || !data.ISBN || !data.price){
        res.status(400);
        res.send("Invalid book details")
        return;
    }

    next();
}

module.exports = validator;