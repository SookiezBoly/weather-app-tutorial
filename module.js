'use strict';

const weekDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

/**
 * 
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Date String, formate : "Sunday 10, Jan"
 */
const getDate = function(dateUnix, timeZone){
    const date = new Date((dateUnix + timeZone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}



/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate : "HH:MM AM/PM"
 */

const getTime = function(timeUnix, timeZone){
    const date = new Date((timeUnix + timeZone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate : "HH AM/PM"
 */

const getHours = function(timeUnix, timeZone){
    const date = new Date((timeUnix + timeZone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? 'PM' : 'AM';

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Metter per second
 * @returns {number} kilometer per hours
 */

const mps_to_kmh = function(mps){
    const mph = mps * 3600;
    return mph / 1000;
}


const aqiText = {
    1 : {
        level : 'Good',
        message : 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
    },
    2 : {
        level : 'Fair',
        message : 'Air quality is acceptable; however, for some pullutants there may be a moderate health concern for a very small number of people who are sensitive to air pollution.'
    },
    3 : {
        level : 'Moderate',
        message : 'Members of sensitve groups may experience health effects. The general public is not likely to be affected.'
    },
    4 : {
        level : 'Poor',
        message : 'Everyone may begin to experience health effects; memebers of sensitive groups may experience more serious health effects.'
    },
    5 : {
        level : 'Very Poor',
        message : 'Health warning of emergency conditions. The entire population is more likely to be affected.'
    },
}







export{ getDate, getTime, getHours, mps_to_kmh, aqiText, monthNames, weekDayNames };