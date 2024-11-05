// components/Calculator.tsx
"use client";
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
    <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-xl max-w-md mx-auto text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-orange-400">Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="mb-4 p-3 border border-gray-600 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="mb-4 p-3 border border-gray-600 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="mb-6 p-3 border border-gray-600 rounded-lg w-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>

      <button
        onClick={handleCalculation}
        className="mb-6 bg-orange-500 text-white p-3 rounded-lg w-full hover:bg-orange-600 font-semibold"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="text-2xl font-semibold text-orange-400">
          Result: {result}
        </div>
      )}
    </div>
  );
}
