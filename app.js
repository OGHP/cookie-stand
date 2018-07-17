'use-strict';

//global function
function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//what we should have written
var pike = {
    name: 'First and Pike',
    minCustomers: 23,
    maxCustomers: 65,
    avgSales: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    customersPerHour: [],
    cookiesPerHour: [],
    dailyTotal: 0,
    calculateCustomers: function() {
        // iterate through hours
        // for each hour, run random generator
        // push to customersPerHour
        for(var hours of pike.hours) {  //"for each our" - this is the same as: for(var i = 0; i < pike.hours.length; i++)
            var rando =  generateRandom(pike.minCustomers, pike.maxCustomers);
            pike.customersPerHour.push(rando);
        }
    },
    calculateSales: function() {
        pike.calculateCustomers();
        for(var numCustomers of pike.customersPerHour) {
            var cookies = Math.ceil(pike.avgSales * numCustomers);
            pike.cookiesPerHour.push(cookies);
            pike.dailyTotal += cookies;
        }
    },
    render : function() {
        pike.calculateSales();

        var ulEl = document.createElement('ul'); //create a new variable for the <ul>
        var h2El = document.createElement('h2'); //create the <h2>
        h2El.textContent = pike.name; //create <h2> text
        ulEl.appendChild(h2El); //append <h2> to the <ul>

        for (var index in pike.hours) {  //create the loop for <li>'s
            var liEl = document.createElement('li');
            liEl.textContent = pike.hours[index] + ' : ' + pike.cookiesPerHour[index] + ' cookies';
            ulEl.appendChild(liEl);
        }

        var liEltwo = document.createElement('li');  //create final <li> text & append
        liEltwo.textContent = 'Total: ' + pike.dailyTotal;
        ulEl.appendChild(liEltwo);

        var mainEl = document.getElementById('main-content'); //finally, take all of this and append to <main>
        mainEl.appendChild(ulEl);
    },
};

//finally, run render() for each store we create!
var stores = [pike, ];
for (var store of stores) {
    store.render();
}



//constructor functions: look for consistancy, what's everyone using? Define a blueprint (aka constructor function)
var storeInfo= [];

function Store(name, minCustomers, maxCustomers, avgSales) {
    this.name = name;  //allows us to instantiate a new instance of this
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;

    storeInfo.push(this)
}

//define instance methods outside of the constructor for everyone to have access to
Store.prototype.cookiesPerHour = function() {  //prototype hands info
    console.log(this.name);
}

Store[0].cookiesPerHour();

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 23, 65, 6.3);

// create the document




//MY PROJECT BELOW

// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //1st and Pike
// var shop1stAndPike = {
//     name: 'First and Pike',
//     minCustomers: 23,
//     maxCustomers: 65,
//     averageCookiesPerCustomer: 6.3,
//     cookiesPerHour: [],
//     total: 0,
//     getCustomersPerHour: function getCustomersPerHour(min, max) { //function as a method that belongs to the object
//         return Math.random() * (max - min) + min;
//     },
// };


// for (var i = 0; i < storeHours.length; i++){
//     var customersPerHour = shop1stAndPike.getCustomersPerHour(shop1stAndPike.maxCustomers, shop1stAndPike.minCustomers);
//     var cookiesPerHour = Math.ceil(shop1stAndPike.averageCookiesPerCustomer * customersPerHour);
//     shop1stAndPike.cookiesPerHour.push(cookiesPerHour);
// }
// console.log(i);

// var ulEl = document.createElement('ul');

// for( var j = 0; j < storeHours.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = storeHours[j] + ':' + ' ' + shop1stAndPike.cookiesPerHour[j] + ' cookies';
//     ulEl.appendChild(liEl);
// }

// console.log(j);

// var storeHours = document.getElementById('shop1stAndPike');
// storeHours.appendChild(ulEl);

// function allCookiesNeeded() {
//     for (var k = 0; k < shop1stAndPike.cookiesPerHour.length; k++) {
//         shop1stAndPike.total += shop1stAndPike.cookiesPerHour[k];
//     }
//     console.log(shop1stAndPike.total);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + shop1stAndPike.total;
//     ulEl.appendChild(liEl);
// }
// allCookiesNeeded();


// //SeaTac Airport
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var shopSeaTacAirport = {
//     name: 'SeaTac Airport',
//     minCustomers: 3,
//     maxCustomers: 24,
//     averageCookiesPerCustomer: 1.2,
//     cookiesPerHour: [],
//     total: 0,
//     getCustomersPerHour: function getCustomersPerHour(min, max) {
//         return Math.random() * (max - min) + min;
//     },
// };

// for (var i = 0; i < storeHours.length; i++) {
//     var customersPerHour = shopSeaTacAirport.getCustomersPerHour(shopSeaTacAirport.maxCustomers, shopSeaTacAirport.minCustomers);
//     var cookiesPerHour = Math.ceil(shopSeaTacAirport.averageCookiesPerCustomer * customersPerHour);
//     shopSeaTacAirport.cookiesPerHour.push(cookiesPerHour);
// }
// console.log(i);

// var ulEl = document.createElement('ul');

// for (var j = 0; j < storeHours.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = storeHours[j] + ':' + ' ' + shopSeaTacAirport.cookiesPerHour[j] + ' cookies';
//     ulEl.appendChild(liEl);
// }

// console.log(j);

// var storeHours = document.getElementById('shopSeaTacAirport');
// storeHours.appendChild(ulEl);

// function totalCookiesNeeded() {
//     for (var k = 0; k < shopSeaTacAirport.cookiesPerHour.length; k++){
//         shopSeaTacAirport.total += shopSeaTacAirport.cookiesPerHour[k];
//     }
//     console.log(shopSeaTacAirport.total);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + shopSeaTacAirport.total;
//     ulEl.appendChild(liEl);
// }
// totalCookiesNeeded();



// //Seattle Center
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var shopSeattleCenter = {
//     name: 'Seattle Center',
//     minCustomers: 11,
//     maxCustomers: 38,
//     averageCookiesPerCustomer: 3.7,
//     cookiesPerHour: [],
//     total: 0,
//     getCustomersPerHour: function getCustomersPerHour(min, max) {
//         return Math.random() * (max - min) + min;
//     },
// };

// for (var i = 0; i < storeHours.length; i++) {
//     var customersPerHour = shopSeattleCenter.getCustomersPerHour(shopSeattleCenter.maxCustomers, shopSeattleCenter.minCustomers);
//     var cookiesPerHour = Math.ceil(shopSeattleCenter.averageCookiesPerCustomer * customersPerHour);
//     shopSeattleCenter.cookiesPerHour.push(cookiesPerHour);
// }
// console.log(i);

// var ulEl = document.createElement('ul');

// for (var j = 0; j < storeHours.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = storeHours[j] + ':' + ' ' + shopSeattleCenter.cookiesPerHour[j] + ' cookies';
//     ulEl.appendChild(liEl);
// }

// console.log(j);

// var storeHours = document.getElementById('shopSeattleCenter');
// storeHours.appendChild(ulEl);

// function eachCookieNeeded() {
//     for (var k = 0; k < shopSeattleCenter.cookiesPerHour.length; k++) {
//         shopSeattleCenter.total += shopSeattleCenter.cookiesPerHour[k];
//     }
//     console.log(shopSeattleCenter.total);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + shopSeattleCenter.total;
//     ulEl.appendChild(liEl);
// }
// eachCookieNeeded();


// //Capitol Hill
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var shopCapitolHill = {
//     name: 'Capitol Hill',
//     minCustomers: 20,
//     maxCustomers: 38,
//     averageCookiesPerCustomer: 2.3,
//     cookiesPerHour: [],
//     total: 0,
//     getCustomersPerHour: function getCustomersPerHour(min, max) {
//         return Math.random() * (max - min) + min;
//     },
// };

// for (var i = 0; i < storeHours.length; i++) {
//     var customersPerHour = shopCapitolHill.getCustomersPerHour(shopCapitolHill.maxCustomers, shopCapitolHill.minCustomers);
//     var cookiesPerHour = Math.ceil(shopCapitolHill.averageCookiesPerCustomer * customersPerHour);
//     shopCapitolHill.cookiesPerHour.push(cookiesPerHour);
// }
// console.log(i);

// var ulEl = document.createElement('ul');

// for (var j = 0; j < storeHours.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = storeHours[j] + ':' + ' ' + shopCapitolHill.cookiesPerHour[j] + ' cookies';
//     ulEl.appendChild(liEl);
// }

// console.log(j);

// var storeHours = document.getElementById('shopCapitolHill');
// storeHours.appendChild(ulEl);

// function allTheCookiesNeeded() {
//     for (var k = 0; k < shopCapitolHill.cookiesPerHour.length; k++) {
//         shopCapitolHill.total += shopCapitolHill.cookiesPerHour[k];
//     }
//     console.log(shopCapitolHill.total);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + shopCapitolHill.total;
//     ulEl.appendChild(liEl);
// }
// allTheCookiesNeeded();


// //Alki
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var shopAlki = {
//     name: 'Alki',
//     minCustomers: 2,
//     maxCustomers: 16,
//     averageCookiesPerCustomer: 4.6,
//     cookiesPerHour: [],
//     total: 0,
//     getCustomersPerHour: function getCustomersPerHour(min, max) {
//         return Math.random() * (max - min) + min;
//     },
// };


// for (var i = 0; i < storeHours.length; i++) {
//     var customersPerHour = shopAlki.getCustomersPerHour(shopAlki.maxCustomers, shopAlki.minCustomers);
//     var cookiesPerHour = Math.ceil(shopAlki.averageCookiesPerCustomer * customersPerHour);
//     shopAlki.cookiesPerHour.push(cookiesPerHour);
// }
// console.log(i);

// var ulEl = document.createElement('ul');

// for (var j = 0; j < storeHours.length; j++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = storeHours[j] + ':' + ' ' + shopAlki.cookiesPerHour[j] + ' cookies';
//     ulEl.appendChild(liEl);
// }

// console.log(j);

// var storeHours = document.getElementById('shopAlki');
// storeHours.appendChild(ulEl);

// function gimmeCookies() {
//     for (var k = 0; k < shopAlki.cookiesPerHour.length; k++) {
//         shopAlki.total += shopAlki.cookiesPerHour[k];
//     }
//     console.log(shopAlki.total);
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + shopAlki.total;
//     ulEl.appendChild(liEl);
// }
// gimmeCookies();
