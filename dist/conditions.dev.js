"use strict";

// Fonction Fléchés
function whatTimeIsIt() {
  return Date.now();
} // const whatTimeIsIt = () => {
//   return Date.now()
// }
// const whatTimeIsIt = () => Date.now()
// Conditions
// Les condition à remplir pour les if
// - Boolean
// - 0 ou > 0
// - undefined, null, '' (string vide)


function isGreater(a, b) {
  if (a > b) {
    return "".concat(a, " est superieur \xE0 ").concat(b);
  }

  return "".concat(b, " est superieur \xE0 ").concat(a);
} // console.log(isGreater(50, 5))
// console.log(isGreater(5, 50))


function isEqualToZero(a) {
  if (a) {
    return false;
  }

  return true;
} // console.log(isEqualToZero(0))
// console.log(isEqualToZero(5))


function containsSomething(value) {
  if (value) {
    return 'This value contains something';
  }

  return 'This value is undefined or null';
} // console.log(containsSomething(0))
// console.log(containsSomething(''))
// console.log(containsSomething(null))
// console.log(containsSomething(undefined))
// console.log(containsSomething(0))
// Le switch, autre manière de gerer des conditions


function isGreaterSwitch(a, b) {
  switch (a > b) {
    case true:
      return "".concat(a, " est superieur \xE0 ").concat(b);

    case false:
      return "".concat(b, " est superieur \xE0 ").concat(a);

    default:
      break;
  }
} // console.log(isGreaterSwitch(5, 6))
// console.log(isGreaterSwitch(10, 6))


function isItTheWeekend(day) {
  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return false;

    case 'Saturday':
    case 'Sunday':
      return true;

    default:
      return '...';
  }
} // console.log(isItTheWeekend('Monday'))
// console.log(isItTheWeekend('Tuesday'))
// console.log(isItTheWeekend('Wednesday'))
// console.log(isItTheWeekend('Thursday'))
// console.log(isItTheWeekend('Friday'))
// console.log(isItTheWeekend('Saturday'))
// console.log(isItTheWeekend('Sunday'))
// Les opérateur logiques.


function isBetween(min, max, number) {
  if (number >= min && number <= max) {
    return "".concat(number, " est dans l'interval (").concat(min, ",").concat(max, ")");
  } else {
    return "".concat(number, " n'est pas dans l'interval (").concat(min, ",").concat(max, ")");
  }
}

console.log(isBetween(0, 200, 5));
console.log(isBetween(0, 200, 652));