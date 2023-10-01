# es6 concepts

# Block Scoping
Variable scope is defined lexically by a block. In Javascript`s case, curly braces.


# Execution Context
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
