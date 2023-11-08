import eel
import sys
import pyowm

owm = pyowm.OWM("fbf22003aa237a703803e2d59c89d252")

@eel.expose
def get_weather(place):
	try:
		mgr = owm.weather_manager()
		temp = mgr.weather_at_place(place).weather.temperature("celsius")["temp"]
		status = mgr.weather_at_place(place).weather.detailed_status
		return f"In {place} is {temp}° and {status}"
	except:
		return "Place not found("

if __name__ == "__main__":
	eel.init("web")
	eel.start("index.html", mode="chrome", port=8001, size=(300, 290))
