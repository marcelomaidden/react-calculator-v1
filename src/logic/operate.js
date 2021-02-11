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
      result = Big(numberTwo).div(100).toString();
      if (numberOne === null) {
        return { total: result, next: null, operation };
      }
      return { total: Big(numberOne).toString(), next: result, operation };
    default:
      result = { total: Big(numberOne).toString(), next: numberTwo, operation };
  }
  return result;
};

export default operate;
