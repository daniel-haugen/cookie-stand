'use strict';
// Define Store constructor function

function CreateStore(location, minCus, maxCus, avgCookieOrder) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieOrder = avgCookieOrder;
  this.hourlySales = [];
}

// Create Store objects
let seattle = new CreateStore('Seattle', 23, 65, 6.3);
let tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
let dubai = new CreateStore('Dubai', 11, 38, 1.7);
let paris = new CreateStore('Paris', 20, 38, 2.3);
let lima = new CreateStore('Lima', 2, 16, 4.6);


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

// Create the Table structure

const storeContainer = document.getElementById('store-ctr');
const section = createEl('section', storeContainer);
const table = createEl('table', section);
const topHeadingRow = createEl('tr', table);
createEl('th', topHeadingRow);
for (let i = 0; i < hours.length; i++) {
  createEl('th', topHeadingRow, hours[i]);

}
const dailyLocationTotal = createEl('th', topHeadingRow, 'Daily Location Total');


// render method for objects
CreateStore.prototype.render = function() {
  const locationRow = createEl('tr', table);
  const locationRowHeading = createEl('th', locationRow, this.location);
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

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



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

