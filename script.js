const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let weather = {
    apiKeys: "4d50080ed7cc1ad082fe8f6a5ffc697b",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        city + "&units=metric&appid=" 
        + this.apiKeys
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, icon, temp, humidity, speed);

        document.querySelector(".location").innerText ="Weather in " + name;
        document.querySelector(".date").innerText = month[new Date().getMonth()] + " " + new Date().getDate() + ", " + new Date().getFullYear();
        document.querySelector(".image").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".temperature").innerText = temp + "°c";
        document.querySelector(".temper").innerText = temp + "°c";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "Km/hr";
    },
    search: function(){
        this.fetchWeather((document.getElementById("search-box").value));
    }
};

function searchWeather() {
    weather.search();
}

document.getElementById("search-box").addEventListener("keyup", (e) =>{
    if(e.key.toLowerCase() == "enter"){
        weather.search();
    }
})