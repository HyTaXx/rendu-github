// components/calculate.test.ts

import { calculate } from './calculate';

describe('calculate utility function', () => {
  test('performs addition correctly', () => {
    expect(calculate(5, 3, 'add')).toBe(8);
  });

  test('performs subtraction correctly', () => {
    expect(calculate(10, 4, 'subtract')).toBe(6);
  });

  test('performs multiplication correctly', () => {
    expect(calculate(7, 6, 'multiply')).toBe(42);
  });

  test('performs division correctly', () => {
    expect(calculate(8, 2, 'divide')).toBe(4);
  });

  test('returns error for invalid input', () => {
    expect(calculate(NaN, 2, 'add')).toBe('Invalid input');
    expect(calculate(2, NaN, 'subtract')).toBe('Invalid input');
  });

  test('handles division by zero', () => {
    expect(calculate(8, 0, 'divide')).toBe('Cannot divide by zero');
  });

  test('returns error for invalid operation', () => {
    expect(calculate(8, 2, 'modulus')).toBe('Select an operation');
  });
});
