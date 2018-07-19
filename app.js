'use-strict';

//constructor functions: look for consistancy, what's everyone using? Define a blueprint (aka constructor function)

var tblEl; //global variable for table (FROM LECTURE)
var allStores = [];  //holds properties of every new instance that we create using 'new Store'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, minCustomers, maxCustomers, avgSales) {
    this.name = name;  //allows us to instantiate a new instance of each store
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.customersPerHour = [];
    this.cookiesSoldPerHour = [];
    this.dailyCookiesTotal = 0;

    allStores.push(this); //takes everything in the Store function and puts it into the array above
}

//added lecture notes from Wednesday day 8 (7/18/18)
Store.prototype.generateRandom = function() {
    return Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;
};


Store.prototype.calculateCustomersPerHour = function() { //calculate customers
    for (var hour of hours) {
        var randomNumOfCustomers = this.generateRandom();
        this.customersPerHour.push(randomNumOfCustomers);
    }
};

Store.prototype.calculateSales = function() {  //calculate sales
    this.calculateCustomersPerHour();

    for (var numberOfCustomers of this.customersPerHour) {
        var cookies = Math.ceil(this.avgSales * numberOfCustomers);
        this.cookiesSoldPerHour.push(cookies);
        this.dailyCookiesTotal += cookies;
    }
};

Store.prototype.render = function() {
    this.calculateSales();

    //store rows
    var trStoreEl = document.createElement('tr'); //row for each store
    //create data
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = this.name;
    trStoreEl.appendChild(tdNameEl);

    for(var index in hours) {
        var tdDataEl = document.createElement('td');
        tdDataEl.textContent = this.cookiesSoldPerHour[index];
        trStoreEl.appendChild(tdDataEl);
    }

    var tdTotalEl = document.createElement('td'); //row for each store
    tdTotalEl.textContent = this.dailyCookiesTotal;
    trStoreEl.appendChild(tdTotalEl);

    tblEl.appendChild(trStoreEl);
};

function createTable() {
    //table header
    tblEl = document.createElement('table');  //create table
    var trHeaderEl = document.createElement('tr');  //create header
    var thBlankEl = document.createElement('th');
    thBlankEl.textContent = ''; //top of the store names column
    trHeaderEl.appendChild(thBlankEl);

    for (var index = 0; index < hours.length; index++) {  //iterate over store hours
        var thEl = document.createElement('th');
        thEl.textContent = hours[index];
        trHeaderEl.appendChild(thEl);
    }

    var thTotalEl = document.createElement('th');
    thTotalEl.textContent = 'Daily Total';
    trHeaderEl.appendChild(thTotalEl);

    tblEl.appendChild(trHeaderEl); //append header to table

    document.getElementById('main-content').appendChild(tblEl); //go get the element then use the appendChild set it
}

//create stand alone footer (think how 'header' is built)
//function to pull data from each column (for loop within a for loop)
// function columnTotal()
// function createFooter() {

//     var trFooterEl = document.createElement('tr');  //create footer using tr still??
//     var tdHourlyTotalEl = document.createElement('th');
//     tdHourlyTotalEl.textContent = 'Hourly Total';
//     trFooterEl.appendChild(tdHourlyTotalEl); //append data to row

//     tblEl.appendChild(trFooterEl); //append footer to table

//     document.getElementById('main-content').appendChild(tblEl); //go get the element then use the appendChild set it
// }

//add each store
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//create table
createTable();


//Event Listeners and Event Handlers with forms
// Form Data
var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(allStores.length);

    var name = event.target.name.value;
    var minCustomers = event.target.minCustomer.value;
    var maxCustomers = event.target.maxCustomer.value;
    var avgSales = event.target.avgSales.value;

    new Store(name, parseInt(minCustomers), parseInt(maxCustomers), parseInt(avgSales)).render();
    console.log(allStores);
});

//FINALLY run render per store created
for (var store of allStores) {
    store.render();
}
