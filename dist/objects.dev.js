"use strict";

// Les objects
// Déclaration
// Propriétés et Méthodes
var object1 = new Object();
var object2 = {}; // console.log(object1)
// console.log(object2)

var object3 = new Object({
  a: 5
}); // console.log(object3)

var object4 = {
  a: 5,
  getA: function getA() {
    return this.a;
  }
}; // console.log(object4)
// Acceder à une propriété:

var A = object4.a;
A = object4['a'];
console.log(A); // Assigner un valeur dans un objet

object4.a = 6; // console.log(object4.a)
// Méthodes
// console.log(object4.getA())
// Tout est objet
// Exercices:
// Social media:

var post = {
  reactions: {
    "👍": 0,
    "❤️": 0,
    "😂": 0,
    "😡": 0
  },
  "title": "Pikachu n'existe pas, c'est un lapin peint en jaune."
};
var today = new Date();
var pass = 'nezzar'; // console.log(pass === pass.toLocaleLowerCase())
// function validatePassword(pass) {
//   const containsUpperCase = pass !== pass.toLocaleLowerCase()
//   const containsLowerCase = pass !== pass.toLocaleUpperCase()
//   const hasMoreThan10Characters = pass.length > 10
//   if(containsLowerCase && containsUpperCase && hasMoreThan10Characters) {
//     return true
//   }
//   console.log({
//     pass,
//     containsLowerCase,
//     containsUpperCase,
//     hasMoreThan10Characters
//   })
//   return false
// }