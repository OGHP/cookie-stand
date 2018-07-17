'use-strict';

// Create a separate JS object literal for each shop location that does the following:

// Stores the min / max hourly customers, and the average cookies per customer

// Uses a method of that object to generate a random number of customers per hour.Objects / Math / random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals;

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1st and Pike
var shop1stAndPike = {
    minCustomers: 23,
    maxCustomers: 65,
    averageCookiesPerCustomer: 6.3,
    cookiesPerHour: [],
    getCustomersPerHour: function getCustomersPerHour(min, max) {
        return Math.random() * (max - min) + min;
    },
};


for (var i = 0; i < storeHours.length; i++){
    var customersPerHour = shop1stAndPike.getCustomersPerHour(shop1stAndPike.maxCustomers, shop1stAndPike.minCustomers);
    var cookiesPerHour = Math.ceil(shop1stAndPike.averageCookiesPerCustomer * customersPerHour);
    shop1stAndPike.cookiesPerHour.push(cookiesPerHour);
}
console.log(i);

var ulEl = document.createElement('ul');

for( var j = 0; j < storeHours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeHours[j] + ':' + ' ' + shop1stAndPike.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(liEl);
}

console.log(j);

var storeHours = document.getElementById('shop1stAndPike');
storeHours.appendChild(ulEl);


//SeaTac Airport
var shopSeaTacAirport = {
    minCustomers: 3,
    maxCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    cookiesPerHour: [],
    getCustomersPerHour: function getCustomersPerHour(min, max) {
        return Math.random() * (max - min) + min;
    },
};


for (var i = 0; i < storeHours.length; i++) {
    var customersPerHour = shopSeaTacAirport.getCustomersPerHour(shopSeaTacAirport.maxCustomers, shopSeaTacAirport.minCustomers);
    var cookiesPerHour = Math.ceil(shopSeaTacAirport.averageCookiesPerCustomer * customersPerHour);
    shopSeaTacAirport.cookiesPerHour.push(cookiesPerHour);
}
console.log(i);

var ulEl = document.createElement('ul');

for (var j = 0; j < storeHours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeHours[j] + ':' + ' ' + shopSeaTacAirport.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(liEl);
}

console.log(j);

var storeHours = document.getElementById('shopSeaTacAirport');
storeHours.appendChild(ulEl);
