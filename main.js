//⁡⁣⁢⁢𝘁𝗵𝗮𝘁𝘀 𝘄𝗵𝗮𝘁 𝗶 𝗽𝗿𝗲𝗳𝗲𝗿 ...⁡

// let getTime = +prompt(" what time is it ? ");
// let newCase = 0;

// if (getTime >= 0 && getTime < 7) {
//     newCase = 1
// } else if (getTime >= 7 && getTime <= 10) {
//     newCase = 2
// } else if (getTime >= 11 && getTime < 18) {
//     newCase = 3
// } else if (getTime >= 18 && getTime < 24) {
//     newCase = 4
// } else {
//     console.log('something went wrong');
// };
// console.log(newCase);

// switch (newCase) {
//     case 1:
//         alert(getTime + ' часа ночи');
//         break;
//     case 2:
//         alert(getTime + ' часов утра');
//         break;
//     case 3:
//         alert(getTime + ' часа дня');
//         break;
//     case 4:
//         alert(getTime + ' часов вечера');
//         break;
//     default:
//         alert('something went wrong')
// };

// ⁡⁢⁣⁢1.2 What you expected ...⁡

let setTime = +prompt('<checkTime>');
switch (setTime) {
    case 1:
        alert('(1) час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа ночи');
        break;
    case 5:
        alert('5 часов утра');
        break;
    case 6:
        alert('6 часов утра');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов утра');
        break;
    case 12:
        alert('Полдень');
        break;
    case 13:
        alert('(1) час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    case 24:
        alert('Полночь');
        break;
    default:
        alert('Что то пошло не так ...')
}

// ⁡⁢⁣⁢1.1⁡

let pronouns = prompt('Как вас зовут ?')
let age = +prompt('Вам сколько лет ?')

if (age > 0 && age <= 18) {
    alert(pronouns + ' , вы еще молоды, Вам нужно учиться')
} else if (age > 18 && age <= 50) {
    alert(pronouns + ' , вам нужно работать')
} else if (age > 50 && age <= 59) {
    alert(pronouns + ' , вам скоро на пенсию')
} else if (age > 59 && age <= 100) {
    alert(pronouns + ' , вы пенсионер')
} else {
    alert('Что то пошло не так ...')
}

// ⁡⁣⁢⁡⁢⁣⁢1.3⁡ ez⁡

let a = +prompt('pick a number (1st)'); //24
let b = +prompt('pick a number (2nd)'); //22
let c = +prompt('pick a number (3rd)'); //21

if (a > b && a < c || a < b && a > c) {
    alert('Среднее число ' + a);
} else if (a < b && b < c || b < a && b > c) {
    alert('Среднее число ' + b);
} else if (c > a && c < b || c < a && c > b) {
    alert('Среднее число ' + c);
} else if (a == b || a == c || b == c) {
    alert('Вы вели одинаковые числа');
} else {
    alert('Что то пошло не так ...');
}