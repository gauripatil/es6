// from the slides for this lecture

let a = 2, b = 2, c = 2;

if (a===b) {
  
    console.log(myVar); // error: although hoisted, in a lower lexical environment, so no reference to it!

    if (b===c) {

        let myVar = 1;

    }
  
}



/**
 * I'll set A, B and C to the same value.

Then I'll log my var.

And declared and signed.

And I get my var is not defined.

As expected, because it's declared in a lower lexical environment.

So this console.log, the engine looks for it but never searches down.

Only searches up.

So what do you think?

Let's behavior is interesting.

It's blocked, scoped, and as a result, it helps us avoid bugs.

It generates more errors.

Which is a good thing in this case.

And we, the coders, can visually see the lexical environments because we can see the curly braces.

And the consensus is pretty much universal.

Don't use the var keyword if you don't have to use block scoped variables using lat and const, which

we'll see in just a bit.

Your code will end up with less bugs.

You'll have finer control.

It'll make your coding life easier.
 */