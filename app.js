'use strict'

var hoursPerDay = [
    '6:00am', 
    '7:00am', 
    '8:00am', 
    '9:00am', 
    '10:00am', 
    '11:00am', 
    '12:00pm', 
    '1:00pm', 
    '2:00pm', 
    '3:00pm', 
    '4:00pm', 
    '5:00pm', 
    '6:00pm', 
    '7:00pm',
    '8:00pm'
];

var resultsArray = [];

var seattleLocation = {
    name: 'Seattle',
    cookiesPerHour: [23, 65, 6.3],
//how do I definte cookiesPerHour as [min, max, avg]?
    randomCustomersPerHour: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
    },
    // totalCookiesPerHour: function multiply(randomCustomersPerHour, averageCookiesPurchased) {
    //     return (randomCustomersPerHour * averageCookiesPurchased);
    // },
};

//Display the values of each array as unordered lists in browser
//Calculate the sum of these hourly totals;

resultsArray.push(seattleLocation)

var tokyoLocation = {
    name: 'Tokyo',
    cookiesPerHour: [3, 24, 1.2],
    min: 3,
    max: 24,
    avgCookiesPerHour: 1.2,
    randomCustomersPerHour: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
    }
};

var dubaiLocation = {
    name: 'Dubai',
    cookiesPerHour: [11, 38, 3.7],
    randomCustomersPerHour: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
    }
};

var parisLocation = {
    name: 'Paris',
    cookiesPerHour: [20, 38, 2.3],
    randomCustomersPerHour: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
    }
};

var limaLocation = {
    name: 'Lima',
    cookiesPerHour: [3, 24, 1.2],
    randomCustomersPerHour: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
    }
};

var storeLocationsArray = [seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation];

for(var locationIndex = 0; locationIndex < storeLocationsArray.length; animalIndex++) {
    var tr = document.createElement('tr');

    var currentLocation = storeLocationsArray[locationIndex];
    tr.textContent = currentLocation.name;

    cookieDataDiv.append(tr);

    for(var cookieIndex = 0; cookieIndex < currentLocation.cookiesPerHour.length; cookieIndex++) {
        
        var cookieTr = document.createElement('tr');
        cookieTr.textContent = currentLocation.cookiesPerHour[cookieIndex];
        cookieDataDiv.append(cookieTr);
    }
}

