let weather = {
    apikey : "9cbc527cde639ca6c9594c556ccdfd1a",
    fetchWeather : function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&appid=" 
            + this.apikey

        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
        
    },
    displayWeather : function (data){
        const {name}= data;
        const {description} = data.weather[0];   
        const {temp_max, temp_min} = data.main;
        const {temp} = data.main;
        console.log(name,description,temp,temp_max,temp_min);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".state").innerText = description;
        document.querySelector(".min").innerText = "Minimum Temperature :" + temp_min;
        document.querySelector(".max").innerText = "Maximum Temperature :" + temp_max;
        document.querySelector(".weather").classList.remove("loading");
    },
    search : function (){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};



document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if(event.key=="Enter"){
        weather.search();
    }
})

weather.fetchWeather("Mumbai");