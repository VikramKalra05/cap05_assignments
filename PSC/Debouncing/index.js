// let OMDB_API_KEY = "9453feec";
let container = document.getElementById("cont");
let movieList;
let input = document.getElementById("movieName");

function searchMovie(movieName){
    container.innerHTML = "";
    let url = `http://www.omdbapi.com/?apikey=9453feec&s=${movieName}`;
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        movieList = res.Search;
        console.log(movieList);
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

function debounce(func, delay){
    let timer;
    function innerDelay(movieName){
        clearInterval(timer);
        timer = setTimeout(()=>{
            func(movieName);
        }, delay)
    }
    return innerDelay;
} 

let debounceSearch = debounce(searchMovie, 700)

input.addEventListener("input", ()=>{
    let movieName = input.value;
    debounceSearch(movieName);
})