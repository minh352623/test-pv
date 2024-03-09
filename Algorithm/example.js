// A closure in JavaScript is when an inner function has access to variables from an outer function even after the outer
// function has finished executing. This allows the inner function to remember and access those variables later.

function createGreeting(greeting) {
    return function (name) {
        console.log(greeting + ', ' + name);
    };
}

const greetHello = createGreeting('Hello');
greetHello('Alice'); // Outputs: "Hello, Alice"

//Question: Can you describe the difference between == and === in JavaScript?

// Example Answer:

// == is the abstract equality operator that performs type coercion if needed, meaning it can convert the data type of one operand to match the other before comparison.


console.log(5 == '5'); // true because of type coercion

console.log(5 === '5'); // false because the types are different




//Promises are objects that represent the eventual completion or failure of an asynchronous operation.

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => console.log(result), // "done" after 1 second
    error => console.log(error) // doesn't run
);

async function A() {
    return 1;
}

(async () => {
    const result = await A();
    console.log((result));
})()