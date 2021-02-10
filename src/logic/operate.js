import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let result = {};
  let total = 0;

  switch (operation) {
    case '÷':
      total = bigNumberOne.divide(bigNumberTwo);
      result = { total: total.c[0], next: null, operation };
      break;
    case '-':
      total = bigNumberOne.minus(bigNumberTwo);
      result = { total: total.c[0], next: null, operation };
      break;
    case '+':
      total = bigNumberOne.plus(bigNumberTwo);
      result = { total: total.c[0], next: null, operation };
      break;
    case 'X':
      total = bigNumberOne.times(bigNumberTwo);
      result = { total: total.c[0], next: null, operation };
      break;
    case '%':
      return { total: bigNumberOne, next: bigNumberTwo / 100, operation };
    default:
      result = { total: bigNumberOne, next: bigNumberTwo, operation };
  }
  return result;
};

export default operate;
