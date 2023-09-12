async function getWeather() {
	var input = document.querySelector(".weather-form-input").value;
	var result = await eel.get_weather(input)();
	document.querySelector(".second").textContent = result;
}
