class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me.greet());
console.log(me2.greet());
console.log(me.__proto__);
console.log(me);

/**
 * Adding methods that is functions to your objects with the new class syntax is also straightforward.

Let's take a look.

To add a method to our class, you simply type the name of the function.

You don't have to put the word function.

You can put the parameters, etc. and then the value.

I'll use a template literal and return a greeting.

But this key word will point to the instance of the object, as we would normally expect.

And that's it.

So I can log.

A greeting from either one of the two instances that I've created.

And there we see them.

Now here's a question.

Where is the greet method being added?

Is it being added to each of these two objects?

While the method is the same on every object.

So that would be a waste of memory.

Instead, the class syntax, the engine places the methods on the prototype of the instances.

So if I log.

Me Dot Frodo.

You'll see that the prototype which is on person prototype that is actually is the one that contains

the greet method.

If I lock just the me object.

You'll see that it only contains the first name property.

So when we think about what the engine is doing, when we create a new person, it's calling the constructor,

it's using the field, it's adding first name to each of the instances because they each need their

own copy.

And when it sees a method, it adds it to the prototype on the class object, which will be the prototype

on the chain of any created instances.

 */