

console.log('Задача 1');
console.log('...')

let map = new Map();
map.set('ru', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
map.set('en', 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');

let obj = Object.fromEntries(map.entries()); 

console.log('Решаем через if');
let lang = prompt("Какой язык у сайта?");
if (lang == "ru") {
	console.log(obj.ru);
} else if (lang == "en") {
	console.log(obj.en);
}

console.log('Решаем через switch-case');
switch (lang) {
	case "ru":
		console.log(obj.ru);
		break;
	case "en":
		console.log(obj.en);
		break;
}


console.log('...')
console.log('Задача 2');

let namePerson = prompt('Введите имя');
console.log(namePerson);

namePerson == "Артем" ? console.log('директор') : namePerson == "Максим" ? console.log('преподаватель') : console.log("студент");

