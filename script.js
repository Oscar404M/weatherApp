let weather = {
	"apikey": "bfb0d7bceee5cdcee12da6cfa9493578",
	fetchWeather: function(city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
		+city 
		+"&appid=bfb0d7bceee5cdcee12da6cfa9493578&units=metric").then((response) => response.json()).then((data) => this.displayWeather(data));
	},
	displayWeather: function(data) {
		const { name } = data;
		const  {icon, description} = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;

		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
		document.querySelector(".description").innerText = description;
		document.querySelector(".temp").innerText = "temperature" + temp + "°C";
		document.querySelector(".humidity").innerText = humidity + " %";
		document.querySelector(".wind").innerText = "wind speed:" + speed + "km/h";
		//document.body.style.backgroundImage = "url('https://source.unsplash.com/1800x1080/?" + name + "')"
	},
	search: function(){
		this.fetchWeather(document.querySelector(".search-bar").value);
	},

};
document.querySelector(".search").addEventListener("click", function(){
	weather.search(); 
});

document.querySelector(".search-bar").addEventListener("keypress", function(event){
	if (event.key = "Enter"){
		weather.search();
	}
});
weather.fetchWeather("Cairo")
