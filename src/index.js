function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function greet(name) {
    if (!name) return "Hello, World!";
    return `Hello, ${name}!`;
}

module.exports = { add, multiply, greet };
