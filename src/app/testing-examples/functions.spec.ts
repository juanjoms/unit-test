import { checkFive, divide, sum } from "./functions";

describe('Functions', () => {
  it('should add two numbers', () => {
    const result = sum(4, 5);
    expect(result).toBe(9);
  });

  it('should divide two numbers', () => {
    const result = divide(10, 5);
    expect(result).toBe(2);
  });

  it('should divide two numbers, when divisor is 0 should return null', () => {
    const result = divide(10, 0);
    expect(result).toBe(null);
  });

  it('should checkFive when num is less than 5', () => {
    const result = checkFive(4);
    expect(result).toBe('4 is less than 5.');
  });

})
