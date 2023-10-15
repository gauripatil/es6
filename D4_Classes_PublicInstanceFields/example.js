class Person {
    firstName = 'Tony';
}

let me1 = new Person();

let me2 = new Person();
me2.firstName = 'Anthony';

console.log(me1);
console.log(me2);

//output
// Person {firstName: 'Tony'}
// Person {firstName: 'Anthony'}