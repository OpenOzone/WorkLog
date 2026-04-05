import { useState } from 'react';

type Operator = '+' | '-' | '*' | '/';

const MAX_DIGITS = 12;

const formatResult = (value: number) => {
  if (!Number.isFinite(value)) return 'Error';

  const fixed = Number.parseFloat(value.toPrecision(MAX_DIGITS));
  return `${fixed}`;
};

const calculate = (left: number, right: number, operator: Operator) => {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return right === 0 ? Number.NaN : left / right;
    default:
      return right;
  }
};

const Calculator = () => {
  const [display, setDisplay] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const reset = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (display === 'Error') {
      setDisplay(digit);
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
      return;
    }

    if (display.replace('-', '').replace('.', '').length >= MAX_DIGITS) return;

    setDisplay(display === '0' ? digit : `${display}${digit}`);
  };

  const inputDecimal = () => {
    if (display === 'Error') {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(`${display}.`);
    }
  };

  const handleOperator = (nextOperator: Operator) => {
    if (display === 'Error') {
      reset();
      return;
    }

    const inputValue = Number.parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator && !waitingForOperand) {
      const result = calculate(previousValue, inputValue, operator);
      const formatted = formatResult(result);

      if (formatted === 'Error') {
        setDisplay('Error');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(formatted);
      setPreviousValue(Number.parseFloat(formatted));
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (display === 'Error' || operator === null || previousValue === null) return;

    const inputValue = Number.parseFloat(display);
    const result = calculate(previousValue, inputValue, operator);
    const formatted = formatResult(result);

    setDisplay(formatted);
    setPreviousValue(formatted === 'Error' ? null : Number.parseFloat(formatted));
    setOperator(null);
    setWaitingForOperand(true);
  };

  const handlePercent = () => {
    if (display === 'Error') return;

    const value = Number.parseFloat(display) / 100;
    setDisplay(formatResult(value));
  };

  const handleToggleSign = () => {
    if (display === '0' || display === 'Error') return;

    setDisplay(display.startsWith('-') ? display.slice(1) : `-${display}`);
  };

  const buttonBaseClass =
    'h-12 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300';

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white rounded-lg shadow space-y-3">
        <h2 className="text-black text-lg font-bold">Calculator</h2>

        <div className="w-full rounded-lg bg-gray-900 px-3 py-4 text-right text-3xl font-bold text-white overflow-hidden">
          <span className="block truncate">{display}</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button className={`${buttonBaseClass} bg-gray-200 text-gray-900 hover:bg-gray-300`} onClick={reset}>
            AC
          </button>
          <button
            className={`${buttonBaseClass} bg-gray-200 text-gray-900 hover:bg-gray-300`}
            onClick={handleToggleSign}
          >
            +/-
          </button>
          <button
            className={`${buttonBaseClass} bg-gray-200 text-gray-900 hover:bg-gray-300`}
            onClick={handlePercent}
          >
            %
          </button>
          <button
            className={`${buttonBaseClass} bg-orange-500 text-white hover:bg-orange-600`}
            onClick={() => handleOperator('/')}
          >
            /
          </button>

          {['7', '8', '9'].map(digit => (
            <button
              key={digit}
              className={`${buttonBaseClass} bg-gray-100 text-gray-900 hover:bg-gray-200`}
              onClick={() => inputDigit(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            className={`${buttonBaseClass} bg-orange-500 text-white hover:bg-orange-600`}
            onClick={() => handleOperator('*')}
          >
            *
          </button>

          {['4', '5', '6'].map(digit => (
            <button
              key={digit}
              className={`${buttonBaseClass} bg-gray-100 text-gray-900 hover:bg-gray-200`}
              onClick={() => inputDigit(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            className={`${buttonBaseClass} bg-orange-500 text-white hover:bg-orange-600`}
            onClick={() => handleOperator('-')}
          >
            -
          </button>

          {['1', '2', '3'].map(digit => (
            <button
              key={digit}
              className={`${buttonBaseClass} bg-gray-100 text-gray-900 hover:bg-gray-200`}
              onClick={() => inputDigit(digit)}
            >
              {digit}
            </button>
          ))}
          <button
            className={`${buttonBaseClass} bg-orange-500 text-white hover:bg-orange-600`}
            onClick={() => handleOperator('+')}
          >
            +
          </button>

          <button
            className={`${buttonBaseClass} col-span-2 bg-gray-100 text-gray-900 hover:bg-gray-200`}
            onClick={() => inputDigit('0')}
          >
            0
          </button>
          <button
            className={`${buttonBaseClass} bg-gray-100 text-gray-900 hover:bg-gray-200`}
            onClick={inputDecimal}
          >
            .
          </button>
          <button className={`${buttonBaseClass} bg-blue-600 text-white hover:bg-blue-700`} onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
