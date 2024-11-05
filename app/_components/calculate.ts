export function calculate(num1: number, num2: number, operation: string): number | string {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Invalid input';
    }
  
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
      default:
        return 'Select an operation';
    }
}