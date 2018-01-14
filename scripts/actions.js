import {config} from './config'
var key = config.openweather

function UserAction(location) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + key, true);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response)
    return response
}