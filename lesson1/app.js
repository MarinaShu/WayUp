//    Задание 1:
const city = 'Йошкар-Ола';
const country = 'Россия';
let citiNumber = 254987;
let footballStadium = true;

let infoCity = `Я живу в городе ${city}, страна ${country}. Численность нашего города ${citiNumber} человек.`;
console.log(infoCity);

//    Задание 2:
let a = 40;
let b = 70;
let s = a * b;

console.log(`площадь прямоугольника = ${s} cм`);

//    Задание 3:

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let distance = (speedOfFirst + speedOfSecond) * time ;
console.log(`расстояние между городами ${distance} км`);

//    Задание 4:

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
    } else if (randomNumber > 50) {
    console.log('randomNumber больше 50'); }
        else {
            console.log('randomNumber больше 20, и меньше 50');
        }

//    Задание 5:

switch (true) {
    case (randomNumber < 20) :
        console.log('randomNumber меньше 20');
        break;
    case (randomNumber > 50) :
        console.log('randomNumber больше 50');
        break;
    default :
        console.log('randomNumber больше 20, и меньше 50');
        break;
}