
// Store Location Objects

function CreateStore(location, minCus, maxCus, avgCookieOrder) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieOrder = avgCookieOrder;
  this.hourlySales = [];
}

let seattle = new CreateStore('Seattle', 23, 65, 6.3);
let tokyo = new CreateStore('Tokyo', 3, 24, 1.2);
let dubai = new CreateStore('Dubai', 11, 38, 1.7);
let paris = new CreateStore('Paris', 20, 38, 2.3);
let lima = new CreateStore('Lima', 2, 16, 4.6);







// Hour Array?

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

// Function to create a section for a store.
function renderCookieStore(store) {
  // grab store container
  const storeContainer = document.getElementById('store-ctr');

  // render section element
  const section = document.createElement('section');
  section.id = store.location;
  storeContainer.appendChild(section);

  // render heading
  const heading = document.createElement('h3');
  heading.textContent = store.location;
  section.appendChild(heading);

  // render the ul element
  const list = document.createElement('ul');
  section.appendChild(list);

  // render li for every hour in array
  for (let i = 0; i < hours.length; i++) {
    const listItem = document.createElement('li');
    store.hourlySales.push(Math.round((store.avgCookieOrder) * store.customerNumberGenerator()));
    listItem.textContent = `${hours[i]}: ${store.hourlySales[i]} cookies`;
    list.appendChild(listItem);
  }

  // sum up the total sales
  let total = 0;
  for (let k = 0; k<store.hourlySales.length; k++) {
    total += store.hourlySales[k];
  }

  // render total sales to list
  const totalCount = document.createElement('li');
  list.appendChild(totalCount);
  totalCount.textContent = `Total: ${total.toLocaleString()} cookies`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}



renderCookieStore(seattle);
renderCookieStore(tokyo);
renderCookieStore(dubai);
renderCookieStore(paris);
renderCookieStore(lima);




