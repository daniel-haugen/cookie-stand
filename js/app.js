

// Store Location Objects

const seattle = {
  // declare min and max customers possible and average cookie order
  minCustomer: '23',
  maxCustomer: '65',
  avgCookieOrder: '6.3',
  location: 'Seattle',
  hourlySales: [],

  // calculate a random number between min and max
  customerNumberGenerator: function () {
    return Math.round(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

// parseInt(store.avgCookieOrder);
console.log(seattle.customerNumberGenerator());

const tokyo = {
  minCustomer: '23',
  maxCustomer: '65',
  avgCookieOrder: '6.3',
  location: 'Tokyo',
  hourlySales: [],
  customerNumberGenerator: function () {
    return Math.round(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

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


// grab store container
const storeContainer = document.getElementById('store-ctr');



function renderCookieSection(store) {

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
    const hourlySales = (parseInt(store.avgCookieOrder) * store.customerNumberGenerator());
    listItem.textContent = `${hours[i]}: ${hourlySales} cookies`;
    list.appendChild(listItem);
  }



}

renderCookieSection(seattle);

renderCookieSection(tokyo);








