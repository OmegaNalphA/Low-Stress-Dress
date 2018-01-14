import urllib.request, json

location = input("Type your destination city\n")
print(location)

with urllib.request.urlopen("http://api.openweathermap.org/data/2.5/weather?q="+ location +"&APPID=905c74d7ddaa1cb4c409fab5c93c4cd1") as url:
	data = json.loads(url.read().decode())
	rain = data["weather"][0]["main"]
	temp = (9/5)*(data["main"]["temp"]-273)+32
	print(rain, temp)

isRain = False
if rain == "Rain" or rain == "Drizzle":
	isRain = True

file = open("data.txt", "w")
file.write("%s %s"%(isRain, temp))
