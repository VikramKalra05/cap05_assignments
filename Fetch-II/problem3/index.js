let apiKey = "4d13dfe139baa4fba11713ec8cd6af0a";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    data = res;
    updateUI(data);
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        data = res;
        updateUI(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})

function updateUI(data){
    let map = document.getElementById("gmap_canvas");
    // Show min temp, max temp, wind, clounds, sunrise, sunset
    let city = document.getElementById("city");
    let desc = document.getElementById("desc");
    let temp = document.getElementById("temp");
    let minTemp = document.getElementById("minTemp");
    let maxTemp = document.getElementById("maxTemp");
    // let clouds = document.getElementById("clouds");
    let sunrise = document.getElementById("sunrise");
    let sunset = document.getElementById("sunset");
    // ${data.name}
    city.textContent = data.name;
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    temp.textContent = Math.floor((Number(data.main.temp) - 273.15)) + "°C";
    desc.textContent = data.weather[0]  .description;
    minTemp.textContent = "Min Temp: " + Math.floor((Number(data.main.temp_min) - 273.15)) + "°C";
    maxTemp.textContent = "Max Temp: " + Math.floor((Number(data.main.temp_max) - 273.15)) + "°C";
    let sunriseDate = new Date(data.sys.sunrise * 1000);
    let sunsetDate = new Date(data.sys.sunset * 1000);
    sunrise.textContent = "Sunrise Time: " + sunriseDate.toLocaleTimeString();
    sunset.textContent = "Sunset Time: " + sunsetDate.toLocaleTimeString();
}
