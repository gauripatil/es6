# es6 concepts

# Block Scoping
Variable scope is defined lexically by a block. In Javascript`s case, curly braces.


# Execution Context
## Variables declared with var
![Screen Shot 2023-10-01 at 11 58 45 PM](https://github.com/gauripatil/es6/assets/3206551/419e415f-05c0-4b5b-bbd9-747715a9c65f)

We already know that there is a variable environment that stores the variables declared with the var keyword.
However, there's also another set of areas of memory within an execution context. 
They're called lexical environments. Let's imagine that the whitespace and the left is where our code is for a function or at the global level. So for any code within that block that is within a function or the global space, there is already a lexical environment. But let's imagine we add a block, say, using an if statement with those curly braces to create a block that is a wrapper around a sequence of lines of code.

When the JavaScript engine parses the if statement and parses those curly braces, it knows there's a new block being specified lexically. So it will create a new lexical environment within the execution context. And so on and so forth as we nest blocks.
If we put another block inside that block, the JavaScript engine will create yet another lexical environment
corresponding to the block.
Now we know if we declare a variable using the var keyword, that variable is stored inside the variable
environment and therefore available to reference in all the code in the entire execution context.
Thus it is not blocked scoped.
If we want a variable to be scoped to the block, we need to get it into the lexical environment that
corresponds to the block we've written. To do that, we need to use one of two new keywords, let and const.

## Variables declared with let
We've already seen that the VAR keyword declares a variable and puts that variable and value in the variable environment of the execution context. If I then reference that variable somewhere else in the code, it can be found. But how do we get a variable into one of the lexical environments? We can do that with one of two ways. We declare a variable using the **let** keyword, or, as we'll later see, we can declare a variable using the **const** keyword. If I declare a variable using let like let my var equal one, then the variable is stored in the corresponding lexical environment according to where the variable is declared lexical. In this case, I declare my variable at the root of the function or the main file, and so it gets stored in the outermost lexical environment.

Example 1
![Screen Shot 2023-10-03 at 12 04 25 AM](https://github.com/gauripatil/es6/assets/3206551/55e45221-c26e-457c-8031-66997280ea8d)

**Example 1**
Now, what happens when I try to access that variable? Well, that depends on the block in which the attempted access is made. In this case, for this console.log, it's inside the block, formed by the curly braces for the if A equals B if statement.
So the engine will first look in the corresponding lexical environment for that block. But it's not there. It wasn't declared at the same level as that block. When I say the same level, it's because if we were instead console logging inside the if statement B equal C, it would look in its corresponding lexical environment for the block formed by the curly
braces for the if B equals C statement.

In this case, however, console.log is at the same level as the block formed by the if A equals B curly braces. So it looks in the corresponding lexical environment it doesn't find it. But that's okay because the lexical environments within the execution context reference each other. They have outer references. This means that if you look at how you wrote your code, a variable can reference any variable declared in the same block or a block going up, going out towards the base of the function or file that you're writing. Then the engine, if it can't find the reference to the variable, will go up the lexical environment chain. There it would find my var and log the value one. 

**Example 2**
![Screen Shot 2023-10-02 at 11 58 11 PM](https://github.com/gauripatil/es6/assets/3206551/59f576ea-2c4e-4071-bc6d-296ad7f69d7a)

**Example 2**
But what if we moved the declaration? Let's suppose the declaration was inside the B equals C block. What does this line of code do? Well, it's going to place my var in its corresponding lexical environment. Where would that be? Here. Now here's a question. Are variables declared by let and contest variables placed in lexical environments? Are they hoisted? The answer is yes. The variables are placed in the corresponding lexical environments during the creation phase of the execution context, just like variables declared with VAR, they received their values during the execution phase. So initially during the creation phase, we'll just have the variable but no value.

So what happens?
Well, notice this is different from what happens if you declare a variable var y. Well, for starters, during the execution phase yes this will receive a value. But before that line is actually executed like here with console.log. There is no value there. So if my var had been declared with the var keyword, we'd just get undefined because of the hoisting, but because of the structure of lexical environments. This works differently. The engine looks for my var in the corresponding lexical environment. Can't find it and so goes up, not down. And it doesn't find anything there either. So even though my var was hoisted, the effects are quite different because the engine knows that the variable was not declared within the same block or above. And so we get an error.
