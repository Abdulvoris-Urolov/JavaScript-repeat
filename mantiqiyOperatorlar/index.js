// && 

let date = new Date();
let hour = date.getHours();
let minut = date.getMinutes();

console.log('Hour: ', hour + "   " + 'Minut: ', minut);

// || 

let isOfficeOpen = (hour >= 9 || minut >= 0 );
let isOfficeClosed = !isOfficeOpen;
console.log('Office ochiq: ', isOfficeOpen);
console.log('Office yopiq: ', isOfficeClosed);
