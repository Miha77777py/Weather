var input = document.querySelector(".weather-form-input")

async function getWeather() {
	var inputValue = document.querySelector(".weather-form-input").value;
	var result = await eel.get_weather(inputValue)();
	document.querySelector(".second").textContent = result;
}

input.addEventListener("input", () => {
	if (document.querySelector(".weather-form-input").value) {
		document.querySelector(".weather-form-btn").disabled = false;
	} else {
		document.querySelector(".weather-form-btn").disabled = true;
	}
})