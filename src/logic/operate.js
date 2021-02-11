import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);
  let result = {};
  let total = 0;

  switch (operation) {
    case '÷':
      total = bigNumberOne.div(bigNumberTwo).toString();
      result = { total, next: null, operation };
      break;
    case '-':
      total = bigNumberOne.minus(bigNumberTwo).toString();
      result = { total, next: null, operation };
      break;
    case '+':
      total = bigNumberOne.plus(bigNumberTwo).toString();
      result = { total, next: null, operation };
      break;
    case 'X':
      total = bigNumberOne.times(bigNumberTwo).toString();
      result = { total, next: null, operation };
      break;
    case '%':
      if (numberTwo != null) {
        return { total: bigNumberOne, next: bigNumberTwo / 100, operation };
      }
      return { total: bigNumberOne / 100, next: bigNumberTwo, operation };
    default:
      result = { total: bigNumberOne, next: bigNumberTwo, operation };
  }
  return result;
};

export default operate;
