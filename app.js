'use-strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//global function
// function getCustomersPerHour(min, max) {
//     return Math.random() * (max - min) + min;
// }

//1st and Pike
var shop1stAndPike = {
    name: 'First and Pike',
    minCustomers: 23,
    maxCustomers: 65,
    averageCookiesPerCustomer: 6.3,
    cookiesPerHour: [],
    total: 0,
    getCustomersPerHour: function getCustomersPerHour(min, max) { //function as a method that belongs to the object
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

function allCookiesNeeded() {
    for (var k = 0; k < shop1stAndPike.cookiesPerHour.length; k++) {
        shop1stAndPike.total += shop1stAndPike.cookiesPerHour[k];
    }
    console.log(shop1stAndPike.total);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + shop1stAndPike.total;
    ulEl.appendChild(liEl);
}
allCookiesNeeded();


//SeaTac Airport
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopSeaTacAirport = {
    name: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    cookiesPerHour: [],
    total: 0,
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

function totalCookiesNeeded() {
    for (var k = 0; k < shopSeaTacAirport.cookiesPerHour.length; k++){
        shopSeaTacAirport.total += shopSeaTacAirport.cookiesPerHour[k];
    }
    console.log(shopSeaTacAirport.total);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + shopSeaTacAirport.total;
    ulEl.appendChild(liEl);
}
totalCookiesNeeded();



//Seattle Center
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopSeattleCenter = {
    name: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    averageCookiesPerCustomer: 3.7,
    cookiesPerHour: [],
    total: 0,
    getCustomersPerHour: function getCustomersPerHour(min, max) {
        return Math.random() * (max - min) + min;
    },
};

for (var i = 0; i < storeHours.length; i++) {
    var customersPerHour = shopSeattleCenter.getCustomersPerHour(shopSeattleCenter.maxCustomers, shopSeattleCenter.minCustomers);
    var cookiesPerHour = Math.ceil(shopSeattleCenter.averageCookiesPerCustomer * customersPerHour);
    shopSeattleCenter.cookiesPerHour.push(cookiesPerHour);
}
console.log(i);

var ulEl = document.createElement('ul');

for (var j = 0; j < storeHours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeHours[j] + ':' + ' ' + shopSeattleCenter.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(liEl);
}

console.log(j);

var storeHours = document.getElementById('shopSeattleCenter');
storeHours.appendChild(ulEl);

function eachCookieNeeded() {
    for (var k = 0; k < shopSeattleCenter.cookiesPerHour.length; k++) {
        shopSeattleCenter.total += shopSeattleCenter.cookiesPerHour[k];
    }
    console.log(shopSeattleCenter.total);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + shopSeattleCenter.total;
    ulEl.appendChild(liEl);
}
eachCookieNeeded();


//Capitol Hill
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopCapitolHill = {
    name: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    cookiesPerHour: [],
    total: 0,
    getCustomersPerHour: function getCustomersPerHour(min, max) {
        return Math.random() * (max - min) + min;
    },
};

for (var i = 0; i < storeHours.length; i++) {
    var customersPerHour = shopCapitolHill.getCustomersPerHour(shopCapitolHill.maxCustomers, shopCapitolHill.minCustomers);
    var cookiesPerHour = Math.ceil(shopCapitolHill.averageCookiesPerCustomer * customersPerHour);
    shopCapitolHill.cookiesPerHour.push(cookiesPerHour);
}
console.log(i);

var ulEl = document.createElement('ul');

for (var j = 0; j < storeHours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeHours[j] + ':' + ' ' + shopCapitolHill.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(liEl);
}

console.log(j);

var storeHours = document.getElementById('shopCapitolHill');
storeHours.appendChild(ulEl);

function allTheCookiesNeeded() {
    for (var k = 0; k < shopCapitolHill.cookiesPerHour.length; k++) {
        shopCapitolHill.total += shopCapitolHill.cookiesPerHour[k];
    }
    console.log(shopCapitolHill.total);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + shopCapitolHill.total;
    ulEl.appendChild(liEl);
}
allTheCookiesNeeded();


//Alki
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var shopAlki = {
    name: 'Alki',
    minCustomers: 2,
    maxCustomers: 16,
    averageCookiesPerCustomer: 4.6,
    cookiesPerHour: [],
    total: 0,
    getCustomersPerHour: function getCustomersPerHour(min, max) {
        return Math.random() * (max - min) + min;
    },
};


for (var i = 0; i < storeHours.length; i++) {
    var customersPerHour = shopAlki.getCustomersPerHour(shopAlki.maxCustomers, shopAlki.minCustomers);
    var cookiesPerHour = Math.ceil(shopAlki.averageCookiesPerCustomer * customersPerHour);
    shopAlki.cookiesPerHour.push(cookiesPerHour);
}
console.log(i);

var ulEl = document.createElement('ul');

for (var j = 0; j < storeHours.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = storeHours[j] + ':' + ' ' + shopAlki.cookiesPerHour[j] + ' cookies';
    ulEl.appendChild(liEl);
}

console.log(j);

var storeHours = document.getElementById('shopAlki');
storeHours.appendChild(ulEl);

function gimmeCookies() {
    for (var k = 0; k < shopAlki.cookiesPerHour.length; k++) {
        shopAlki.total += shopAlki.cookiesPerHour[k];
    }
    console.log(shopAlki.total);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + shopAlki.total;
    ulEl.appendChild(liEl);
}
gimmeCookies();
