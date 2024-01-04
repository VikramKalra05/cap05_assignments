const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/movie-store');

const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

const app = express();
app.use(express.json());

app.get("/movies", async (req, res)=>{
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(200)
      res.send(movie);
    } catch (error) {
      res.status(400)
      res.send(error);
    }
})

app.get('/movies', async (req, res) => {
  try {
    const { title, rating, q, sortBy, page=1, limit=50} = req.query;    
    let query = {};

    if (title) {
      query.title = new RegExp(title, 'i');
    }

    if (rating) {
      query.rating = rating;
    }

    if (q) {
      query.$or = [{ title: new RegExp(q, 'i') }];
    }

    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = 1; 
    }

    const movies = await Movie.find(query).sort(sortOptions).skip((page - 1) * limit).limit(parseInt(limit));
    res.send(movies);
  } catch (error) {
    res.status(400)
    res.send(error);
  }
});

app.listen(8080, ()=>{
    console.log("The server is running at port 8080");
})