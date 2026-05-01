const { add, multiply, greet } = require("../src/index");

test("add: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
});

test("multiply: 4 * 5 = 20", () => {
    expect(multiply(4, 5)).toBe(20);
});

test("greet: returns name", () => {
    expect(greet("Yukta")).toBe("Hello, Yukta!");
});

test("greet: no name defaults to World", () => {
    expect(greet()).toBe("Hello, World!");
});
