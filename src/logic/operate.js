import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = {};
  let total = 0;

  switch (operation) {
    case '÷':
      total = Big(numberOne).div(numberTwo).toString();
      result = { total, next: null, operation };
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
      if (numberTwo != null) {
        return { total: Big(numberOne), next: numberTwo / 100, operation };
      }
      return { total: Big(numberOne) / 100, next: numberTwo, operation };
    default:
      result = { total: Big(numberOne), next: numberTwo, operation };
  }
  return result;
};

export default operate;
