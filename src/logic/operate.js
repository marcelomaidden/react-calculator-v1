import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);

  let result = {};
  let total = 0;

  switch (operation) {
    case '÷':
      total = bigNumberOne / bigNumberTwo;
      result = { total, next: total, operation };
      break;
    case '-':
      total = bigNumberOne - bigNumberTwo;
      result = { total, next: total, operation };
      break;
    case '+':
      total = bigNumberOne + bigNumberTwo;
      result = { total, next: total, operation };
      break;
    case 'X':
      total = bigNumberOne * bigNumberTwo;
      result = { total, next: total, operation };
      break;
    default:
      result = { bigNumberOne, bigNumberTwo, operation };
  }
  return result;
};

export default operate;
