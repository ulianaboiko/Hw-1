"use strict";

// 1
const age = 16;
console.log(age);

// 2
const nome = "Uliana";
console.log(nome);

// 3
const isStudent = true;
console.log(isStudent);

// 4
const myString = "IGNITE - I grieve nothing I take everything. by Aaron Warner";
console.log(myString);

// 5
let myNumber = 2878;
myNumber = myNumber + 10;
console.log(myNumber);

//6
const myNull = null;
console.log(myNull);

//7
const userName = prompt("Введіть своє ім'я");
console.log("Користувачу", userName, "вітаємо Вас на цьому сайті!");

//8
const questionToCustomer = confirm("Чи хочете ви продовжити цю дію?");
if (questionToCustomer) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}

//9
alert("Ця дію є небезпечною!");
const askIfContinue = confirm("Підтвердити дію?");
if (askIfContinue) {
  console.log("Дякую за Ваше підтвердження!");
} else {
  console.log("Цю дію відмінено!");
}
