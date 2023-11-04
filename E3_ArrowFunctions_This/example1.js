let me = {
    firstName: 'Tony',
    greet: function() {
        console.log(this);
        
        let logMe = function() {
            console.log(this);
        }
        logMe();
    },
    greet2: function() {
        console.log(this);
        
        let logMe = () => {
            console.log(this);
        }
        logMe();
    }
}

me.greet();
me.greet2();

"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
