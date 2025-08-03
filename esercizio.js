//Esercizio 1

/*number: box with a number inside, like 5 or 4.23.
string: box with words like "Ciao"
boolean: box with only two things; 'true' and 'false'
undefined: empty box with nothing inside 
null: empty box that we decided to empty 
object: box with other box inside 
array: ;list of things put in order like [ "apple" , "strawberry", "pineapple" ]
*/

//Esercizio 2

let number1 = 12;
let number2 = 20;

let result = number1 + number2;

console.log("Sum of numbers", result);

//Esercizio 3

let x = 12;
let y = "Ciao";
let cestaFrutta = ["Giuliana", "banane", "mela", "fragola"];
let persona = {
  nome: "Giuliana",
  eta: 24,
  occhi: "marrone",
};

//Esercizio 4

let nome = "Giuliana";
console.log("Name", nome);

//Esercizio 5

let subtraction = 4 - x;
console.log(subtraction);

//Esercizio 6

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

//name1 === name2 (Tre uguali ti va a fare il paragone tra tipo di data , in questo caso stringa e il valore, in questo caso diversi)
//name1 == name2 (Tipo di paragone che mi va a prendere come buono solo il valore )
