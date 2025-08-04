// Esercizio 1
let number1 = 14;
let number2 = 22;

if (number1 < number2) {
  console.log("verification 1 big to 2 ");
} else {
  console.log("verificaton 2 big to 1");
}

// Esercizio 2
const num = 3;
if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Big");
} else if (num < 25) {
  console.log("Huge");
}

if (3 < 5) {
  console.log("minore");
} else if (3 > 5) {
  console.log("maggiore");
}

// Eserczio 3

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) continue;
  else console.log(i);
}
