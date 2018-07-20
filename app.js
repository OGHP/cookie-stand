'use-strict';

//constructor functions: look for consistancy, what's everyone using? Define a blueprint (aka constructor function)

var tblEl; //global variable for table (FROM LECTURE)
var allStores = []; //holds properties of every new instance that we create using 'new Store'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var hourlyTotals = [];

console.log('all stores'. allStores);
console.log('all stores cookier per hour', allStores.cookiesSoldPerHour);

function Store(name, minCustomers, maxCustomers, avgSales) {
    this.name = name; //allows us to instantiate a new instance of each store
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSales = avgSales;
    this.customersPerHour = [];
    this.cookiesSoldPerHour = [];
    this.dailyCookiesTotal = 0;

    allStores.push(this); //takes everything in the Store function and puts it into the array above
    // nukeTotalRow();
    // this.render();

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

Store.prototype.calculateSales = function() { //calculate sales
    this.calculateCustomersPerHour();

    for (var numberOfCustomers of this.customersPerHour) {
        var cookies = Math.ceil(this.avgSales * numberOfCustomers);
        this.cookiesSoldPerHour.push(cookies);
        this.dailyCookiesTotal += cookies;
    }
};

Store.prototype.render = function() {
    this.calculateSales();

    //This creates the rows for each store
    var trStoreEl = document.createElement('tr'); //row for each store name
    var tdNameEl = document.createElement('td'); //create the cells that will contain data
    tdNameEl.textContent = this.name; //the text going into the cell (the name of the store)
    trStoreEl.appendChild(tdNameEl); //append cell (each store name) to a row

    for(var index in hours) { //loop over every hour to get the index value
        var tdDataEl = document.createElement('td'); //create a cell to hold new data (for every index in hours)
        tdDataEl.textContent = this.cookiesSoldPerHour[index]; // make cell that will === the number of cookies sold per hour
        trStoreEl.appendChild(tdDataEl); //append the number of cookies sold per hour to each store row
    }

    //***** CREATING THE CELL FOR THE DAILY TOTALS AND PROVIDING TEXT CONTENT FOR THE DAILY TOTALS *******

    //This creates the daily total column to show the cookies sold per store/day by row (per store)
    var tdTotalEl = document.createElement('td'); //one cell for the "daily total" column
    tdTotalEl.textContent = this.dailyCookiesTotal; //put the total amount of cookies sold per day/per store
    trStoreEl.appendChild(tdTotalEl); //append total number of cookies sold per day/per store to the table row for each store

    tblEl.appendChild(trStoreEl); //append the store names rows to the table element
};

function createTable() {
    //table header
    tblEl = document.createElement('table'); //creates the conatiner to hold the table
    var trHeaderEl = document.createElement('tr'); //creates header row
    var thBlankEl = document.createElement('th'); //creates an empty header cell
    thBlankEl.textContent = ''; //makes the empty header cell empty (this "appears" above the list of store names)
    trHeaderEl.appendChild(thBlankEl); //append the empty cell to the header

    for (var index = 0; index < hours.length; index++) { //iterate over store hours
        var thEl = document.createElement('th'); //creates a cell for every element in the hours array
        thEl.textContent = hours[index]; //this table head element will hold the hours based on their location in the index
        trHeaderEl.appendChild(thEl); //append the store hours to the table header
    }

    //********* PROVIDING A NAME TO THE HEADER CELL FOR THE DAILY TOTALS COLUM ON LINE 66 ***********
    var thTotalEl = document.createElement('th'); //creates a table header cell
    thTotalEl.textContent = 'Daily Total'; //this makes the table header cell have the text to say "Daily ToTal"
    trHeaderEl.appendChild(thTotalEl); //append table header cell with text to the table row

    tblEl.appendChild(trHeaderEl); //append the table header to table element

    document.getElementById('main-content').appendChild(tblEl); //go get the element then use the appendChild set it
}

var grandTotalOfAllHours = 0;

//*******CREATE THE FOOTER ROW TOTALS AND PUSH TO ARRAY ABOVE (ON LINE 108)
function calculateFooterTotals() {
    //maybe no need:
    // var trFooterTotalEl = document.createElement('tr');
    // trFooterTotalEl.id = 'total-row';

    for (var i = 0; i <hours.length; i++) { //loops over each hour
        //resets when you switch columns
        var total = 0;

        for (var j = 0; j < allStores.length; j++) { //loop over each of the 5 names
            total += allStores[j].cookiesSoldPerHour[i];
            console.log('cookies sold per hour cell', allStores[j].cookiesSoldPerHour[i]);

            console.log('footer total', total);

        }

        hourlyTotals.push(total); //push hourly totals to empty array
        console.log('hourly totals', hourlyTotals);


        // var tdGrandTotalEl = document.createElement('td'); //create
        // trFooterTotalEl.appendChild(tdGrandTotalEl); //append cell to footer row

        // grandTotalOfAllHours += total;
        // tdGrandTotalEl.textContent = grandTotalOfAllHours; //give content
        // console.log('grand total', grandTotalOfAllHours);

        // tblEl.appendChild(trFooterTotalEl); //append footer total row to the table element
    }
    console.log('hourly totals', hourlyTotals);

    //code for total of all totals
    // will need
    // var tdGrandTotalEl = document.createElement('td'); //create
    // trFooterTotalEl.appendChild(tdGrandTotalEl); //append cell to footer row

    // grandTotalOfAllHours += total;
    // tdGrandTotalEl.textContent = grandTotalOfAllHours; //give content
    // console.log('grand total', grandTotalOfAllHours);
}

//******CREATE THE FOOTER ROW**********
function createFooter() {
    var trFooterEl = document.createElement('tr'); //creates a new row
    var tdFooterCellEl = document.createElement('td'); //creates a new data cell
    tdFooterCellEl.textContent = 'Hourly Totals';

    trFooterEl.appendChild(tdFooterCellEl);

    //loop through cookies per hour

    for (var i = 0; i < hours.length; i++) {
        //this is creating the cells and giving them content
        var tdTotalEl = document.createElement('td');
        tdTotalEl.textContent = hourlyTotals[i]; //get hourly totals
        // console.log(hourlyTotals);
        trFooterEl.appendChild(tdTotalEl); //append cells to footer row

    }
    tblEl.appendChild(trFooterEl);
}


// function nukeTotalRow () {
//     var totalRow = document.getElementById('total-row');
//     if (totalRow) {
//         totalRow.remove();
//     }
// }


//*****call create table******
createTable();
createFooter();
calculateFooterTotals();


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

//*****add each store*****
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

//FINALLY run render per store created
for (var store of allStores) {
    store.render();
}
