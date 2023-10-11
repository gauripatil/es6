const me = { firstname: 'Tony', lastname: 'Alicea' };
me.firstname = 'Anthony'; // only binding is immutable, not value
console.log(me);

//OUTPUT - {firstname: 'Anthony', lastname: 'Alicea'}

/**
Const works exactly like Lent.

If I declare a variable using const, then it's placed inside the corresponding lexical environment. 
And that's pretty much it.
It works the same way in all those cases.
However, Konst adds a feature When you declare and set a variable using consent, the binding is immutable.
Big word alert.
Immutable, something that cannot be changed by declaring a variable using concept, then you can help avoid certain types of bugs.
That is bugs where you accidentally set the value without wanting to.
However, there's one aspect that can cause some confusion with const, what cannot be changed is the binding, not the value.

Let's see that in action.
I'll declare a variable first name with const, then I'll create a new lexical environment.
A new block.
And I'll put a different variable of the same name and that. Lexical environment.
Then output it.
Well, I get here.
This works the same way as let.
Anthony then Tony. Two different variables of the same name and two different lexical environments. However, let's try this.
I'll put them in the same lexical environment.
And attempt to change the value on the second line.
Using the equals operator that is using another assignment operator.
And I get an error assignment to constant variable.
What the assignment operator is going to do is take the existing name and try to point it to a new memory location. 
And that would mean a new binding, a new pointer. And Konst says that's not allowed. So this generates an error. However, what's not immutable is the value.
It's not the fact that I changed Tony to Anthony in the same memory location. 
It's that I'm creating a new assignment, a new binding.Maybe it ends up in the same memory location anyway, but that doesn't matter. 
The fact is that I'm trying to bind the first name and saying, Here's the memory location, which first name should now point to.
That's different than an actual immutable value.To see that.Let's create an object.And then I'll try setting the value of the first name property on this object.Me, which is const.And see what happens.I'll change.First name to Anthony.There's the object and the name changed.Why ? Well, I'm using an assignment operator, but what's being passed to the assignment operator is the first name, property and a value.I'm not pointing me at a different memory location.I'm pointing dot first name to a memory location with the value.Remember the dot operator finds the object, then finds the property on the object, and that's what I'm dealing with.If instead I tried to change me to some other value.That will get the error.Again because consent means the related binding is immutable.So keep an eye out for that.If you use const, don't assume it means that you can't change the value.
If the value is an object, for example, it can change.
But the binding cannot.

*/