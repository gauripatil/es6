let person = {firstnames: ['Tony', 'Anthony']};

for (let person of person.firstnames) { // errr on this line -  Uncaught ReferenceError: Cannot access 'person' before initialization
    console.log(person);
}


/*
Well, interestingly, the part of the block statement like for where it's declared.

The variable declared as part of this block statement is considered part of that lexical environment.

So let person is considered part of the lexical environment defined by these curly braces.

However, we're going to get an error.

Why?

On line three it says cannot access person before initialization.

It's talking about this reference for person.

So because we already have a let inside the for.

And this entire statement is part of this lexical environment.

The reference to person here first names is trying to reference this.

Let not the person in the outer lexical environment.

That's a real problem because person isn't actually initialized until the loop starts.
*/