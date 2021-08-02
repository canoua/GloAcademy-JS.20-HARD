
let array = [
	'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
	'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
];

console.log('Задача 1');
console.log('...')

console.log('Решаем через if');
let lang = prompt("Какой язык у сайта?");
if (lang == "ru") {
	console.log( array[0] );
} else if (lang == "en") {
	console.log( array[1] );
}

console.log('Решаем через switch-case');
switch (lang) {
	case "ru":
		console.log( array[0] );
		break;
	case "en":
		console.log (array[1] );
		break;
}

console.log('Решаем через многомерный массив без ифов и switch.');
let choose = lang;

array['ru'] = array[0] ;
array['en'] = array[1] ;

console.log(array[choose]);



console.log('...')
/////////////////////////////
console.log('Задача 2');

let namePerson = prompt('Введите имя');
console.log(namePerson);

namePerson == "Артем" ? console.log('директор') : namePerson == "Максим" ? console.log('преподаватель') : console.log("студент");

