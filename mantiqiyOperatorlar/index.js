// && 

// let date = new Date();
// let hour = date.getHours();
// let minut = date.getMinutes();

// console.log('Hour: ', hour + "   " + 'Minut: ', minut);

// || 

// let isOfficeOpen = (hour >= 9 || minut >= 0 );
// let isOfficeClosed = !isOfficeOpen;
// console.log('Office ochiq: ', isOfficeOpen);
// console.log('Office yopiq: ', isOfficeClosed);


// Falsy qiymatlar
// undefined
// null
// 0
// ''
// NaN
// falsy bo`lmagan boshqa qiymatlar truthy qiymatalr bo`ladi.

// let defaultColor = 'qora';
// let userColor = undefined;
// let currentColor = userColor || defaultColor;

// //console.log(currentColor);

// let person = {
//     name: 'Abdulvoris',
//     age: 20,
//     job: 'muhandis'
// }

// console.log(person.job || 'ishsiz');

// let x = 2 + 3 * 4;
// console.log(x);

// let isOpen = false;
// console.log(!!isOpen);

let a;
let b = null;
let c = undefined;
let d = 4;
let e = 'five';
let f = a || b || c || d || e;
console.log(f);