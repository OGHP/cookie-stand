'use-strict';

//constructor functions: look for consistancy, what's everyone using? Define a blueprint (aka constructor function)

var allStores = [];  //holds properties of every new instance that we create using 'new Store'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function Store(name, minCustomers, maxCustomers, avgSales) {
    this.name = name;  //allows us to instantiate a new instance of each of these and delete these properties 4 on each store object below
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;

    allStores.push(this) //takes everything in the Store function and puts it into the array above
}

var pike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20,38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

console.log(allStores);

//get random customer per hour
Store.prototype.randomCustomerPerHour = function () {
    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
}
allStores[0].randomCustomerPerHour();
console.log(allStores[0].randomCustomerPerHour());

//get sales per hour
Store.prototype.cookiesPerHour = function () {
    for (var i =0; i < hours.length; i++) {
        var sales = Math.ceil(this.avgSales * this.randomCustomerPerHour());
        console.log(sales);
        return sales;
    }
}
allStores[0].cookiesPerHour();



// stretch goal
// Store.prototype.dailyTotal = function () {
//     function allCookiesNeeded() {
//         for (var allCookiesNeeded of this.cookiesPerHour) {
//             this.total += this.cookiesPerHour;
//         }
//     }
// }



// create the table here




// //First and Pike
// var pike = {
//     name: 'First and Pike',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgSales: 6.3,
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     customersPerHour: [],
//     cookiesPerHour: [],
//     dailyTotal: 0,
//     calculateCustomers: function () {
//         // iterate through hours
//         // for each hour, run random generator
//         // push to customersPerHour
//         for (var hours of pike.hours) {  //"for each our" - this is the same as: for(var i = 0; i < pike.hours.length; i++)
//             var rando = generateRandom(pike.minCustomers, pike.maxCustomers);
//             pike.customersPerHour.push(rando);
//         }
//     },
//     calculateSales: function () {
//         pike.calculateCustomers();
//         for (var numCustomers of pike.customersPerHour) {
//             var cookies = Math.ceil(pike.avgSales * numCustomers);
//             pike.cookiesPerHour.push(cookies);
//             pike.dailyTotal += cookies;
//         }
//     },
//     render: function () {
//         pike.calculateSales();

//         var ulEl = document.createElement('ul'); //create a new variable for the <ul>
//         var h2El = document.createElement('h2'); //create the <h2>
//         h2El.textContent = pike.name; //create <h2> text
//         ulEl.appendChild(h2El); //append <h2> to the <ul>

//         for (var index in pike.hours) {  //create the loop for <li>'s
//             var liEl = document.createElement('li');
//             liEl.textContent = pike.hours[index] + ' : ' + pike.cookiesPerHour[index] + ' cookies';
//             ulEl.appendChild(liEl);
//         }

//         var liEltwo = document.createElement('li');  //create final <li> text & append
//         liEltwo.textContent = 'Total: ' + pike.dailyTotal;
//         ulEl.appendChild(liEltwo);

//         var mainEl = document.getElementById('main-content'); //finally, take all of this and append to <main>
//         mainEl.appendChild(ulEl);
//     },
// };

// //SeaTac Airport
// var seaTacAirport = {
//     name: 'SeaTac Airport',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgSales: 6.3,
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     customersPerHour: [],
//     cookiesPerHour: [],
//     dailyTotal: 0,
//     calculateCustomers: function () {
//         // iterate through hours
//         // for each hour, run random generator
//         // push to customersPerHour
//         for (var hours of seaTacAirport.hours) {
//             var rando = generateRandom(seaTacAirport.minCustomers, seaTacAirport.maxCustomers);
//             seaTacAirport.customersPerHour.push(rando);
//         }
//     },
//     calculateSales: function () {
//         seaTacAirport.calculateCustomers();
//         for (var numCustomers of seaTacAirport.customersPerHour) {
//             var cookies = Math.ceil(seaTacAirport.avgSales * numCustomers);
//             seaTacAirport.cookiesPerHour.push(cookies);
//             seaTacAirport.dailyTotal += cookies;
//         }
//     },
//     render: function () {
//         seaTacAirport.calculateSales();

//         var ulEl = document.createElement('ul');
//         var h2El = document.createElement('h2');
//         h2El.textContent = seaTacAirport.name;
//         ulEl.appendChild(h2El);

//         for (var index in seaTacAirport.hours) {
//             var liEl = document.createElement('li');
//             liEl.textContent = seaTacAirport.hours[index] + ' : ' + seaTacAirport.cookiesPerHour[index] + ' cookies';
//             ulEl.appendChild(liEl);
//         }

//         var liEltwo = document.createElement('li');
//         liEltwo.textContent = 'Total: ' + seaTacAirport.dailyTotal;
//         ulEl.appendChild(liEltwo);

//         var mainEl = document.getElementById('main-content');
//         mainEl.appendChild(ulEl);
//     },
// };

// //Seattle Center
// var seattleCenter = {
//     name: 'Seattle Center',
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgSales: 3.7,
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     customersPerHour: [],
//     cookiesPerHour: [],
//     dailyTotal: 0,
//     calculateCustomers: function () {
//         // iterate through hours
//         // for each hour, run random generator
//         // push to customersPerHour
//         for (var hours of seattleCenter.hours) {
//             var rando = generateRandom(seattleCenter.minCustomers, seattleCenter.maxCustomers);
//             seattleCenter.customersPerHour.push(rando);
//         }
//     },
//     calculateSales: function () {
//         seattleCenter.calculateCustomers();
//         for (var numCustomers of seattleCenter.customersPerHour) {
//             var cookies = Math.ceil(seattleCenter.avgSales * numCustomers);
//             seattleCenter.cookiesPerHour.push(cookies);
//             seattleCenter.dailyTotal += cookies;
//         }
//     },
//     render: function () {
//         seattleCenter.calculateSales();

//         var ulEl = document.createElement('ul');
//         var h2El = document.createElement('h2');
//         h2El.textContent = seattleCenter.name;
//         ulEl.appendChild(h2El);

//         for (var index in seattleCenter.hours) {
//             var liEl = document.createElement('li');
//             liEl.textContent = seattleCenter.hours[index] + ' : ' + seattleCenter.cookiesPerHour[index] + ' cookies';
//             ulEl.appendChild(liEl);
//         }

//         var liEltwo = document.createElement('li');
//         liEltwo.textContent = 'Total: ' + seattleCenter.dailyTotal;
//         ulEl.appendChild(liEltwo);

//         var mainEl = document.getElementById('main-content');
//         mainEl.appendChild(ulEl);
//     },
// };


// //Capitol Hill
// var capitolHill = {
//     name: 'Capitol Hill',
//     minCustomers: 20,
//     maxCustomers:38,
//     avgSales: 2.3,
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     customersPerHour: [],
//     cookiesPerHour: [],
//     dailyTotal: 0,
//     calculateCustomers: function () {
//         // iterate through hours
//         // for each hour, run random generator
//         // push to customersPerHour
//         for (var hours of capitolHill.hours) {
//             var rando = generateRandom(capitolHill.minCustomers, capitolHill.maxCustomers);
//             capitolHill.customersPerHour.push(rando);
//         }
//     },
//     calculateSales: function () {
//         capitolHill.calculateCustomers();
//         for (var numCustomers of capitolHill.customersPerHour) {
//             var cookies = Math.ceil(capitolHill.avgSales * numCustomers);
//             capitolHill.cookiesPerHour.push(cookies);
//             capitolHill.dailyTotal += cookies;
//         }
//     },
//     render: function () {
//         capitolHill.calculateSales();

//         var ulEl = document.createElement('ul');
//         var h2El = document.createElement('h2');
//         h2El.textContent = capitolHill.name;
//         ulEl.appendChild(h2El);

//         for (var index in capitolHill.hours) {
//             var liEl = document.createElement('li');
//             liEl.textContent = capitolHill.hours[index] + ' : ' + capitolHill.cookiesPerHour[index] + ' cookies';
//             ulEl.appendChild(liEl);
//         }

//         var liEltwo = document.createElement('li');
//         liEltwo.textContent = 'Total: ' + capitolHill.dailyTotal;
//         ulEl.appendChild(liEltwo);

//         var mainEl = document.getElementById('main-content');
//         mainEl.appendChild(ulEl);
//     },
// };


// //Alki
// var alki = {
//     name: 'Alki',
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgSales: 4.6,
//     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//     customersPerHour: [],
//     cookiesPerHour: [],
//     dailyTotal: 0,
//     calculateCustomers: function () {
//         // iterate through hours
//         // for each hour, run random generator
//         // push to customersPerHour
//         for (var hours of alki.hours) {
//             var rando = generateRandom(alki.minCustomers, alki.maxCustomers);
//             alki.customersPerHour.push(rando);
//         }
//     },
//     calculateSales: function () {
//         alki.calculateCustomers();
//         for (var numCustomers of alki.customersPerHour) {
//             var cookies = Math.ceil(alki.avgSales * numCustomers);
//             alki.cookiesPerHour.push(cookies);
//             alki.dailyTotal += cookies;
//         }
//     },
//     render: function () {
//         alki.calculateSales();

//         var ulEl = document.createElement('ul');
//         var h2El = document.createElement('h2');
//         h2El.textContent = alki.name;
//         ulEl.appendChild(h2El);

//         for (var index in alki.hours) {
//             var liEl = document.createElement('li');
//             liEl.textContent = alki.hours[index] + ' : ' + alki.cookiesPerHour[index] + ' cookies';
//             ulEl.appendChild(liEl);
//         }

//         var liEltwo = document.createElement('li');
//         liEltwo.textContent = 'Total: ' + alki.dailyTotal;
//         ulEl.appendChild(liEltwo);

//         var mainEl = document.getElementById('main-content');
//         mainEl.appendChild(ulEl);
//     },
// };

// //finally, run render() for each store we create!
// var stores = [pike, seaTacAirport, seattleCenter, capitolHill, alki];
// for (var store of stores) {
//     store.render();
// }
