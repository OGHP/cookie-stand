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
    this.cookiesSoldPerHour = [];
    this.cookiesSoldPerStore = 0;

    allStores.push(this); //takes everything in the Store function and puts it into the array above
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

//could this become a for loop? seems like it could be...thinking "DRY"
allStores[0].randomCustomerPerHour();
allStores[1].randomCustomerPerHour();
allStores[2].randomCustomerPerHour();
allStores[3].randomCustomerPerHour();
allStores[4].randomCustomerPerHour();


//get cookies per hour
Store.prototype.cookiesPerHour = function () {
    for (var i =0; i < hours.length; i++) {
        var sales = Math.ceil(this.avgSales * this.randomCustomerPerHour());
        console.log('cookies sold per hour:', sales);
        this.cookiesSoldPerHour.push(sales);
    }
}

//could this become a for loop? seems like it could be...thinking "DRY"
allStores[0].cookiesPerHour();
allStores[1].cookiesPerHour();
allStores[2].cookiesPerHour();
allStores[3].cookiesPerHour();
allStores[4].cookiesPerHour();


//total cookies sold per store
Store.prototype.totalCookies = function () {
    for (var j = 0; j < this.cookiesSoldPerHour.length; j++) {
        this.cookiesSoldPerStore += this.cookiesSoldPerHour[j];
    }
    console.log(j)
}

//could this become a for loop? seems like it could be...thinking "DRY"
allStores[0].totalCookies();
allStores[1].totalCookies();
allStores[2].totalCookies();
allStores[3].totalCookies();
allStores[4].totalCookies();

// console.log('total cookies per store:', pike.cookiesSoldPerStore);


//*****TABLE BELOW*****
//4 of us worked on this for several hours..our code is likely extremely similar or identical

//creates empty box in upper left
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = ' ';
trEl.appendChild(tdEl);

// this is the head with the times **seems like the totals column should get factored in here somehow. Changed hours.length to include
// a column for totals and now there is an empty column. Putting back to hours.length for now
for (var x = 0; x < hours.length; x++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hours[x];
    trEl.appendChild(tdEl);
}

//appends loop to top row
var headerEl = document.getElementById('cookie-table');
headerEl.appendChild(trEl);

//creates each of the rows up to 5 times
for (var p = 0; p < 5; p++) {
    var trEl2 = document.createElement('tr');
    var tdEl2 = document.createElement('td');
    trEl2.textContent = allStores[p].name;

    // this for loop creates the columns in each row but doesn't account for the final column of total. I tried changing 'hours.length' to 16 but that
    // only added an empty <td> to each store after the 8pm column. Putting back to hours.length for now
    for (var q = 0; q < hours.length; q++) {
        tdEl2 = document.createElement('td');
        tdEl2.textContent = allStores[p].cookiesSoldPerHour[q];
        trEl2.appendChild(tdEl2);
    }

    var headerEl2 = document.getElementById('cookie-table');
    headerEl2.appendChild(trEl2);
}
