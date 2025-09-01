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

for(i = 0; i < 4; i++) // uses compile time constant
	console.log(array[i]);

for(i = 0; i < array.length; i++)
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
console.log("slice from 1 to 4: ", arr.slice(1, 4));
console.log("splice from 1 to 3: ", arr.splice(1, 3));

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
