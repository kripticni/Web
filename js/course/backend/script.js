function greet(name){
	return `Hello ${name}!`;
}

function greet_no_args(){
	console.log("Hi!");
	return;
}

function mjau(a, b){
	console.log(a + b + c);
	return;
}

var c = 3; // global

mjau(2, 3);
console.log( greet("World") );

const prompt_create = require("prompt-sync");
const prompt = prompt_create();

const username = prompt("Enter your name: ");
console.log( greet(username));

// Data Types
// string - niz od karakteri, tekst
// boolean - true ili je false
// number - brojka
// undefined - ?????
// null - nista
// BigInt - veliki celobrojni broj

// Variables
// var, function scoped variable, can be global, is hoisted
// let, block scope variable, can't be redeclared
// const, can't point to a different object but
// 	  the object can be mutated, constant

// Operators
// +
// -
// /
// *
// **, to the power
// %, remainder
// --, minus 1
// ++, plus 1
// *=, +=, ... usage: c *= 2; means c = c * 2;

var num = 6;
const string = "7";
console.log(string + num); // num gets converted to a string
// and then it uses the string operator for +, which is concat
// so it joins the two strings together into 76
// for other operations its the other way around
// if you try to convert "hello" into a number you get NaN
			  
const truth = true;
console.log(num + truth); // truth converts to 1
// and then simply getts added to produce 7

// this is utter bullshit and should be 
// avoided at all cost!!!
// to avoid this use constructors
// or use safe parsers
// get proper types and not leave the
// type conversion to javascript
console.log(num + Number(string));
console.log(String(num) + string); // or .toString()

// Comparasion Operators
// ==, does the type conversion, avoid like the plague
// ===, does the normal comparasing, use this
// !=, no
// !==, for inequality
// <, less than
// >, greater than
// <=, less than or equal to
// >=, greater than or equal to

// Logical Operators
// &&, and
// ||, or
// !, not
// logical operators cause all sorts of nonsense
// when used with non-boolean datatypes, avoid that
// convert to boolean with the Boolean(x) constructor

const string_input = prompt("Input a boolean: ");
const bool_input = Boolean(string_input);

if ( bool_input === true ){
	console.log("Input was true!");
} else {
	console.log("Input was false :(");
}

if ( string_input === "password" )
	console.log("You found the secret input.");

var a = 3;
var b = 4;
var maximum = (a > b)? a : b;
//	       cond. true:false

console.log(`Maximum is ${maximum}`);

var value = 3;
switch(value){
	case 0:
		exit();
	case 1:
		console.log("stdout");
	case 2:
		console.log("2 + 3 = 5");
		break;
	case 3:
		num = Number(prompt("Enter a number: "));
		maximum = (maximum > num)? maximum : num;
		break;
	default:
		console.log("Number out of range");
		break;
}

const array = [1, 2, 3, 4]; // even if const it only
// means that you cannot have another array object assigned
// but the array elements are still mutable

for(let i = 0; i < 4; i++) // uses compile time constant
	console.log(array[i]);

for(let i = 0; i < array.length; i++)
	console.log(array[i]);

console.log(Array.from("string"));

// using shift takes and returns the first element 
// of the array
// using unshift adds

const arr = Array.from("hello");
console.log(arr);
console.log("indexOf o: " + arr.indexOf("o"));
console.log("lastIndexOf l: " + arr.lastIndexOf("l"));
var char = arr.shift();
console.log("shift: " + char);
arr.unshift(char);
console.log("unshift: " + arr); 
console.log("concat with world: ", arr.concat(Array.from("world")));
console.log("join with +: ", arr.join("+"));
console.log("join with ' ': ", arr.join(""));
console.log("slice from 1 to 4: ", arr.slice(1, 4)); // start index, end index
console.log("splice from 1 to 3: ", arr.splice(1, 3)); // start index, delete count

// Destructure of array
var [num_x, num_y] = [1, 2]
console.log(num_x, num_y);

// Spread with Destructure
[num_x, ...num_y] = [1, 2, 3, 4]
console.log(num_x, num_y);

// You can have multipul references to the
// same array even with const
// Push method 
const arr2 = arr;
arr2.push("world");
console.log(arr, arr2);

// You can also copy with the spread operator
const arr3 = [...arr2]
arr3.splice(0, 2);
console.log(arr2, arr3);

let i = 0;
do {
	if(arr[i] === "world")
		break;
	console.log(arr[i]);
	i++;
} while(i < arr.length);

while(i < arr.length){
	if(arr[i] === "h"){
		i++;
		continue;
	}
	console.log(arr[i]);
	i++;
}

for(let value of arr) // c++ like range based for loop
	console.log(value);

for(let [i, value] of arr.entries())
	console.log(i, ": ", value);

const obj = {
	name: "Alice",
	age: 23,
	sayHello: function() {
		return `${obj.name}: Hello!`;
	},
	career: {}
}

const obj2 = {
	name: "Bob",
	arr: [1, 2, 3],
	hairColor: "brown"
}

// references all the non-primitives
// copies all the primitives
// obj2 overwrites duplicate key pairs
const obj3 = {...obj, ...obj2};
obj2.arr.push("string"); // showing referencing
delete obj3.career;

console.log(obj.sayHello(), obj3);

// This uses a constructor by calling the new keyword
// if you dont call the new keyword you will simply call
// a function, this is okay for primitives but not for object
const set = new Set([1, 2, 3, 4]);
set.add(1);
set.delete(1);
set.has(1);
set.size;

for(const value of set){
	console.log(value);
}
arr4 = Array.from(set);
set.clear();

const array1 = [1, 3, 6, 8, 9];
for(i = 0; i < array1.size; i++);
	console.log(array[i]);

const bank = new Map([["alice", 300], ["bob", 150]]);
bank.set("eve", 100);
console.log("Alice has: " + bank.get("alice"));

bank.delete("alice");
for(const [key, value] of bank)
	console.log(key,":", value);

for(const key of bank.keys())
	console.log(key);

for(const value of bank.values())
	console.log(value);

if(bank.has("eve"))
	console.log("Eve exists in the bank logs.");
else console.log("Eve doesnt exist in the bank logs.");

var a = 3;
var b = 4;
try {
	a = a + b;
	throw new Error("404 not found");
} 
catch(error) {
	a = a - b;
	console.log(error.message);
}
finally {
	console.log("end of the try-catch");
}

// arrow function, takes name adds 1 and returns
// arrow functions inherit from global scope
const greet1 = (name) => name + "1";
console.log(greet1("Name"));

// rest parameters, take any amount of functions as an array
function addNums(...numbers){
	var sum = 0;
	for(let i = 0; i < numbers.length; i++)
		sum += numbers[i];
	return sum;
}

console.log(addNums(1, 2, 3, 4, 5, 6));

console.log(array);
// 1, 2, 3, 4

// reduce, map and filter methods

// 2, 4, 6, 8
const doubled = array.map((element) => element * 2);
console.log(doubled);

const reduced = array.reduce((sum, element) => sum = sum + element, 0);
console.log(reduced);

const odd = array.filter((element) => element % 2 === 1);
console.log(odd);

// This keyword
// it can also be defined straight in the object
// but also like this
function personGreet(){
	console.log(`Hello I am ${this.name}`);
}
const person1 = {
	name: "Alice",
	greet: personGreet
};

const person2 = {
	name: "Bob",
	greet: personGreet
};

person1.greet();
person2.greet();

// Promises
// States: resolve, reject, and pending
var izranucata_masa_sunca = 0;
const promise = new Promise((resolve, reject) => {
	// logic goes here
	value = "good";
	error = -1;
	if(true) { // handle
		resolve(value);
	} else {
		reject(error);
	}
});

// this waits for the promise to 
// no longer be pending
promise.then((value) => {
	console.log(value);
}) // if resolved
.catch((value) => { // reject
	console.log("rejected:", value);
})
.finally(() => {
	console.log("cleanup code");
});

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo"));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, "bar"));

// ...
// ...
// ...
// ...

// if all are true, then, if any is false catch
Promise.all([promise1, promise2, promise3])
.then((result) => {
	console.log(result);
})
.catch((error) => {
	console.error(error);
});

// async javascript, oop in javascript, prototypes
