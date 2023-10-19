# es6 concepts

## Block Scoping
Variable scope is defined lexically by a block. In Javascript`s case, curly braces.


## Execution Context
### Variables declared with var
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

### Variables declared with let
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


### Binding

![Screen Shot 2023-10-11 at 11 29 38 PM](https://github.com/gauripatil/es6/assets/3206551/cf38c1a2-c515-47b2-9502-6ce5379bc47d)
![Screen Shot 2023-10-11 at 11 25 59 PM](https://github.com/gauripatil/es6/assets/3206551/ee721aac-a82f-4fa0-8a71-64ca9835ab1a)

I'm creating a binding. I have a name. And I have a value. But really. That value is sitting somewhere in the computer's memory. It's a value in a memory location. So I could also think of it as an address to a memory location. And that memory location contains a value. And so when I reference the name, the engine goes and finds the referenced memory location and gives me the value found in that memory location. The connection, the pointer between the name and the memory location. That's a binding.

A binding.
The connection or pointer between a variable name and a specific location in the computer's memory that holds a value. A binding is a thing. It's the connection between the variable name and the value that it represents.

## Classes
![Screen Shot 2023-10-16 at 8 45 37 PM](https://github.com/gauripatil/es6/assets/3206551/1d5427ed-ed9d-4ea4-9a80-73f07d68fdc9)

A class in its most generic form is a structure in a programming language that provides a way to create objects. That's really its purpose, primarily.

However, classes in JavaScript, as we've said, are different from classes in other languages. Classes in other languages like C-sharp or Java are very fundamental structures under the hood of those engines, of those compilers. Classes exist not just to create new objects, but to create new types. Sort of like we have arrays and numbers in JavaScript. Classes in other languages let you create new types of things.

**In JavaScript, however, classes don't create new types. They're just a way of creating objects and the prototype chain. They're just syntactic sugar.**

## Syntactic Sugar
![Screen Shot 2023-10-16 at 8 46 49 PM](https://github.com/gauripatil/es6/assets/3206551/cd5fc05d-b37d-47bc-8136-74a1e4f65365)

Syntactic sugar means a different way to accomplish something in a programming language that doesn't actually introduce anything new under the hood. And that, for the most part, is classes. They allow us a different way to type the write how we want to create objects in the prototype chain. But under the hood of the JavaScript engine, there's nothing really new going on.
**In fact, classes in JavaScript are just functions.**

![Screen Shot 2023-10-17 at 10 02 16 PM](https://github.com/gauripatil/es6/assets/3206551/06d020f4-c6fd-4693-b9c3-9d09fe4aa8d9)
![Screen Shot 2023-10-17 at 10 02 06 PM](https://github.com/gauripatil/es6/assets/3206551/05c7fb16-4d37-44e6-ada1-24206b9ebed9)

There is no class object under the hood. There's nothing under the hood of the JavaScript engine that's saying this is a class. No, it's a function.
When you create a class, you're creating a function object.
With one small difference.
What you should be imagining when you see a class being created is that under the hood you're actually creating a function, a function object, and inside the engine, because the parser sees the word class, not function, it will add a special value to the function object. It will mark the function object **as a class constructor.**
Now, this isn't a property that you can access or change. It's an under the hood property.
But it's that property that allows the JavaScript engine to then make different choices based on what you're typing inside the curly braces of a class to have certain restrictions and to allow certain ways of typing things that it wouldn't otherwise allow.

## Instance
![Screen Shot 2023-10-18 at 9 46 43 PM](https://github.com/gauripatil/es6/assets/3206551/c8893329-522d-4891-8581-d96465b7717a)
**The actual object is created from an object creation feature of the language like a class. So when I create an object using the class syntax, I can say that the object is an instance of that class.**

In JavaScript, we're really just saying, how did we create the object? We created this object using this object creation feature. So it's now an instance of that object creation feature. And of course, using a class or other creation method, I can create various instances, various separate objects with the same structure.

