'use strict';

const api_key = "13abc51e825841d1e299e00ca43750aa";

/**
 * Fetch data from a server
 * 
 * @param {string} url API url
 * @param {Function} callback callback
 */

const fetchData = async function(url, callback){
    const response = await fetch(`${url}&appid=${api_key}`, {mode:'cors'});
    const dataResponse = await response.json();
    return callback(dataResponse);
}

const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
    /**
     * 
     * @param {string} query search query e.g : "London", "New York"
     */
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
}

export{ url, fetchData }