// let OMDB_API_KEY = "9453feec";
let container = document.getElementById("cont");
let movieList;

function searchMovie(){
    container.innerHTML = "";
    let movieName = document.getElementById("movieName").value;
    let url = "http://www.omdbapi.com/?apikey=9453feec&s=" + movieName;
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        movieList = res.Search;
        movieList.forEach((ele) => {
            displayMovie(ele);
        });
    })
    .catch((err)=>{
        console.log(err);
    })

}

function displayMovie(data){
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let year = document.createElement("h3");
    let poster = document.createElement("img");

    title.textContent = data.Title;
    year.textContent = data.Year;
    poster.src = data.Poster;

    card.append(title,year,poster);
    container.append(card);
}