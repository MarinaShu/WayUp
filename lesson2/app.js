//    Задание 1:

for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log( i );
    }
}

//    Задание 2:

const human = {
    firstName : 'Marina',
    lastName : 'Shustikova',
    year : 32,
    pets : false
    };

console.log(human);

//    Задание 3:

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

const result =`"${(array [3])} ${(array [7])} ${(array [0])} ${(array [8])} ${(array [11])} ${(array [5])} ${(array [9])}, ${(array [6])} ${(array [4])} ${(array [1])} ${(array [12])} ${(array [2])} ${(array [10])}"`;
console.log(result);

//    Задание 4:

function showFullName (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

showFullName ('Марина', 'Шустикова');

//    Задание 5:

let i = 21;
while (i <= 67) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
