'use client';

import { useState } from 'react';

const Calculator = () => {
  const [valueA, setValueA] = useState<string>('');
  const [valueB, setValueB] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleCalculate = (operation: string) => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calculatedResult: number;
    let resultText: string;

    switch (operation) {
      case 'add':
        calculatedResult = a + b;
        resultText = `${calculatedResult}`;
        break;
      case 'subtract':
        calculatedResult = a - b;
        resultText = `${calculatedResult}`;
        break;
      case 'multiply':
        calculatedResult = a * b;
        resultText = `${calculatedResult}`;
        break;
      case 'divide':
        if (b === 0) {
          resultText = 'Cannot divide by zero';
        } else {
          calculatedResult = a / b;
          resultText = `${calculatedResult}`;
        }
        break;
      case 'percentage':
        if (b === 0) {
          resultText = 'Cannot divide by zero';
        } else {
          calculatedResult = (a / b) * 100;
          resultText = `${calculatedResult.toFixed(2)}%`;
        }
        break;
      case 'percentageChange':
        if (b === 0) {
          resultText = 'Cannot divide by zero';
        } else {
          calculatedResult = ((a - b) / b) * 100;
          if (calculatedResult > 0) {
            resultText = `Increase: ${calculatedResult.toFixed(2)}%`;
          } else if (calculatedResult < 0) {
            resultText = `Decrease: ${Math.abs(calculatedResult).toFixed(2)}%`;
          } else {
            resultText = 'No change (0%)';
          }
        }
        break;
      default:
        resultText = '';
    }

    setResult(resultText);
  };

  const handleClear = () => {
    setValueA('');
    setValueB('');
    setResult('');
  };

  const handleInputChange = (field: 'A' | 'B', value: string) => {
    // 只允许输入数字和小数点
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    // 确保只有一个小数点
    const parts = numericValue.split('.');
    if (parts.length > 2) return;
    
    if (field === 'A') {
      setValueA(numericValue);
    } else {
      setValueB(numericValue);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Online Calculator
      </h2>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="valueA" className="block text-sm font-medium text-gray-700 mb-2">
            Value A
          </label>
          <input
            id="valueA"
            type="text"
            value={valueA}
            onChange={(e) => handleInputChange('A', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter a number"
          />
        </div>
        <div>
          <label htmlFor="valueB" className="block text-sm font-medium text-gray-700 mb-2">
            Value B
          </label>
          <input
            id="valueB"
            type="text"
            value={valueB}
            onChange={(e) => handleInputChange('B', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter a number"
          />
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => handleCalculate('add')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Add
        </button>
        <button
          onClick={() => handleCalculate('subtract')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Subtract
        </button>
        <button
          onClick={() => handleCalculate('multiply')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Multiply
        </button>
        <button
          onClick={() => handleCalculate('divide')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Divide
        </button>
      </div>

      {/* Percentage Buttons */}
      <div className="space-y-3 mb-6">
        <button
          onClick={() => handleCalculate('percentage')}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium text-sm"
        >
          Percentage
        </button>
        <button
          onClick={() => handleCalculate('percentageChange')}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium text-sm"
        >
          Percentage Change
        </button>
      </div>

      {/* Clear Button */}
      <div className="mb-6">
        <button
          onClick={handleClear}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Clear
        </button>
      </div>

      {/* Result Display */}
      <div className="bg-gray-100 rounded-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Calculation Result</h3>
        <div className="text-xl font-mono text-gray-900 min-h-[2rem]">
          {result || 'Waiting for calculation...'}
        </div>
      </div>
    </div>
  );
};

export default Calculator; 