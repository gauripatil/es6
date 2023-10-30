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
    constructor() {
        super('Tony');
    }

    greet() {
        let greeting = super.greet();
        return `${greeting}. I'm Tony`;
    }

    meet() {
        return `Nice to meet you.`;
    }
}

let me = new Tony();
console.log(me.greet());

/**
 * 
Now that we've seen when we use extends that the class objects are connected, we can see how this is 
useful using the engine provided method called super.

Let's start by cleaning up this code from the previous lecture a bit and we'll get back down to just the Tony and person objects.

Now here's a question.

The object created from New Tony has the first name property. And it was set properly.

So how did that happen? 
Well, I don't have a constructor specified, so the engine under the hood created one for me, 
and it called a special engine provided method called super.

So when I said New Tony and passed this parameter, Tony that was passed to the under the hood created constructor 
and then the super keyword accessed this constructor down the prototype chain.

Remember that methods are placed on the prototype. So this constructor is actually stored on person prototype.
In this way we can walk the prototype chain from the object to the object found on Tony's prototype to the object found on person prototype.
And we can access person prototype from Tony's prototype using the keyword super. But what happens if I create my own constructor?

Well, now, the engine won't make one for me. 
So if I want to access the constructor method on person prototype, I'll need to access it myself using super.

So let's say I didn't pass a value when I called New Tony.
But I could say super Tony and still pass that value to the constructor method on person prototype.
And then that still works.

The first name method is there and it has that value.
So I've accessed I've linked these constructors essentially.

In this way, I can make sure that when creating a new object from this class that I do all the setup,
including the setup of other constructors down the prototype chain.
And there's one more thing you can do with super.

Remember, it allows you to walk the prototype chain created with extends. So let's say I create my own greet method.

What do you think will happen now?
I just see.

Hi.

Why?

Because of the prototype chain. The prototype chain is only walked by the engine if it can't find what you're asking for.
I asked for the Greek method, and that's found on.

Not on me.

But then it walked the prototype chain to Tony, that prototype. And that's where the greet method is stored.
The prototype of me is the object found on Tony's prototype, and that has great Tony prototype concrete.
Since it found it, it never walked the chain further to the object found on person prototype.
So this creep method was never called.
It was hidden, so to speak, by the greet method sitting directly on Tony prototype.

But I can still access the method down the prototype chain.
I could access it using super if I say super dot.
This is essentially one step down the prototype chain.
Find that object.
And then I call it greed on that object.

And I could say something like, there's the greeting I just grabbed.
I'm Tony.
And there it is.

So in this way we can see that extends creates the prototype chain and super lets us walk the prototype chain.

Moving one step up the chain.

Just for fun.
The me object only has first name.
Tony, that prototype.
Has the constructor created in the Tony class and both the greet and meet methods that were also created there.
And person.
That prototype has the constructor of the person class and the greet method created their.
This was all created by extents and accessed using super.
 */