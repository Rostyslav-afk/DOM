// BOM
// console.log(navigator.userAgent); // Браузер

// if (navigator.userAgent.includes("Chrome")) {
//     console.log("В користувача скачаний Chrome");
// } else if (navigator.userAgent.includes("Firefox")) {
//     console.log("В користувача скачаний Firefox");
// }

// //Платформа
// console.log(navigator.platform);

// // URl
// console.log(location.href);

// //Міняємо URl
// location.href = "https:/google.com"

// Історія Браузера
// history.back();
// history.forward();

// DOM

//Навігація по документу

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

//Получаємо обєкти body
const bodyElement = document.body;
//Получаємо перші і останні елементи
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);



