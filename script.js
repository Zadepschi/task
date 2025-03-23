/*const field = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;
console.log(answer)

button.addEventListener("click", function() {
 const textNumber = document.querySelector("#guess").value;
 
if (textNumber < 1 || textNumber >20) {
    Swal.fire({
        icon: "error",
        title: "Ой...",
        text: "Введи число от 1 до 20!",
      });
}
 else if (isNaN(textNumber)) {
    Swal.fire({
        icon: "error",
        title: "Ой...",
        text: "Введи число!",
      });
 }
 else { 
    if (textNumber < answer) {
        Swal.fire("Введи выше!");
    }
    else if (textNumber > answer) {
        Swal.fire("Введи ниже!");
    }
    else {
        Swal.fire({
            title: "Победа!!!",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    
    }
}

})




let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of integers from 1 to 100 is: " + sum);

let n = 100;
let sum = (n * (n + 1)) / 2;
console.log("The sum of integers from 1 to 100 is: " + sum);

//1
let number = 0;

if ( number < 0 ) {
    console.log("Отрицательное")
}
else {
    console.log("Положительное!")
}
//2  
let phrase = "Дана строка. Выведите в консоль длину этой строки.   "

console.log("Длина строки:     "+ phrase.length)

//3
let phrase = "Дана строка. Выведите в консоль последний символ строки";
 

console.log("Последний символ:" + phrase[phrase.length - 1])

//4
let number = 154;
if (number % 2 === 0) {
    console.log("Это число чётное!")
}
else {
    console.log("Это число нечётное!")
}
  

//5

let word1 = "Кастрюля";
let word2 = "капуста";
if (word1[0].toLowerCase() === word2[0].toLowerCase()) {
    console.log("Первые буквы совпадают!")
}
else {
    console.log("Первые буквы не совпадают!")
}
        
 //6
 let word = "Пельмень";
 if (word[word.length - 1] === "ь") {
    console.log("Предпоследняя буква:" + word[word.length - 2])
 }
 else {
    console.log("Последняя буква:" + word[word.length - 1])
 }


 //7
 //1.2.1

let number = 586478;

let first = number.toString()[0];
console.log(first)

//1.2.2

let number = 586478;

let last = number.toString();
let lastNumber =last[last.length - 1];
console.log(lastNumber)

let number1 = 123455864789; // Заданное число
let lastDigit = number1 % 10; // Получение остатка от деления на 10
console.log(lastDigit); // Вывод последней цифры


//1.2.3
let number3 = 4568949;
let first = parseInt(number3.toString()[0]);
let last = number3 % 10;
let sum = first + last;
console.log(sum)
 */

//1.2.4

//let number = -4568949789456;
//let count = number.toString().length;
//let absCount = Math.abs(number).toString().length;

//console.log(absCount)



/*
function calculateDestiny() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Пожалуйста, введите дату рождения.");
        return;
    }

    let numbers = birthdate.replace(/-/g, "").split("").map(Number);
    
    let sum1 = numbers.reduce((a, b) => a + b, 0);  
    let sum2 = sum1.toString().split("").map(Number).reduce((a, b) => a + b, 0);  
    let sum3 = sum1 - 2 * numbers[0]; 
    let sum4 = sum3.toString().split("").map(Number).reduce((a, b) => a + b, 0);  

    document.getElementById("result").innerHTML = `
        <p>Число судьбы: <b>${sum2}</b></p>
        <p>Кармическое число: <b>${sum4}</b></p>
    `;
}
*/