import calculator from "calculator";

describe("Calculator", () => {
  it("sum", () => {
    expect(calculator.sum(2, 1)).toEqual(3);
  });
  it("sub", () => {
    expect(calculator.sub(2, 1)).toEqual(1);
  });
  it("mul", () => {
    expect(calculator.mul(2, 2)).toEqual(4);
  });
  it("div", () => {
    expect(calculator.div(4, 2)).toEqual(2);
  });
});