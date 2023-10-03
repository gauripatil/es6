let firstname = 'Tony';
console.log(firstname); // not on the global object
console.log(window.firstname); // o/p - undefined - as let variables are declared in respective lexical env instead of variable env