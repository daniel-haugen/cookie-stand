
// Store Location Objects

const seattle = {
  // declare min and max customers possible and average cookie order
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieOrder: 6.3,
  location: 'Seattle',
  hourlySales: [],

  // calculate a random number between min and max
  customerNumberGenerator: function () {
    return parseInt(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

const tokyo = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieOrder: 1.2,
  location: 'Tokyo',
  hourlySales: [],
  customerNumberGenerator: function () {
    return parseInt(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

const dubai = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieOrder: 3.7,
  location: 'Dubai',
  hourlySales: [],
  customerNumberGenerator: function () {
    return parseInt(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

const paris = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieOrder: 2.3,
  location: 'Paris',
  hourlySales: [],
  customerNumberGenerator: function () {
    return parseInt(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
  }
};

const lima = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieOrder: 4.6,
  location: 'Lima',
  hourlySales: [],
  customerNumberGenerator: function () {
    return parseInt(Math.random() * (this.maxCustomer-this.minCustomer) + this.minCustomer);
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

renderCookieStore(seattle);
renderCookieStore(tokyo);
renderCookieStore(dubai);
renderCookieStore(paris);
renderCookieStore(lima);




