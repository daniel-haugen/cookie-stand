'use strict';
// Define Store constructor function

function Store(location, minCus, maxCus, avgCookieOrder) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieOrder = avgCookieOrder;
  this.hourlySales = [];
}

// Create Store objects
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 1.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// Hour Array
let hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm'
];

// function to create the Table Header
function createTableHeader() {
  const storeContainer = document.getElementById('store-ctr');
  const table = createEl('table', storeContainer);
  const thead = createEl('thead', table);
  const theadRow = createEl('tr', thead);
  createEl('th', theadRow);
  for (let i = 0; i < hours.length; i++) {
    createEl('th', theadRow, hours[i]);
  }
  createEl('th', theadRow, 'Daily Location Total');
  createEl('tbody', table);
}

// RENDER METHOD For Each Store
Store.prototype.render = function() {
  const t = document.querySelector('table>tbody');
  const locationRow = createEl('tr', t);
  createEl('th', locationRow, this.location);
  let total = 0;

  // load up the object's hourly sales with random numbers
  for(let k = 0; k < hours.length; k++){
    this.hourlySales.push(Math.round((this.avgCookieOrder) * getRandomInt(this.minCus, this.maxCus)));
  }
  for(let j = 0; j < this.hourlySales.length; j++) {
    createEl('td', locationRow, this.hourlySales[j]);
    total += this.hourlySales[j];
  }
  createEl('td', locationRow, total.toLocaleString());
};

// function to create Table Footer
function createTableFooter() {
  const table = document.getElementsByTagName('table')[0];
  const tfooter = createEl('tfoot', table);
  createEl('th', tfooter, 'Total');
  let hourlySum = [];
  let htotal = 0;

  function hourlyTotal(a,b,c,d,e) {
    for (let k = 0; k < hours.length; k++){
      htotal += a.hourlySales[k] + b.hourlySales[k] + c.hourlySales[k] + d.hourlySales[k] + e.hourlySales[k];
      hourlySum.push(htotal);
      htotal = 0;
    }
  }
  hourlyTotal(seattle, tokyo, dubai, paris, lima);

  console.log(hourlySum);

  for (let i = 0; i < hourlySum.length; i++){
    createEl('td', tfooter, hourlySum[i]);
  }
  // // render out the bottom row totals
  for (let i = 0; i < hourlySum; i++){
    createEl('td', tfooter, hourlySum[i]);
  }}



// CAALLLLSSS
createTableHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createTableFooter();

// support functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function createEl (tag, parent, text) {
  const child = document.createElement(tag);
  parent.appendChild(child);
  if (text !== undefined) {
    child.textContent = text;
  }
  return child;
}


