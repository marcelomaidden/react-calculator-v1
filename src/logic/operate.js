import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = {};
  let total = 0;

  switch (operation) {
    case '÷':
      if (numberTwo === '0') {
        result = { total: 'undefined', next: null, operation };
      } else {
        total = Big(numberOne).div(numberTwo).toString();
        result = { total, next: null, operation };
      }
      break;
    case '-':
      total = Big(numberOne).minus(numberTwo).toString();
      result = { total, next: null, operation };
      break;
    case '+':
      total = Big(numberOne).plus(numberTwo).toString();
      result = { total, next: null, operation };
      break;
    case 'X':
      total = Big(numberOne).times(numberTwo).toString();
      result = { total, next: null, operation };
      break;
    case '%':
      if (numberOne === null) {
        result = Big(numberTwo).div(100).toString();
        return { total: result, next: null, operation };
      }
      result = Big(numberTwo).div(100).toString();
      return { total: Big(numberOne).toString(), next: result, operation: null };
    default:
      result = { total: Big(numberOne).toString(), next: numberTwo, operation };
  }
  return result;
};

export default operate;
