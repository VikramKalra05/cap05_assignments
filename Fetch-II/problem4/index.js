let apiKey = "4d13dfe139baa4fba11713ec8cd6af0a";
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${apiKey}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    data = res;
    updateUI(data);
    for(let i=0; i<5; i++){
        forecast(data.list[i]);
    }
})
.catch((err)=>{
    console.log(err);
})
function getCurrentDateTime() {
    let months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let date = new Date();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    let formattedDateTime = `${month} ${day}, ${hours % 12 || 12}:${minutes}${ampm}`;
    return formattedDateTime;
}
function updateDateTime() {
    let currentDateTime = getCurrentDateTime();
    document.getElementById('date').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();
let searchCity = document.getElementById("search");
searchCity.addEventListener("click", ()=>{
    let city = document.getElementById("citySearch").value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        data = res;
        updateUI(data);
        for(let i=0; i<5; i++){
            forecast(data.list[i]);
            console.log(data.list[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

function updateUI(data){
    let map = document.getElementById("gmap_canvas");
    let cityDisplay = document.getElementById("city");
    let desc = document.getElementById("desc");
    let temp = document.getElementById("temp");
    let minTemp = document.getElementById("minTemp");
    let maxTemp = document.getElementById("maxTemp");;

    city = data.city.name;
    cityDisplay.textContent = city;
    map.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    temp.textContent = Math.floor((Number(data.list[0].main.temp) - 273.15)) + "°C";
    desc.textContent = data.list[0].weather[0].description;
    minTemp.textContent = "Min Temp: " + Math.floor((Number(data.list[0].main.temp_min) - 273.15)) + "°C";
    maxTemp.textContent = "Max Temp: " + Math.floor((Number(data.list[0].main.temp_max) - 273.15)) + "°C";  
}
let forecastDiv = document.getElementById("forecast");
function forecast(data){
    console.log("Hl")
    let dayDiv = document.createElement("div");
    let minTemp = document.createElement("h4");
    let maxTemp = document.createElement("h4");

    minTemp.textContent = data.main.minTemp; 
    maxTemp.textContent = data.main.maxTemp; 
    
    dayDiv.append(minTemp,maxTemp);
    forecastDiv.append(dayDiv);
}