class Person {

}

let p = class {

};

function logClass(c) {
    console.log(c);
}

logClass(p);
logClass(class {

});

/**
 * 
This is a declaration, much like a function declaration, but I can also use classes and expressions, much like function expressions.

So I could say let p a variable be equal to the expression class.

So this is an anonymous class essentially assigned to this variable.

So what's actually happening under the hood?

Well, JavaScript is parsing this class word and then creating something under the hood.

What's it creating?

Well, if I look at P, it's a class.

But if I say type of P.

It's a function.

That's why I say classes are syntactic sugar.

 */