const express = require("express");
const { connection } = require("./db");
const {bookRoutes} = require("./routes/bookRoutes")

const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/books", bookRoutes)

app.get("/", (req, res) => {
    res.send("WELCOME TO BOOKSTORE MANAGEMENT SYSTEM")
})

app.use((req, res) => {
    res.status(404);
    res.send("Invalid Endpoint")
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`The server is running at port ${PORT}`);
        console.log("The database is connected successfully");
    } catch (error) {
        console.log("Error:", error);
    }
})