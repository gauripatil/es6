class Person {
    firstName;
    
    // The JavaScript parser knows this is a class and allows me to quickly create constructor function.
    // Note that there is always a constructor function even if you don't create one. If you didn't put one. The engine essentially creates an empty one.


    constructor(name) {
        this.firstName = name;
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me);
console.log(me2);
console.log(me.__proto__);
console.log(Person.prototype);
console.log(me.__proto__ === Person.prototype); // true
console.log(me2.__proto__ === Person.prototype); // true

// Well, when I create the new class, it's a new function object, much like function constructors. 
// It has a prototype property.Now remember, the prototype property is not the person class's prototype. It's the object that will be the prototype of any instance created from the person class.