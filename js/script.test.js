const calculate = require("./calculator.js");

test("calculate weight depending on gender", () => {
  expect(calculate(50, 1.6, 60, "male", "low")).toBe(543.125);
  expect(calculate(50, 1.6, 60, "female", "low")).toBe(543.125);
});
