// Les objects
// Déclaration
// Propriétés et Méthodes
const object1 = new Object()

const object2 = {}

// console.log(object1)
// console.log(object2)

const object3 = new Object({ a: 5 })

// console.log(object3)

const object4 = {
  a: 5,
  getA() {
    return this.a
  }
}

// console.log(object4)

// Acceder à une propriété:

const A = object4.a;

// console.log(A)

// Assigner un valeur dans un objet

object4.a = 6

console.log(object4.a)

// Méthodes

console.log(object4.getA())

// Tout est objet