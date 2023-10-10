let root = document.getElementById("cont");
let input = document.getElementById("recipie");
let list;

function searchRecipie(recipie){
    root.innerHTML = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipie}`)
    .then((res) => res.json())
    .then((res) => {
        list = res.meals;
        let serial = 1;
        list.forEach((ele) => {
            console.log(ele);
            displayRecipie(ele, serial);
            serial++
        });
    })
    .catch((err) => err)
}

function displayRecipie(data, serial){
    let card = document.createElement("div");
    let title = document.createElement("h1");
    let link = document.createElement("a");
    let source = document.createElement("a");
    let desc = document.createElement("h2");
    let meal = document.createElement("img");

    title.textContent = serial + ". " + data.strMeal;
    meal.src = data.strMealThumb;

    link.href = data.strYoutube;
    link.target = "_blank";
    link.textContent = "Youtube link for the recipie";

    source.href = data.strSource;
    source.target = "_blank";
    source.textContent = "Source";

    desc.textContent = "Instructions to Cook - " + data.strInstructions;

    card.append(title,meal,link,desc,source);
    root.append(card);
}

function throttle(func, delay){
    let isThrottle = false;
    function innerDelay(recipie){
        if(isThrottle == false){
            isThrottle = true;
            setTimeout(()=>{
                isThrottle = false;
                func(recipie);
            }, delay)
        }
    }
    return innerDelay;
}

let throttleSearch = throttle(searchRecipie, 1000);
console.log(throttleSearch);

input.addEventListener("input", ()=>{
    let recipie = input.value;
    throttleSearch(recipie)
})
