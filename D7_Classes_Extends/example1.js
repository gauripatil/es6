class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

class Tony extends Person {
    meet() {
        return `Nice to meet you.`;
    }
}

let me = new Tony('Tony');

console.log(me.greet());
console.log(me.meet());
console.log(me.__proto__); // Tony
console.log(me.__proto__.__proto__); // Person
console.log(Tony.prototype.__proto__ === Person.prototype) // true
console.log(Tony.__proto__);

let me2 = new Person('Anthony');
console.log(me2.meet()); // error

// extend a built-in type
class myNumber extends Number {
    addOne() {
        return this + 1;
    }
}

let num = new myNumber(3.053);
console.log(num.toFixed(1));
console.log(num.addOne());


/**
 * So what's actually happening when I say that my class extends another class? Well, we're extending the prototype chain.
 * The prototype of the object should be equal to the prototype property of the class the object was created on.
 * The fact that the word prototype is the name of the property and be confusing even when we're talking about it.
 * The prototype of Tony is person.
 */