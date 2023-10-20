
//-------------------------------------------------------------
// Creating a customer database(3) array from person objects. |
// - Can be used with Albertsons store example                |
//-------------------------------------------------------------

let person1 = [{
	firstName:'Ava',
	lastName: 'Kost',
	age: 30,
	isAdmin: true,
	address: {
		street: '1245 Elm St.',
		city: 'RSM',
		state: 'CA',
		zipCode: 90746
		},
	email:	'johnD@gmail.com',
}]

const person2 = [{
	firstName:	'Emma',
	lastName: 'Kost',
	age: 40,
	isAdmin: false,
	address:{
		street:	'5678 State St.',
		city: 'Coto',
		state: 'CA',
		zipCode: 92679
		}, 
	email: 'samE@gmail.com',
}]

const person3 = [{
	firstName: 'Maya',
	lastName:  'Kost',
	age: 20,
	isAdmin: true,
	address: {
		street: '123 Main St.',
		city: 'Boston',
		state: 'MA',
		zipCode: 92653
	},		
	email: 'samE@gmail.com',
},
{
	firstName: 'Veronica',
	lastName:  'Wilson',
	age: 20,
	isAdmin: true,
	address: {
		street: '123 Main St.',
		city: 'Boston',
		state: 'MA',
		zipCode: 92653
	},		
	email: 'samE@gmail.com',
},
{
	firstName: 'Judah',
	lastName:  'Wilson',
	age: 20,
	isAdmin: true,
	address: {
		street: '123 Main St.',
		city: 'Boston',
		state: 'MA',
		zipCode: 92653
	},		
	email: 'samE@gmail.com',
}]


// Created customers(5) database.
const customers = person1.concat(person2, person3);
// Log all current customers names.//
console.log(customers.map((item) => item.firstName));

// End of customers database.

//-----------------------------------------------------------
// Created Albersons store items database.                  |
//-----------------------------------------------------------

// Created database of items being sold at Albertsons.
const cart = [
  {
    id: 1,
    name: "milk",
    quantity: 0,
    price: 4.00,
  },
  {
    id: 2,
    name: "eggs",
    quantity: 0,
    price: 6.00,
  },
  {
    id: 3,
    name: "hot dogs",
    quantity: 0,
    price: 6.00,
  },
  {
    id: 4,
    name: "bread",
    quantity: 0,
    price: 3.00,
  },
  {
    id: 5,
    name: "oranges",
    quantity: 0,
    price: 5.00,
  },
  {
    id: 6,
    name: "apples",
    quantity: 0,
    price: 4.00,
  },
   {
    id: 7,
    name: "cereal",
    quantity: 0,
    price: 4.00,
  },
  {
    id: 8,
    name: "coffee",
    quantity: 0,
    price: 20.00,
  },
   {
    id: 9,
    name: "cheese",
    quantity: 0,
    price: 3.00,
  },
  {
    id: 10,
    name: "beef",
    quantity: 0,
    price: 7.00,
  },
 
  {
    id: 11,
    name: "SmartHome",
    quantity: 0,
    price: 3.00,
  },
  {
    id: 12,
    name: "PiPico",
    quantity: 0,
    price: 7.00,
  },

 
 
 
 
 
 
 
 
 
];
// Log all item names.
console.log(cart.map((item) => item.name));

// Added new property 'bought: false' to cart array.
const newCart = cart.map((newProp) => newProp.bought = 'false');

//-----------------------------------------------------------
// Customer went shopping at Albersons.                  |
//-----------------------------------------------------------

console.log('--------------------------------------------');
// Get Customer first name and locate index in database.
let customer = prompt('Enter your FIRST name: ');

const firstName = document.getElementById('firstName');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
//let customer = firstName.value

function fun1() {
	out1.innerHTML = firstName.value;
	console.log(firstName.value);
}

btn1.addEventListener('click',fun1);

// Need to check if firstName entered before proceeding with code.

//let customer = 'Tom';
const index = customers.findIndex(object => object.firstName === customer);
console.log(customer, 'customer index: ', index);

console.log('--------------------------------------------');

// Get Customer foodItem and foodQty in while loop with Prompt.
//	- updated 'bought' & 'quantity' key values in card database (1-10).
//	- find food index to know which object (1-10) to update.
//	- Empty string '' in food enty prompt will exit while loop.

let i = 0;
let maxBuy = 10; // set max # of item allowed to buy.
while (i < maxBuy) {
	foodItem = prompt('Enter FOOD bought: ');
	if (foodItem === '') { 
		break;
		} else { 
		foodQty =  prompt('Enter QUANTITY bought: ');
		
	}
// continues until 885


const index2 = cart.findIndex(food => food.name === foodItem);
const buyState = true;
cart[index2].bought = buyState;
console.log(foodItem, 'food index: ', index2, 'bought: ', foodQty);

// Update quantity value for food bought.
cart[index2].quantity = foodQty;
console.log(foodItem, 'food info:', cart[index2]);
console.log('------------------------------------------------');


// Customer food items(10) in database, after purchase from above.
cart[index2].bought = buyState; cart[index2].quantity = foodQty;//1
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;
cart[index2].bought = buyState; cart[index2].quantity = foodQty;//item 10

	i++;
}

//console.log('done buying, ready to total');

// Calulated Total price of customer purchases.
const cartTotalPrice = cart
		.filter((element) => element.bought === true)
		.reduce((total, element) => total + (element.price * element.quantity),0);

// Filtered array based on purchases.
const cartBuyObj = cart.filter((element) => element.bought === true);
//console.log('--1. ', cartBuyObj);

// Maped names of items purchased.
const cartBuyName = cartBuyObj.map((element) => element.name);
//console.log('--2. ', cartBuyName);

// Maped quantity of items purchased.
const cartBuyQty = cartBuyObj.map((element) => element.quantity);
//console.log('--2. ', cartBuyName);


// Logged receipt for customer.
document.write('<p>---------------------------------------------</p>');
document.write(`<p>--3. Your Total cost for today is: $ ${cartTotalPrice}</p>`);
document.write(`<p>--4. You purchased: (${cartBuyName})  qty: (${cartBuyQty})</p>`);
alert(`Total cost: $ ${cartTotalPrice}`);
payment = prompt(`Total cost is: $ ${cartTotalPrice}: Amount given in payment?: $`);
const changeReturned = payment - cartTotalPrice;
document.write(`<p>Amount given is: $ ${payment}</p>`);
document.write(`<p>Your change is: $ ${changeReturned}</p>`);
alert(`You paid: $ ${payment} -----Your change returned is: $ ${changeReturned}`);
document.write(`<p>--5. ${customer},  Thank You for shopping at Albertsons. Have a Blessed Day!</p>`);
alert(`${customer},  Thank You for shopping at Albertsons. Have a Blessed Day!!`);
document.write('<p>----------------------------------------------</p>');

document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');

document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');
document.write('<p></p>');

document.write('<p>Notes:</p>');
document.write('<p>Rev. 2- ');
document.write('<p>1. Using index.html, main.js and Albertson.js files!</p></p>');
document.write('<p>2. Need to add main.css file for styling!</p>');

// Refresh Browser WebPabe.
//window.location.reload();


// End of Albertson store example.

// Changed 'console.log' to 'document.write', and <p></p>!!!!
/*
let i = 0;
while (i <= 2) {
	let foodItem = prompt('enter food: ');
	console.log('food: ', foodItem);
	if (foodItem === '') {
		console.log('break');
		break; 
		} else {
		let foodQty = prompt('enter qty: ');
		console.log('qty: ', foodQty); 
		i++;
	}
	console.log('food has been purchased');		
}
console.log('thank you');



// While & Do...While. Unknown # of iterations.

let i = 0;
while (i <= 20) {
	console.log('number: ' + i);
	i++;
}


// - Do ...while. When we want condition to run at least once.
i = 1;
do {
	console.log('number: ' + i);
	i++;	
}while (i <= 20);
*/


/*
let person2 = [
	{
	name: {
		first: 'john',
		last: 'smith',
		}, 
	id:	  {
		id1: 1,
		}, 
	addr: {
		street: '123 Main St.', 
		city:	'Long Beach', 
		state: 'CA',
		}
	},
	{
	name: {
		first: 'sam',
		last: 'elliot',
		},	 
	id:   {
		id1: 2,
		}, 
	addr: {
		street:'456 Towne St.', 
		city: 'Cypress', 
		state: 'CA',
		}
	},
	{
	name: {
		first: 'tom',
		last: 'jones',
		},
	id:   {
		id1: 3,
		}, 
	addr: {
		street: '789 Carson St.', 
		city: 'Carson', 
		state: 'CA',
		}
	},
];


const person3 = [ 
	{
	name: {
		first:'nancy', 
		last: 'keller'
		},
	id: {id1: 1},
	addr: {street: '123 Avalon', city: 'carson', state: 'CA'},
	},
];




const library = [
	{
	title: 'History of Beatles_1',
	author: 'Rolling Stone',
	status: {
		own: 'true',
		reading: 'false',
		read: 'false',
			}
	},	
	{
	title: 'History of Beatles_2',
	author: 'Rolling Stone',
	status: {
		own: 'true',
		reading: 'false',
		read: 'false',
			}
	},
	{
	title: 'History of Beatles_3',
	author: 'Rolling Stone',
	status: {
		own: 'true',
		reading: 'false',
		read: 'false',
			}
	},
];




const arrayObj = [
			{name: 'john', age: 20},
			{name: 'tom', age: 30},
			]

// Returning an object, add () around {}
const createObj = () => ({
	name: 'Brad',
});	
console.log(createObj());

// Working with number array.
const numbers = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
const numbers2 = [2,10,8,6,4,12,15,54,76]

// Arrow notation in a callback
numbers.forEach(function (n) { // long hand
	console.log(n);
});	
// above/below code do the same
numbers.forEach((n) => console.log(n));// short hand
*/
