// Fonction Fléchés

function whatTimeIsIt() {
  return Date.now()
}

// const whatTimeIsIt = () => {
//   return Date.now()
// }

// const whatTimeIsIt = () => Date.now()

// Conditions

// Les condition à remplir pour les if
// - Boolean
// - 0 ou > 0
// - undefined, null, '' (string vide)

function isGreater(a, b) {
  if(a > b) {
    return `${a} est superieur à ${b}`
  }
  return `${b} est superieur à ${a}`
}

// console.log(isGreater(50, 5))
// console.log(isGreater(5, 50))

function isEqualToZero(a) {
  if(a) {
    return false
  }
  return true
}

// console.log(isEqualToZero(0))
// console.log(isEqualToZero(5))

function containsSomething(value) {
  if(value) {
    return 'This value contains something'
  }
  return 'This value is undefined or null'
}


// console.log(containsSomething(0))
// console.log(containsSomething(''))
// console.log(containsSomething(null))
// console.log(containsSomething(undefined))
// console.log(containsSomething(0))

// Le switch, autre manière de gerer des conditions

function isGreaterSwitch(a, b) {
  switch (a > b) {
    case true:
      return `${a} est superieur à ${b}`
    case false:
      return `${b} est superieur à ${a}`
    default:
      break;
  }
}

// console.log(isGreaterSwitch(5, 6))
// console.log(isGreaterSwitch(10, 6))

function isItTheWeekend(day) {
  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      return false
    case 'Saturday':
    case 'Sunday':
      return true
    default:
      return '...'
  }
}

// console.log(isItTheWeekend('Monday'))
// console.log(isItTheWeekend('Tuesday'))
// console.log(isItTheWeekend('Wednesday'))
// console.log(isItTheWeekend('Thursday'))
// console.log(isItTheWeekend('Friday'))
// console.log(isItTheWeekend('Saturday'))
// console.log(isItTheWeekend('Sunday'))

// Les opérateur logiques.

// && <= ET
// || <= OU

function isBetween(min, max, number) {
  if(number >= min && number <= max) {
    return `${number} est dans l'interval (${min},${max})`
  } else {
    return `${number} n'est pas dans l'interval (${min},${max})`
  }
}

// console.log(isBetween(0, 200, 5))
// console.log(isBetween(0, 200, 652))

function factorOfTwoOrThree(number) {
  if(number % 2 === 0 && number % 3 === 0) {
    return true
  }
  return false
}

// console.log(factorOfTwoOrThree(18))
// console.log(factorOfTwoOrThree(10))