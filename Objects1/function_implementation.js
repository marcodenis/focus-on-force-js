// function declared 
// define as a declaration or an expression 


// Function invoked or called -> executed 

// Function -> first class (treated as values)

// High order function that receive function as parameters
// closures for context creation 
// allow async coding


// generator and iterators 

// Context 
// there is a default context 
// can change with call, apply, bind or arrow function 

//Types:
// named, anonymous, recursive, inner, outer, IIFEs ( invoked at the same time of def)

// First class
// assign to var
// store in an array 
// function as param of function AND returned by another function 
// property of an object (so is a method)


// recursion 
// infinite recursion -> infinite loop bc missing exit condition

// arrow function -> function expression 
// this 
// Traditional: set to the object that invoked the function 
// DEFAULT: global object 

// arrow: determined by the context of where the function is called
// DEFAULT: not 

function fn() {
    return this;
}

console.log('this is: ', fn());

var person = {
    h:1,
    w:2,
    sayH: function (){
        console.log('my h ', this.h);
        console.log(this)
    },
    sayW: () => {
        console.log(' my w', this.w);
        console.log(this);
    }
}

person.sayH();
person.sayW();


//function hoisting
// function expression is not store in the var -> var hoisted
// function declaration is hoisted 

// CLOSURE 
// allows a FUNCTION access to its PARENT SCOPE even after the function
// that created the parent scope has complete execution 

function createScoreFunction(){
    let scores = [];
    return function (score) {
        scores.push(score);
        console.log(`Total scores: ${scores.length}`);
    }
}

const addScore = createScoreFunction();
addScore(10);
addScore(20);
addScore(30);


