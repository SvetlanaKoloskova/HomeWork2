//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let releaseFirstIphone = 2007;
alert(releaseFirstIphone);

//Задание 3
let languageCreator = 'Brendan Eich';
alert(languageCreator);

//Задание 4
let b = 10;
let c = 2;
let addition = b + c;
let subtraction = b - c;
let multiplication = b * c;
let division = b / c;
alert(`${b} + ${c} равно ${addition},\n${b} - ${c} равно ${subtraction}\n${b} * ${c} равно ${multiplication}\n${b} / ${c} равно ${division}`);

//Задание 5
let result = 5 ** 2;
alert(result);

//Задание 6
let a = 9;
let b = 2;
alert(a % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет?');
alert(age);

//Задание 9
const user = {
    name: 'Sveta',
    age: 23,
    isAdmin: true
};

user.cityOfResidence = 'Novosibirsk';

user.age = 24;

delete user.cityOfResidence;

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задание 10
let name = String(prompt('Ваше имя?'));
alert(`Привет, ${name}!`);