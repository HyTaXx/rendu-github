"use client";
// components/Calculator.tsx
import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [operation, setOperation] = useState<string>('add');
  const [result, setResult] = useState<string | number | null>(null);

  const handleCalculation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(n1 + n2);
        break;
      case 'subtract':
        setResult(n1 - n2);
        break;
      case 'multiply':
        setResult(n1 * n2);
        break;
      case 'divide':
        setResult(n2 !== 0 ? n1 / n2 : 'Cannot divide by zero');
        break;
      default:
        setResult('Select an operation');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      >
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>

      <button
        onClick={handleCalculation}
        className="mb-4 bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="text-xl font-semibold">
          Result: {result}
        </div>
      )}
    </div>
  );
}
